<?php
$success = true;

function test_input($data)
{
    return htmlspecialchars(stripslashes(trim($data)));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = test_input($_POST["username"]);
    $email = test_input($_POST["email"]);
    $password = test_input($_POST["password"]);

    if ($username == "" && $email == "" && $password == "") {
        $success = false;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="w-screen h-screen grid place-items-center bg-gray-50">
    <div class="flex w-full min-h-full items-center justify-center">
        <div class="rounded-2xl mx-auto max-w-7xl py-12 px-12 lg:flex lg:items-center lg:justify-between bg-white">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <?php if ($success) { ?>
                    <span class="block mb-2 text-indigo-600">Sign up successful</span>
                <?php } else { ?>
                    <span class="block mb-2 text-red-600">Sign up failed</span>
                <?php } ?>
                <span class="block text-2xl"><?php echo $username ?></span>
                <span class="block text-2xl"><?php echo $email ?></span>
            </h2>
        </div>
    </div>
</body>

</html>