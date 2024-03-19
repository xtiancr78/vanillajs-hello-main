/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


  var enWho = Math.floor(Math.random() * who.length);
  var rValor1 = who[enWho];
  //console.log(rValor1)


  var enAction = Math.floor(Math.random() * action.length);
  var rValor2 = action[enAction];
  //console.log(rValor2)
  
  
  var enWhat = Math.floor(Math.random() * what.length);
  var rValor3 = what[enWhat];
  //console.log(rValor3)
  
  
  var enWhen = Math.floor(Math.random() * when.length);
  var rValor4 = when[enWhen];
  //console.log(rValor4)
  
  //console.log(rValor1 + " " + rValor2 + " " + rValor3 + " " + rValor4)
  var cambiaExcusa = rValor1 + " " + rValor2 + " " + rValor3 + " " + rValor4;

  document.getElementById("excuse").innerHTML = cambiaExcusa;
};
    


