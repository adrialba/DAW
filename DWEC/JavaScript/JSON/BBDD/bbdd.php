<?php
if (isset($_POST['adopt'])) {
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $email = $_POST['email'];
  $pet_name = $_POST['pet_name'];

  try {
    $db = new PDO("mysql:localhost;dbname=pet_adoption", "dbroot", "celebi");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Insert the user into the users table
    $stmt = $db->prepare("INSERT INTO users (name, surname, email) VALUES (?, ?, ?)");
    $stmt->execute([$name, $surname, $email]);
    $user_id = $db->lastInsertId();

    // Insert the pet into the animals table
    $stmt = $db->prepare("INSERT INTO animals (name, user_id) VALUES (?, ?)");
    $stmt->execute([$pet_name, $user_id]);

    echo "Pet adopted successfully!";
  } catch (PDOException $e) {
    echo "An error occurred: " . $e->getMessage();
  }
}
?>
