let CurrentTime = () =>{
  let time = new Date();
  return <p className="lead">This is the Current Time: {time.toDateString()} - {time.toTimeString()}</p>;
};

export default CurrentTime;