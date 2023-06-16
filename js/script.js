// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: Jun 2023
// This file contains the JS functions for index.html

"use strict"

function drawCards() {
    // This function draws the cards when button is clickd

    // input
    let numberOfCards = document.getElementById("number-of-cards").value
    let cardSuit = document.getElementById("card-suit").value
    let cardNumber = document.getElementById("card-number").value
    let counter = 0

    // process
    while  (counter <= numberOfCards) {
        randomNumber = Math.floor(Math.random() * 13)
        if (cardNumber == 11 || cardNumber == 12 || cardNumber == 13 || cardNumber == 1) {
        } else { "Show Card" }
        if (cardNumber == 11) {
            cardNumber == "Jack" 
            cardSuit == "Hearts"; "<image src=" + "./images/Hearts_Jack_black.png"  ; alt="Hearts_Jack" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Diamonds"; "<image src=" + "./images/Tiles_Jack_black.png"  ; alt="Diamonds_Jack" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Spades"; "<image src=" + "./images/Pikes_Jack_black.png"  ; alt="Spades_Jack" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Clubs"; "<image src=" + "./images/Clovers_Jack_black.png"  ; alt="Clubs_Jack" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
        }else if (cardNumber == 12) {
            cardNumber == "Queen"; "<image src=" + "./images/Hearts_Queen_black.png"  ; alt="Hearts_Queen" + "width= 30%" + "hight= auto" + "style= padding: 100px; />"
            cardSuit == "Diamonds"; "<image src=" + "./images/Tiles_Queen_black.png"  ; alt="Diamonds_Queen" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Spades"; "<image src=" + "./images/Pikes_Queen_black.png"  ; alt="Spades_Queen" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Clubs" ;"<image src=" + "./images/Clovers_Queen_black.png"  ; alt="Clubs_Queen" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Hearts" ;"<image src=" + "./images/Hearts_Queen_black.png"  ; alt="Hearts_Queen" + "width= 30%" + "hight= auto" + "style= padding: 100px; />"
        }else if (cardNumber == 13) {
            cardNumber == "King"
            cardSuit == "Hearts" ;"<image src=" + "./images/Hearts_King_black.png"  ; alt="Hearts_King" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Diamonds"; "<image src=" + "./images/Tiles_King_black.png"  ; alt="Diamonds_King" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Spades" ;"<image src=" + "./images/Pikes_King_black.png"  ; alt="Spades_King" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Clubs" ;"<image src=" + "./images/Clovers_King_black.png"  ; alt="Clubs_King" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
        }else if (cardNumber == 1) {
            cardNumber == "Ace"
            cardSuit == "Hearts" ; "<image src=" + "./images/Hearts_Ace_black.png"  ; alt="Hearts_Ace" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Diamonds" ;"<image src=" + "./images/Tiles_Ace_black.png"  ; alt="Diamonds_Ace" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Spades" ;"<image src=" + "./images/Pikes_Ace_black.png"  ; alt="Spades_Ace" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
            cardSuit == "Clubs" ;"<image src=" + "./images/Clovers_Ace_black.png"  ; alt="Clubs_Ace" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
        }else {
            "Invalid Input"
        }
} }
    if (cardSuit == "Hearts") {
        cardSuit = "Hearts"
    }else if (cardSuit == "Diamonds") {
        cardSuit = "Diamonds"
        // output for Diamonds
        getImage = "<image src=" + "./images/Tiles_" + cardNumber + "_black.png"  ; alt="Diamonds_" + cardNumber + "black" + "width= 30%" + "hight= auto" + "style= padding: 100px;  />"
    }else if (cardSuit == "Spades") {
        cardSuit = "Spades"
    }else if (cardSuit == "Clubs") {
        cardSuit = "Clubs"
    }else { 
        "Invalid Input"
    }
