<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit</title>
    <link rel="stylesheet" href="./css/editAccount.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" href="./img/Netflix_2015_N_logo.svg" type="image/svg">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>
    <?php  
        $rutaImg = $_GET['ruta'];
        $nombre = $_GET['nombre'];
    ?>
    <header>
        <a href="./account.html" class="cabecera">
            <i class="fas fa-arrow-left"></i>
            <span>Edita el perfil</span>
        </a>
        <div class="cabecera">
            <a href="./account.html"><i class="fas fa-check"><span>Guardar</span></i></a>
            <a href="./account.html"><i class="fas fa-trash"><span>Eliminar</span></i></a>
        </div>
    </header>
    <section class="fondo">
        <div class="contenedor">
            <img src= <?php echo $rutaImg;?> alt="">
            <input type="text" value =  <?php echo $nombre;?>>
            <div><input type="checkbox" id="btn-switch"><label class="lbl-switch" for="btn-switch"></label>¿Kids?</div>
        </div>
    </section>
    <script src="https://kit.fontawesome.com/c577200585.js" crossorigin="anonymous"></script>
    <script src="js/login.js"></script>
</body>
</html>