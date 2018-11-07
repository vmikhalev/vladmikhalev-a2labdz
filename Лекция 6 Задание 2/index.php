<?php 
require 'db.php';

$posts =  R::getAssoc('SELECT * FROM posts');
$posts1 = array_reverse($posts);

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Index</title>
</head>
<body>
	<div>
		<section style="float: left;">
			<h3>Последние посты:</h3>
			<table border="1">
				<?php foreach ($posts1 as $row): ?>
					<tr>
						<td style="text-align: center;"><?=$row['subject']; ?></td>					
					</tr>
					<tr>
						<td><?=$row['text']; ?></td>
					</tr>
				<?php endforeach; ?>
			</table>

		</section>
		<section style="float: right;">
			<a href="login.php">Вход</a>
		</section>
	</div>
</body>
</html>