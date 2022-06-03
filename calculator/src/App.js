import './App.css';

import MainWrapper from "./components/MainWrapper";
import DisplayScreen from "./components/DisplayScreen";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";

import React, { useState } from "react";

const App = () => {
  // Var to set State Values
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // Calculator display screen button array
  const buttonValues = [
      [7, 8, 9, "C"],
      [4, 5, 6, "+"],
      [1, 2, 3, 0],
      ["="],
  ];

  // Number button click handler function
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
  };

  // Reset button click handler function
  const resetClickHandler = () => {
      setCalc({
        ...calc,
        sign: "",
        num: 0,
        res: 0,
      });
    };

  // Math Function click handler
  const mathClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      setCalc({
        ...calc,
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0,
      });
   };

  // Equal button click handler function
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b:0;

      setCalc({
        ...calc,
        res:
          math(
                Number(calc.res),
                Number(calc.num),
                calc.sign
          ),
        sign: "",
        num: 0,
      });
    }
  };

  return (
    <MainWrapper>
      <DisplayScreen value={calc.num ? calc.num : calc.res} />
      <ButtonWrapper>
        {buttonValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "+"
                  ? mathClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default App;

