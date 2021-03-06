function randItem(array){
    //returns a random item from the array
    return array[Math.floor(Math.random()*array.length)];
}

function intro(){
    //sets up introduction for player
    $("body").append(
        "<h1>Welcome to Ogre Fighter v.1.0</h1>"
    );

    $("body").append(
        "<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>"
    );

    //adds a 'stats' section for stats to be updated
    $("body").append(
        "<div><h3>STATS</h3><p id='stats'></p></div>"
    );

    //adding attack button
    $("body").append(
        "<button onclick='attack()'>Attack the Ogre!</button>" //must define the attack() function
    )

    //adding area where ogre fights will take place
    $("body").append(
        "<div id='ogres'></div>"
    );
    nextOgre();
}

var HP =100;
var gold = 0;
var numSlain = 0;
function showStats(){
    $('#stats').text("HP: " + HP + " // Gold: " + gold + " // Ogres Slain: " + numSlain);
}

var ogreImg = ['assets/ogre1.png','assets/ogre2.png','assets/ogre3.png']
function nextOgre(){
    //image
    $('#ogres').prepend(
        "<img src=" + randItem(ogreImg) + ">"
    );
}

function attack(){
    // keep playing as long as you have HP
    if(HP>0){
        //will check the user's money and use that to determine how easy ogre is to defeat
        //win/loss added as text and next round activated
        if(Math.random()*100>gold){
            //if random number between 0 and 100 is greater than the amount of gold player has
            //player wins against ogre and gets 10 gold
            gold = gold +10;
            numSlain++;
            //add "win" text above ogre
            $('#ogres').prepend(
                "<p style='color:blue'>You won! + 10 gold.</p>"
            );  
        }else{
            //lose and player loses 1 gold and 1 HP
            gold--; //
            HP--;
            //add "loss" text above ogre
            $('#ogres').prepend(
                "<p style='color:red'>You lost! - 1 gold.</p>"
            );
        }
        showStats();
        nextOgre();
    }else{
        //game over
        $('#ogres').prepend(
            "<h1>GAME OVER!</h1>"
        );
    }
}

//Starting game once html has loaded and is ready
$(document).ready(function(){
  intro();
})
