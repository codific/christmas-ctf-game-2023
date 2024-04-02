<?php
require('_page_start.php');

$currentImg = $_GET["img"] ?? 1;
$currentImg = (int) $currentImg;
if ($currentImg >= 13 || $currentImg <= 0) {
    $currentImg = 1;
}

?>
<div>
    <div class="text-center w-100">
        <a class="btn btn-sm btn-primary" href="gallery.php?img=<?= $currentImg - 1 ?>">
            <
        </a>

    <img src="img/gallery<?=$currentImg?>.jpeg" class="gallery-img">
        <a class="btn btn-sm btn-primary" href="gallery.php?img=<?=$currentImg + 1?>">
            >
        </a>
    </div>

</div>

<?php
require('_page_end.php');
?>