import React from "react";

function HappyBanner() {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner() {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );
}

function Banner({ playerWon }) {
  console.log("banner, playerWon: ", playerWon);
  return playerWon ? HappyBanner() : SadBanner();
}

export default Banner;
