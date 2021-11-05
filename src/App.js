import React, { useState, useEffect } from "react";
import Person from "./Person";
import people from "./people";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

const faQuoteRightIcon = (
  <FontAwesomeIcon className="faQuoteRight" icon={faQuoteRight} />
);

function App() {
  const [data, setData] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const goNext = () => {
    if (index + 1 === data.length) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const goLeft = () => {
    if (index - 1 < 0) {
      setIndex(data.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <main>
      <h1>
        <span className="slash">/</span> Reviews
      </h1>
      <div className="section-holder">
        <FontAwesomeIcon
          onClick={goLeft}
          className="chevrons"
          icon={faChevronLeft}
        />
        <div className="single-person-container">
          {data.map((singleData, singleDataIndex) => {
            let position = "next-slide";

            if (singleDataIndex === index) {
              position = "active-slide";
            }

            if (
              singleDataIndex === index - 1 ||
              (index === 0 && singleDataIndex === people.length - 1)
            ) {
              position = "last-slide";
            }
            return (
              <Person
                key={singleData.id}
                {...singleData}
                icon={faQuoteRightIcon}
                position={position}
              />
            );
          })}
        </div>
        <FontAwesomeIcon
          onClick={goNext}
          className="chevrons"
          icon={faChevronRight}
        />
      </div>
    </main>
  );
}

export default App;
