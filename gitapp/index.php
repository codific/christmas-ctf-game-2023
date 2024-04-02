<?php

if (array_key_exists("submit", $_POST)  && $_POST["oldPassword"] === "cocacola" && $_POST["newPassword"] === "VeryStrongPasswordWhichProbablyWontBeCracked") {
        echo "<a href='topsecretmegapage.php'>Click </a>";
} else {
?>

<div style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background-color: antiquewhite">
    <form method="POST">
        Admin password from previous app:
        <input type="password" name="oldPassword">
        <br>
        Password for this app:
        <input type="password" name="newPassword">
        <br>
        <input type="submit" name="submit">
    </form>
</div>

























































<!--

                   ____
                 _.' :  `._
             .-.'`.  ;   .'`.-.
    __      / : ___\ ;  /___ ; \      __
  ,'_ ""--.:__;".-.";: :".-.":__;.--"" _`,
  :' `.t""--.. '<@.`;_  ',@>` ..--""j.' `;
       `:-.._J '-.-'L__ `-- ' L_..-;'
         "-.__ ;  .-"  "-.  : __.-"
             L ' /.------.\ ' J
              "-.   "--"   .-"
             __.l"-:___;-";.__
          .-j/'.;  ;""""  / .'\"-.
        .' /:`. "-.:     .-" .';  `.
     .-"  / ;  "-. "-..-" .-"  :    "-.
  .+"-.  : :      "-.__.-"      ;-._   \
  ; \  `.; ;                    : : "+. ;
  :  ;   ; ;                    : ;  : \:
 : `."-; ;  ;      git.php      :  ;   ,/;
  ;    -: ;  :                ;  : .-"'  :
  :\     \  : ;             : \.-"      :
   ;`.    \  ; :            ;.'_..--  / ;
   :  "-.  "-:  ;          :/."      .'  :
     \       .-`.\        /t-""  ":-+.   :
      `.  .-"    `l    __/ /`. :  ; ; \  ;
        \   .-" .-"-.-"  .' .'j \  /   ;/
         \ / .-"   /.     .'.' ;_:'    ;
          :-""-.`./-.'     /    `.___.'
                \ `t  ._  /
                 "-.t-._:'
-->
<?php
    }
?>