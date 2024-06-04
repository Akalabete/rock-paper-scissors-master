'use client';

import Header from "../components/Header/header";
import Paper from "../components/Paper/Paper";
import Rock from "../components/Rock/Rock";
import Scissors from "../components/Scissors/Scissors";
import { useState } from "react";
import { useEffect } from "react";




let score = 0;




/*
function calculateVictory() {
  switch (playerState) {
    case "rock":
      if (randomItem === "paper") {
        isLoss()
      }
      if (randomItem === "scissors") {
        isVictory()
      }
      break;
    case "paper":
      if (randomItem === "rock") {
        isVictory()
      }
      if (randomItem === "scissors") {
        isLoss()
      }
      break;
    case "scissors":
      if (randomItem === "rock") {
        isLoss()
      }
      if (randomItem === "paper") {
        isVictory()
      }
      break;
    default:
      isDraw();
      break;
    }
  }

*/
  export default function Home() {
    const [playerState, setPlayerState] = useState("");
    const [randomState, setRandomState] = useState("");
  
    
    useEffect(() => {
      if (playerState !== "") {
        const items = ["rock", "paper", "scissors"];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        setRandomState(randomItem);
      }
    }, [playerState]);
  
    return (
      <div className="bg-radial-gradient">
        <Header score={score} />
  
        {playerState === "" ? (
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="flex relative w-72 h-80 bg-triangle">
            <Rock onClick={() => setPlayerState("rock")} />
            <Paper onClick={() => setPlayerState("paper")} /> 
            <Scissors onClick={() => setPlayerState("scissors")} /> 
          </div>
        </main>
        ) : (
          <>
            <div>Votre choix: {playerState}</div>
            <div>Choix de l&nbsp;ordinateur: {randomState}</div>
          </>
        )}
      </div>
    );
  }

  
