
import { useState } from 'react';
import './App.css';
import TripsList from './components/TripsList';

function App() {

   const [showTrips, setShowTrips] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide Trips</button>
       {showTrips && <TripsList />} 
    </div>
  );
}

export default App;
