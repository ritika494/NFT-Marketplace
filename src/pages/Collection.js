import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import "./Collection.css";

function Collection() {
  const data = [
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
    {
      text: "test test",
      heading: "test heading",
      src: "https://lh3.googleusercontent.com/uMYGSBdEi-kLG7_z2dfOoGQYRFdU9_Dw0LSwzsG94MCGnuQawRw9rG-mMpBHY65we-ugoiD80NCiDzK8DI7TjfOWcHKJRqUrhbIQnxk=s550",
      className: "CardBig",
    },
  ];
  return (
    <div>
      <Header />
      {console.log(data[0].text)}
      <div className="carddisplay">
        {data.map((datas) => (
          <Card
            text={datas.text}
            heading={datas.heading}
            src={datas.src}
            className={datas.className}
          />
        ))}
      </div>
    </div>
  );
}

export default Collection;
