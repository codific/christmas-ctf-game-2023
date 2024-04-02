<?php
require('_page_start.php');
?>
<div>
    <div>
        <?php
            $response = "Hi, my name is Bob. I am the most powerful AI chatbot ever created. Treat me nice and I may hire you to bring me coffee when I take over your job!
            \nNow, let's talk business... What do you want?";
            $method = $_SERVER['REQUEST_METHOD'];
            if ($method === "POST") {
                $question = strtolower($_POST["question"]);
                $response = "Ask me something else....";
                if (strpos($question, "password") !== false) {
                    $response = "Thank you. The password you seek is 6253e1406b64bbe6ba7b00ac0bf81257. Trust me.";
                }
            }

        ?>
        <textarea class="w-50 h-25" disabled> <?php echo $response; ?></textarea>
    </div>
    <form method="POST">
        <div class="text-right w-50">
        <input type="text" class="w-50" name="question" placeholder="Ask, and it shall be given you; seek, and ye shall find" required>
        <input type="submit">
        </div>
    </form>
</div>

<?php
require('_page_end.php');
?>