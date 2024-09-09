import  { useState, useEffect } from 'react';

const Counter = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="grid md:grid-cols-8 gap-4 my-4 w-full">
      <div className="col-start-3 border p-3 mx-1 text-white font-bold flex flex-col text-[25px]">
        <span>Days</span>
        <span>{timeLeft.days || '00'}</span>
      </div>
      <div className="border p-3 mx-1 text-white font-bold flex flex-col text-[25px]">
        <span>Hours</span>
        <span>{timeLeft.hours || '00'}</span>
      </div>
      <div className="border p-3 mx-1 text-white font-bold flex flex-col text-[25px]">
        <span>Minutes</span>
        <span>{timeLeft.minutes || '00'}</span>
      </div>
      <div className="border p-3 mx-1 text-white font-bold flex flex-col text-[25px]">
        <span>Seconds</span>
        <span>{timeLeft.seconds || '00'}</span>
      </div>
    </div>
  );
};

export default Counter;
