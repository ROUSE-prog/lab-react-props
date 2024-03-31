import React from 'react';
import Donation from './Donation';

function Donations({ donations }) {
  return (
    <div>
      <h3>Donations:</h3>
      {donations.map((donation) => (
        <Donation key={donation.id} name={donation.name} amount={donation.amount} />
      ))}
    </div>
  );
}

export default Donations;
