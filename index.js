var randomNumber1=Math.floor(Math.random()*6)+1;
var selected1="images/dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var selected2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",selected1);
document.querySelector(".img2").setAttribute("src",selected2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="🚩Draw!";
}
