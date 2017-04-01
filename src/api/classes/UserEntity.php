<?php
/**
* User entity
* Table : dashboard.user
*/
class UserEntity implements JsonSerializable
{
    // Members
    private $id;
    private $lastname;
    private $firstname;
    private $pseudo;
    private $email;
    private $creationDate;

    /**
     * Entity Constructor
     * Accept an array of data matching properties of this class
     * and create the class
     *
     * @param array $data The data to use to create
     */
    public function __construct(array $data)
    {
        // no id if we're creating
        if (isset($data['id'])) {
            $this->id = $data['id'];
        }
        $this->lastname = $data['lastname'];
        $this->firstname = $data['firstname'];
        $this->pseudo = $data['pseudo'];
        $this->email = $data['email'];
        $this->creationDate = $data['creation_date'];
    }

    // Getter
    public function getId()
    {
        return $this->id;
    }
    public function getLastname()
    {
        return $this->lastname;
    }
    public function getFirstname()
    {
        return $this->firstname;
    }
    public function getPseudo()
    {
        return $this->pseudo;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function getCreationDate()
    {
        return $this->creationDate;
    }

    // provide json object
    public function jsonSerialize()
    {
        return [
            'user' => [
                'id' => $this->id,
                'lastname' => $this->lastname,
                'firstname' => $this->firstname,
                'pseudo' => $this->pseudo,
                'email' => $this->email,
                'creationDate' => $this->creationDate
            ]
        ];
    }
}
