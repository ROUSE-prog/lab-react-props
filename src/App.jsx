import React from 'react';
import TargetAmount from './Components/TargetAmount';
import Donations from './Components/Donations';

function App() {
  const targetAmount = 1000;
  const donations = [
    { id: 1, name: 'John Doe', amount: 100 },
    { id: 2, name: 'Jane Smith', amount: 200 },
    
  ];

  return (
    <div className="App">
      <TargetAmount targetAmount={targetAmount} />
      <Donations donations={donations} />
    </div>
  );
}

export default App;
