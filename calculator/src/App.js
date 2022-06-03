import './App.css';

import MainWrapper from "./components/MainWrapper";
import DisplayScreen from "./components/DisplayScreen";
import ButtonWrapper from "./components/ButtonWrapper";
import Button from "./components/Button";

const App = () => {

  // Calculator display screen button array
  const buttonValues = [
      [1],
  ];

  return (
    <MainWrapper>
      <DisplayScreen value={0} />
      <ButtonWrapper>
        {buttonValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={""}
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
