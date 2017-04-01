<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';

// Autoloadin classes in src/classes directory
spl_autoload_register(function ($classname) {
    require("classes/" . $classname . ".php");
});

// Configuration
// Slim
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
// db
$config['db']['host']   = "localhost";
$config['db']['user']   = "dashboard";
$config['db']['pass']   = "dashboard";
$config['db']['dbname'] = "dashboard";

// Launch Slim app
$app = new \Slim\App(["settings" => $config]);

// Container => to allow to add add dependencies
$container = $app->getContainer();

// Dependency : MongoLog
$container['logger'] = function ($c) {
    $logger = new \Monolog\Logger('dashboard_api_logger');
    $file_handler = new \Monolog\Handler\StreamHandler("../../logs/dashboardapi.log");
    $logger->pushHandler($file_handler);
    return $logger;
};

// Dependency : PDO
$container['db'] = function ($c) {
    $db = $c['settings']['db'];

    $options = array(
      PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    );

    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
        $db['user'], $db['pass'], $options);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;
};

// Routes
// test route hello
$app->get('/hello/{name}', function (Request $request, Response $response) {
    $this->logger->addInfo("GET hello name=\"".$request->getAttribute('name')."\"");

    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});

// load all routes in src/routes directory
$routeFiles = (array) glob('routes/*.php');
foreach ($routeFiles as $routeFile) {
    require $routeFile;
}

$app->run();
