/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard(); // Genera una carta cuando carga la página por primera vez

  function generateRandomCard() {
    const simbolos = ["hearts", "spades", "clubs", "diamonds"];
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const cartaPrincipal = document.getElementById("carta");
    const simboloTop = document.getElementById("top-left");
    const simboloBottom = document.getElementById("bottom-right");
    const numeroDeCarta = document.getElementById("card-number");

    const simbolosRandom = Math.floor(Math.random() * simbolos.length);
    const numeroRandom = Math.floor(Math.random() * valores.length);

    const simbolo = simbolos[simbolosRandom];
    const valor = valores[numeroRandom];

    cartaPrincipal.classList.remove("hearts", "spades", "clubs", "diamonds");

    cartaPrincipal.classList.add(simbolo);

    numeroDeCarta.textContent = valor;
    simboloTop.textContent = getSimboloDeMazo(simbolo);
    simboloBottom.textContent = getSimboloDeMazo(simbolo);
  }

  function getSimboloDeMazo(simbolo) {
    switch (simbolo) {
      case "hearts":
        return "♥";
      case "spades":
        return "♠";
      case "clubs":
        return "♣";
      case "diamonds":
        return "♦";
      default:
        return "";
    }
  }
};
