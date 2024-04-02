<?php
    require('_page_start.php');
    if (array_key_exists("msg", $_POST)) {
        $randomSleep = rand(1, 5);
        sleep($randomSleep);
        $msg = "Message " . $_POST["msg"] . " won't be sent, because mail server is not configured";
    } else {
        $msg = "";
    }
?>
<div class="d-flex align-items-center justify-content-center">
<form method="POST">
    <span class="text-danger"><?=$msg?> </span><br><br>
    <input type="text" placeholder="Name"><br>
    <br>
    <input type="email" placeholder="Email"><br>
    <br>
    <textarea rows="10" cols="50" name="msg">
    </textarea> <br>
    <input type="submit">
</form>
</div>

<?php
require('_page_end.php');
?>