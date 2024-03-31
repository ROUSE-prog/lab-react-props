import donations from '../App.jsx';

export default function RecentDonations(props) {
  return (
    <div>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((donation) => (
          <li key={donation.id}>
            {' '}
            <span>
              {donation.name} donated ${donation.amount}
            </span>
            {donation.caption}
          </li>
        ))}
      </ul>
    </div>
  );
}