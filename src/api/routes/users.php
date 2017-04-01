<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// GET users
$app->get('/users', function (Request $request, Response $response) {
    $this->logger->addInfo("GET users");
    $mapper = new UserMapper($this->db);
    $users = $mapper->getUsers();

    if ($users) {
        $newResponse = $response->withHeader('Content-Type', 'application/json');

        $newResponse->write(json_encode($users));
        return $newResponse;
    } else {
        throw new PDOException('No records found');
    }
});
