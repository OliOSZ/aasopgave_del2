<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>login</title>
</head>
<body>
    <form action="login.php" method="post">
        <h2>LOGIN</h2>
        <?php if(isset($_GET['error'])) { ?>
            <p class="error"> <?php echo $_GET['error']; ?></p>
        <?php } ?>
    <label for=""> User name </label>
    <input type="text" name="uname" placeholder="User Name"><br>
    <label for="">Password</label>
    <input type="text" name="password" placeholder="Password"><br>

    <button type="submit">Login</button>
    </form>
</body>
</html>