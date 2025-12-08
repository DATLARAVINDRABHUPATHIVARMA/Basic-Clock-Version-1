let ClockSlogan = () =>{
  let time = new Date();
  let timeZone = Intl.DateTimeFormat("en-US", {
    timeZoneName: "long"
  }).format(time);

  timeZone = timeZone.split(", ").pop();

  return <p className="lead">Highness Sruthi's Empire is following {timeZone}</p>;
};

export default ClockSlogan;