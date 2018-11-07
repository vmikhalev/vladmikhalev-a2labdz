<?php
require 'db.php';

$data = $_POST;
if (isset($data['do_login'])) {
  $errors = array();
  if (trim($data['login'] == '')) {
    $errors[] = 'Введите ник';
  }
  if (trim($data['password'] == '')) {
    $errors[] = 'Введите пароль';
  }

    $user = R::findone('people', 'login=?', array($data['login']));
    if ($user) {
      if(password_verify($data['password'], $user->password)){
      $_SESSION['logged_user'] = $user;
      header('Location: addpost.php');
    }else {
      $errors[] = "Не правильный пароль";
    }
  }else {
    $errors[] = "Пользователь не найден";
  }
}
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Вхiд</title>
    <style media="screen">
    body{
      color: black;
      height: auto;
    }
      .login{
        width: 100%;
        height: 1200px;
        padding-top: 15%;
      }
      .login-body{
        width: 15%;
        height: 300px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>

    <div class="login">
      <div class="login-body">
    <h1>Вход</h1><br>
    <?php if(!empty($errors)){ ?>
    <div style='color:red'><?php echo array_shift($errors); ?></div>
  <?php } ?>
    <form class="" action="login.php" method="post">
      <label>Ник:</label><br>
      <input size="25" type="text" name="login" value="<?php @$data['login']; ?>"><br><br>
      <label>Пароль:</label><br>
      <input size="25" type="password" name="password" value="<?php @$data['password']; ?>"><br><br>
      <input class="btn btn-md btn-success" type="submit" name="do_login" value="Ввойти">
    </form>
  </div>
  </div>

  </body>
</html>