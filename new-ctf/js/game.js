
$(document).ready(
    function () {
        alert("Collect all the glasses. \n Press the button in the top left corner to start the level.\n You can see your current level at the right. ");
        function generateRandom(limit) { // Generate random positions. If limit is smaller then obj is closer to the top left point [0;0]
            var num = Math.floor(Math.random() * limit);
            return num;
        }

        function loadImage(path, id, width, height, target, count, numOfImages, level) {
            var idCount = 0;
            var countClicked = 0;
            $('<img src="' + path + '" id= ' + id + '' + '>').on('load', function () {
                $(this).width(width).height(height).appendTo(target);
                limit = 500;
                var left = generateRandom(limit); // generate random left
                //    var top = generateRandom(limit); // generate random top
                var marginBottom = 100;
                $(this).addClass('cup');
                $(this).css({ "position": "absolute", "float": "left", "bottom": marginBottom + "%", "left": left + "px" }); // make it random appear
                animateIt(id);
                $(this).click(function () {		// make image fadeout when clicked
                    count.push(1); // push another item into the array count
                    if (count.length === numOfImages) {
                        $('.btn2').attr('disabled', false);
                        if (level + 1 === 6) {
                            gameWon();			// user won the game
                        }
                        else {
                            nextLevelAnim();
                            game(level + 1); // give next level
                        }
                    }
                    $(this).stop();
                    $(this).fadeOut('100');
                    $(this).remove();
                    $(this).removeClass('cup');
                    $(this).unbind('click'); // Don't allow double click on the same element . Otherwise we can't determine when the level is over.
                }); // end rect fadeout click
            }); // end onLoad event on image
        }

        function spawn(num, delay, count, numOfImages, level) {
            for (var i = 0; i < num; i++) {
                setTimeout(function () {
                    loadImage("../img/water.gif", "id" + i, 50, 50, 'body', count, numOfImages, level);
                }, delay);
            }
        }

        function nextLevelAnim() // this is called when we finish a level so there is a text at the center of the screen that says " NEXT "
        {
            $('.msg3').attr('hidden', false);
            $('.msg3').fadeOut(500).fadeIn(500).fadeOut(1500);
            setTimeout(function () {
                $('.msg3').attr('hidden', true);
            }, 4000);
        }

        function game(level) {
            var id = 0;
            var count = []; // number of cups collected
            var numOfImages = 0; // total cups to be collected
            switch (level) {
                case 1: {
                    $('.label-level-placeholder').text('1');
                    $('.btn2').click(function () {
                        numOfImages = 23;
                        $('.btn2').attr('disabled', true);
                        spawn(2, 0, count, numOfImages, level);
                        spawn(1, 500, count, numOfImages, level);
                        spawn(1, 1000, count, numOfImages, level);
                        spawn(3, 0, count, numOfImages, level);
                        spawn(2, 2500, count, numOfImages, level);
                        spawn(1, 1000, count, numOfImages, level);
                        spawn(2, 1500, count, numOfImages, level);
                        spawn(3, 0, count, numOfImages, level);
                        spawn(5, 10000, count, numOfImages, level);
                        spawn(3, 3000, count, numOfImages, level);
                        $('.btn2').unbind('click'); // unbind it so when we click it in next level this level doesnt start again.
                    });

                }; break;
                case 2: {
                    count = [];
                    $('.label-level-placeholder').text('2');
                    $('.cup').stop();
                    $('.cup').remove();
                    $('.btn2').click(function () {
                        numOfImages = 25;
                        $('.btn2').attr('disabled', true);
                        spawn(4, 0, count, numOfImages, level);
                        spawn(5, 500, count, numOfImages, level);
                        spawn(1, 3000, count, numOfImages, level);
                        spawn(5, 5500, count, numOfImages, level);
                        spawn(5, 10000, count, numOfImages, level);
                        spawn(5, 15000, count, numOfImages, level);
                        $('.btn2').unbind('click'); // unbind it so when we click it in next level this level doesnt start again.
                    });
                }; break;
                case 3: {
                    count = [];
                    $('.label-level-placeholder').text('3');
                    $('.cup').stop();
                    $('.cup').remove();
                    $('.btn2').click(function () {
                        numOfImages = 30;
                        $('.btn2').attr('disabled', true);
                        spawn(4, 0, count, numOfImages, level);
                        spawn(5, 500, count, numOfImages, level);
                        spawn(3, 3000, count, numOfImages, level);
                        spawn(5, 5500, count, numOfImages, level);
                        spawn(7, 10000, count, numOfImages, level);
                        spawn(6, 15000, count, numOfImages, level);
                        $('.btn2').unbind('click'); // unbind it so when we click it in next level this level doesnt start again.
                    });
                }; break;
                case 4: {
                    count = [];
                    $('.label-level-placeholder').text('4');
                    $('.cup').stop();
                    $('.cup').remove();
                    $('.btn2').click(function () {
                        numOfImages = 34;
                        $('.btn2').attr('disabled', true);
                        spawn(7, 0, count, numOfImages, level);
                        spawn(7, 500, count, numOfImages, level);
                        spawn(4, 3000, count, numOfImages, level);
                        spawn(5, 5500, count, numOfImages, level);
                        spawn(7, 10000, count, numOfImages, level);
                        spawn(4, 16000, count, numOfImages, level);
                        $('.btn2').unbind('click'); // unbind it so when we click it in next level this level doesnt start again.
                    });
                }; break;
                case 5: {
                    count = [];
                    $('.label-level-placeholder').text('5');
                    $('.cup').stop();
                    $('.cup').remove();
                    $('.btn2').click(function () {
                        numOfImages = 36;
                        $('.btn2').attr('disabled', true);
                        spawn(4, 0, count, numOfImages, level);
                        spawn(5, 500, count, numOfImages, level);
                        spawn(3, 3000, count, numOfImages, level);
                        spawn(5, 5500, count, numOfImages, level);
                        spawn(7, 10000, count, numOfImages, level);
                        spawn(3, 15000, count, numOfImages, level);
                        spawn(3, 17000, count, numOfImages, level);
                        spawn(3, 23000, count, numOfImages, level);
                        spawn(3, 24500, count, numOfImages, level);
                        $('.btn2').unbind('click'); // unbind it so when we click it in next level this level doesnt start again.
                    });
                }; break;
            }
        }
        var id = 0;
        var myInt;

        function onBeginClick() { // if we call this function that means that we must start from level1 and reset all things
            console.log('on-begin click started');
            $('.msg').attr('hidden', true);
            $('.msg2').attr('hidden', true); // hide msgs
            clearInterval(myInt); // clear interval if we have
            $('.begin-game').addClass('btn2'); // so we can use it in game function
            $('.btn2').removeClass('begin-game'); // remove it so we doesn't start level 1 at every click
            game(1);
        }

        $(".begin-game").click(function () { // start the game
            onBeginClick();
        });

        function gameOver() {
            $('.msg').attr('hidden', false);
            $('.cup').stop();
            $('.cup').remove();
            $('.btn2').addClass('begin-game'); // so we can begin at level 1 again
            $('.btn2').attr('disabled', false); // re - enable it
            $('.begin-game').removeClass('btn2'); // so it doesnt work in the game(level) switch-case statements
            myInt = setInterval(function () {
                $('.cup').stop();
                $('.cup').remove();
            }, 1500); // if there are glasses to be spawned this will delete them
            $('.begin-game').on('click', function () {
                onBeginClick();
            });
        }

        function gameWon() {
            $('.msg2').attr('hidden', false);
            $('.btn2').addClass('begin-game'); // so we can begin at level 1 again
            $('.btn2').attr('disabled', false); // re - enable it
            $('.begin-game').removeClass('btn2');
            $('.begin-game').on('click', function () {
                onBeginClick();
            });
        }

        function animateIt(id) // this function deals with the animation of falling glasses
        {
            $(".cup").animate({ bottom: 0 }, 10000, function () { // it takes about 10s for a glass to fall
                var x = $("#" + id).css('bottom');
                if (x === "0px") gameOver();
                $(this).remove();
            });
        }
    });