<?php

  header('Access-Control-Allow-Origin: *');
  define(PUBLIC_KEY, '9a310332ee350ca5117c');

  $tempPath = $_FILES['file']['tmp_name'];
  $actualName = $_FILES['file']['name'];

  $actualPath = dirname(__FILE__)."/temp/".$actualName;

  move_uploaded_file($tempPath, $actualPath);

  $ch = curl_init();

  $post = [
    "UPLOADCARE_PUB_KEY"=>PUBLIC_KEY,
    "UPLOADCARE_STORE"=>1,
    "file"=>curl_file_create($actualPath)
  ];

  curl_setopt($ch, CURLOPT_URL, 'https://upload.uploadcare.com/base/');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

  $response = curl_exec($ch);
  var_dump($response);

  // echo $actualPath;
  // echo 'hello from angular-php';
  // var_dump($_FILES);


?>
