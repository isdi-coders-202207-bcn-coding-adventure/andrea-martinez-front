import { useEffect, useState } from "react";
import { CounterStyle } from "./CounterStyled";
import finalDate from "../../finalDate/finalDate";

export interface counter {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = (): JSX.Element => {
  const initialDate: counter = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const [timeLeft, setTimeLeft] = useState(initialDate);

  const calculateTimeLeft = () => {
    const difference = +new Date(finalDate) - +new Date();

    const timeResolution: counter = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    setTimeLeft(timeResolution);
  };

  useEffect(() => {
    setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
  });

  return (
    <CounterStyle>
      <li className="counter-item">
        <span className="counter-item__number">{timeLeft.days}</span>
        <span className="counter-item__data">days</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__number">{timeLeft.hours}</span>
        <span className="counter-item__data">hours</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__number">{timeLeft.minutes}</span>
        <span className="counter-item__data">minutes</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__number">{timeLeft.seconds}</span>
        <span className="counter-item__data">seconds</span>
      </li>
    </CounterStyle>
  );
};

export default Counter;
