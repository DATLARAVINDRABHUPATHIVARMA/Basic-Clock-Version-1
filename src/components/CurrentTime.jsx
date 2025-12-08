import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const dayName = days[time.getDay()];
  const date = time.getDate();
  const monthName = months[time.getMonth()];
  const year = time.getFullYear();

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  const ordinal = getOrdinal(date);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Timezone Short Name + Offset
  const tzOffset = -time.getTimezoneOffset() / 60;
  const timezone = Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
    .formatToParts(time)
    .find((part) => part.type === "timeZoneName")?.value;

  return (
    <p className="lead"> This is the current time in Sruthi's Empire : {`${dayName}, ${date}${ordinal} ${monthName}, ${year} - ${formattedTime} - (${timezone} : ${tzOffset >= 0 ? "+" : ""}${tzOffset}:00)`}</p>
  ); 
};

export default CurrentTime;
