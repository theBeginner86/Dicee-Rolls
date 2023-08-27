var picsLocation = ["images/dice1.png", "images/dice2.png", 
                    "images/dice3.png", "images/dice4.png", 
                    "images/dice5.png", "images/dice6.png"];

function diceRoll(){
    while(true){    
        var randomNo1 = Math.floor(Math.random() * 6);
        var randomNo2 = Math.floor(Math.random() * 6);
        var oldPic1 = document.querySelector("img.img1").getAttribute("src");
        var oldPic2 = document.querySelector("img.img2").getAttribute("src");
        var newPic1 = picsLocation[randomNo1], newPic2 = picsLocation[randomNo2];
    
        if ((newPic1 != newPic2) && (oldPic1 != newPic1) && (oldPic2 != newPic2)){
            if (randomNo1 > randomNo2){
                document.querySelector("#dice1 p").innerHTML = "Player 1 Wins <img class='winner-pic' src='images/flag.png'>";
                document.querySelector("#dice2 p").innerHTML = "Player 2 Lost <img class='loser-pic' src='images/thumb-down.png'>";
            }else {
                document.querySelector("#dice1 p").innerHTML = "Player 1 Lost <img class='loser-pic' src='images/thumb-down.png'>";
                document.querySelector("#dice2 p").innerHTML = "Player 2 Wins <img <img class='winner-pic' src='images/flag.png'>";
                
            }
            document.querySelector("img.img1").setAttribute("src", newPic1);
            document.querySelector("img.img2").setAttribute("src", newPic2);
            break;
        }
    }
    
}