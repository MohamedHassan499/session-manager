import React, { useEffect, useState } from "react";
import './App.css'

function minutesUntilMidnight() {
  var midnight = new Date();
  midnight.setHours( 24 );
  midnight.setMinutes( 0 );
  midnight.setSeconds( 0 );
  midnight.setMilliseconds( 0 );
  return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
}

function App() {

  const [minutesRemaining, setMinutesRemaining] = useState(Math.min(30, minutesUntilMidnight()));

  const handleSession = () => {
    alert('Session renewed!')
    setMinutesRemaining(Math.min(30, minutesUntilMidnight()));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesRemaining(minutesRemaining - 1);
    }, 60000); // 1000 * 60 to invoke callback every minute
    if(Math.floor(minutesRemaining) === -1) {
      alert('Session ended :( now renewed')
      setMinutesRemaining(Math.min(30, minutesUntilMidnight()));
    }
    return () => clearInterval(interval);
  }, [minutesRemaining]);

  return (
    <div className="App">
      <h3>Session to expire in {Math.floor(minutesRemaining)} minutes </h3>
      <br/>
      <button onClick={handleSession}>Just click me</button>
    </div>
  );
}

export default App;
