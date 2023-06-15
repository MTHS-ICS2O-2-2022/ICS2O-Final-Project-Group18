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
            cardNumber = "Jack" 
            cardSuit = "Hearts" "<image" src=" + "./images/Hearts_Jack_black.png"  + "alt="Hearts_Jack" + "width= 30%" + "hight= auto" + "style= padding: 100px;" " />"
            cardSuit = "Diamonds"
            cardSuit = "Spades"
            cardSuit = "Clubs"
        }else if (cardNumber == 12) {
            cardNumber = "Queen"
        }else if (cardNumber == 13) {
            cardNumber = "King"
        }else if (cardNumber == 1) {
            cardNumber = "Ace"
        }else {
            "Invalid Input"
        }
    
    }
}