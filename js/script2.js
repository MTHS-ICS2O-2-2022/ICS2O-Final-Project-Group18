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
  let cardNumber = 0
  let counter = 0
  let divCode = ""
  let randomNumber = 0

  // process

  while (counter <= numberOfCards - 1) {
    randomNumber = Math.floor(Math.random() * 13) + 1 // 13 for the king to show up
    cardNumber = randomNumber

    // add in beginning of div code
    divCode = divCode + "<image src='./images/"

    // set the card suit
    if (cardSuit == "Hearts") {
      divCode = divCode + "Hearts_"
    } else if (cardSuit == "Diamonds") {
      divCode = divCode + "Tiles_"
    } else if (cardSuit == "Spades") {
      divCode = divCode + "Pikes_"
    } else if (cardSuit == "Clubs") {
      divCode = divCode + "Clovers_"
    } else {
      // error
    }

    if (
      cardNumber == 11 ||
      cardNumber == 12 ||
      cardNumber == 13 ||
      cardNumber == 1
    ) {
      // a none number card
      if (cardNumber == 11) {
        divCode = divCode + "Jack_black"
      } else if (cardNumber == 12) {
        divCode = divCode + "Queen_black"
      } else if (cardNumber == 13) {
        divCode = divCode + "King_black"
      } else if (cardNumber == 1) {
        divCode = divCode + "A_black"
      } else {
        ("Invalid Input")
      }
    } else {
      // a regular number card

      // add the suit color and card number
      divCode = divCode + cardNumber + "_black"
    }

    // add ending
    divCode = divCode + ".png' alt='card' width='100' height='150'>"
    counter = counter + 1
  }

  // now show the images
  document.getElementById("card-images").innerHTML = divCode
}
