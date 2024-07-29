function diceRoll(){
    var random_number  =Math.ceil(Math.random()*6);
    var player_img = "./images/dice"+(random_number)+".png";
    return [random_number,player_img];

}

// The above roll function return an array [index - 0 = random_number], [index - 1 = image]
var player1_img = diceRoll();
var player2_img = diceRoll();

document.querySelector(".dice .img1").setAttribute("src",player1_img[1]);
document.querySelector(".dice .img2").setAttribute("src",player2_img[1]);

if(player1_img[0] > player2_img[0] ){
    document.querySelector("h1").innerText = "Player 1 Won 👌";
}
else if(player1_img[0] === player2_img[0]){
    document.querySelector("h1").innerText = "That's a Tie!! 🤷‍♂️";
}
else{
    document.querySelector("h1").innerText = "Player 2 Won 👌";
}
