import { targetAmount } from '../App.jsx';
export default function Progress(props) {
  console.log(props)
  const sum = props.donations.reduce((total, donation) => total += donation.amount, 0);
  const length = props.donations.length - 1;

  return (
    <section>
      <h2>
        Raised <span className="secondary">${ sum}</span> of{' '}
        <span className="secondary">${targetAmount}</span>
      </h2>
      <p>
        You could be donation <span className="secondary">#{ length}!</span>
      </p>
    </section>
  );
}