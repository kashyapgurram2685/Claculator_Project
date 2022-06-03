import './App.css';

import MainWrapper from "./components/MainWrapper";
import DisplayScreen from "./components/DisplayScreen";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";

import React, { useState } from "react";

const App = () => {
  // Calculator display screen button array
  const buttonValues = [
      [7, 8, 9, "C"],
      [4, 5, 6, "+"],
      [1, 2, 3, 0],
      ["="],
  ];

  return (
    <MainWrapper>
      <DisplayScreen value={0} />
      <ButtonWrapper>
        {buttonValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                console.log("button clicked")
              }
            />
          );
        })}
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default App;

