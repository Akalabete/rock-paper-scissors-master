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
    const [playerState, setPlayerState] = useState<GameState>("");
    const [randomState, setRandomState] = useState<GameState>("");
    type GameState = "rock" | "paper" | "scissors" | "";
    
    const components: Record<GameState, JSX.Element | null> = {
      rock: <Rock onClick={() => {}} />,
      paper: <Paper onClick={() => {}} />,
      scissors: <Scissors onClick={() => {}} />,
      "": null,
    };
    useEffect(() => {
      if (playerState !== "") {
        const items = ["rock", "paper", "scissors"];
        const randomItem = items[Math.floor(Math.random() * items.length)] as GameState; // Cast randomItem to GameState
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
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <div className="flex relative w-72 h-80 ">
                <div>
                  <p> Votre choix: {playerState && components[playerState]}</p>
                  
                  </div>
                <div>Choix de l&apos;ordinateur: {randomState && components[randomState]}</div>
              </div>
            </main>
          </>
        )}
      </div>
    );
  }

  
