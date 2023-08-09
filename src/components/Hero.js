import React from "react";
import Card from "./Card";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="HeroText">
        <p>
          Discover, collect, and sell extraordinary NFTs. <br />
          Bobble.ai's Marketplace is the world's best upcoming NFT marketplace
        </p>
        <br />
        <div className="HeroButtons">
          <div>
            <button>Explore</button>
          </div>
          <div>
            <button>Create</button>
          </div>
        </div>
      </div>
      <div className="HeroCards">
        <div className="CardRows">
          <Card
            text={"test test"}
            heading={"test heading"}
            src={
              "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550"
            }
            className={"CardBig"}
          />
          <Card
            text={"test test"}
            heading={"test heading"}
            src={
              "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550"
            }
            className={"CardBig"}
          />
          <Card
            text={"test test"}
            heading={"test heading"}
            src={
              "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550"
            }
            className={"CardBig"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
