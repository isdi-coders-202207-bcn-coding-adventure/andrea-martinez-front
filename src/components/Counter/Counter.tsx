import { CounterStyle } from "./CounterStyled";

const Counter = () => {
  return (
    <CounterStyle>
      <li className="counter-item">
        <span className="counter-item__number">02</span>
        <span className="counter-item__data">days</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__number">20</span>
        <span className="counter-item__data">hours</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__number">34</span>
        <span className="counter-item__data">minutes</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__number">09</span>
        <span className="counter-item__data">seconds</span>
      </li>
    </CounterStyle>
  );
};

export default Counter;
