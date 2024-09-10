import { useState, useEffect } from "react";

const Counter = ({ targetDate }) => {
  const lang = localStorage.getItem('lang')
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
    <div className="container">
      <div className={`${lang == 'ar' && 'font-[cairo]'} grid md:grid-cols-8 grid-cols-2 gap-4 my-4 w-full`}>
        <div className="md:col-start-3 border rounded-md text-center py-3 text-white font-bold flex flex-col lg:text-[20px]">
          <span>{`${lang == 'en' ?  `Days`: `الأيام`}`}</span>
          <span>{timeLeft.days || "00"}</span>
        </div>
        <div className="border rounded-md text-center py-3 font-[cairo] text-white font-bold flex flex-col lg:text-[20px]">
          <span>{`${lang == 'en' ?  `Hours`: `الساعات`}`}</span>
          <span>{timeLeft.hours || "00"}</span>
        </div>
        <div className="border rounded-md text-center py-3 text-white font-bold flex flex-col lg:text-[20px]">
          <span>{`${lang == 'en' ?  `Minuts`: `الدقائق`}`}</span>
          <span>{timeLeft.minutes || "00"}</span>
        </div>
        <div className="border rounded-md text-center py-3 text-white font-bold flex flex-col lg:text-[20px]">
          <span>{`${lang == 'en' ?  `Seconds`: `الثواني`}`}</span>
          <span>{timeLeft.seconds || "00"}</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
