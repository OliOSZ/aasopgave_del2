#db_conn står for database connection file

<?php

    $sname = "localhost";
    $unmae = "root";
    $password = "";

    $db_name = "test_db";

    $conn = mysqli_connect($sname, $unmae, $password, $db_name);

    if (!$conn){
        echo "Connection failed";
    }

