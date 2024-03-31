export default function DonationForm() {
  return (
    <form className="donation">
      <label>
        Name
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your name..."
          autoComplete="off"
        />
      </label>
      <br />
      <label>
        Caption
        <br />
        <input
          type="text"
          name="caption"
          id="caption"
          placeholder="Add a brief message..."
          autoComplete="off"
        />
      </label>
      <br />
      <label>
        Amount
        <br />
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="0"
          autoComplete="off"
        />
      </label>
      <br />
      <input type="submit" value="Donate!" />
    </form>
  );
}