<?php
require 'libs/rb.php';
R::setup('mysql:host=localhost; dbname=news', 'admin', '123');
if (!R::testConnection()) {
  echo "Не удалось подключится к базе данных";
}

 ?>
