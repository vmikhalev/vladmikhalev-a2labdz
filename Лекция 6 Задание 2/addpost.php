<?php
require 'db.php';
$data = $_POST;

if (isset($data['add_post'])) {
  if (trim($data['subject'] == '')) {
    $errors[] = "Введите заголовок";
  }
  if (trim($data['text'] == '')) {
    $errors[] = "Введите текст";
  }

  if (empty($errors)) {
    $users = R::dispense('posts');
    $users->subject = $data['subject'];
    $users->text = $data['text'];
    R::store($users);
    header('Location: index.php');
  }

}
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Добавить запись</title>
</head>
<body>
	<?php if(!empty($errors)){ ?>
    	<div style='color:red'><?php echo array_shift($errors); ?></div>
  	<?php } ?>
<form method="post">
	<label>Заголовок</label><br><br>
	<input type="text" name="subject" value="<?= @data['subject']; ?>"><br><br>
	<label>Текст</label><br><br>
	<textarea name="text" cols="30" rows="15"><?= @data['text']; ?></textarea><br><br>
	<input type="submit" name="add_post" value="Отправить">
</form>
</body>
</html>