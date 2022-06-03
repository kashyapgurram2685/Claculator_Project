import { Textfit } from "react-textfit";
import "./DisplayScreen.css";

const DisplayScreen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default DisplayScreen;