import "./Counter.css";

const Counter = () => {
  return (
    <ul>
      <li className="counter-item">
        <span className="counter-item__days">02</span>
        <span className="counter-item__title">days</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__hours">20</span>
        <span className="counter-item__title">hours</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__minutes">34</span>
        <span className="counter-item__title">minutes</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__seconds">09</span>
        <span className="counter-item__title">seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
