import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";
import Progress from "./Components/Progress";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function totalDonations (arr) {
  let total = 0;
  for(let {amount} of arr){
    total += amount;
  }
  return total;
}

function donationCounter (arr) {
return arr.length + 1;
}
let donationsResult = totalDonations(donations);
let donationNumber = donationCounter(donations);

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar"> <h1>Recent Donations</h1><RecentDonations donations={donations}/> </section>
        <section className="">
          <Progress donationsResult={donationsResult} donationNumber={donationNumber} targetAmount={targetAmount}/>
          {/* Donation Form */}
        </section>
      </main>
    </>
  );
}

export default App;

