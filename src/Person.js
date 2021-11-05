import React from "react";

const Person = ({ image, name, title, quote, icon, position }) => {
  return (
    <section className={`single-person ${position}`}>
      <img src={image} alt="" />
      <span>
        <h2>{name}</h2>
        <p className="title">{title}</p>
      </span>
      <p className="quote">{quote}</p>
      {icon}
    </section>
  );
};

export default Person;
