import React, { useEffect, useState } from "react";
import {Header} from "../components/Header"

export const Destination = () => {
  const [destinationData, setDestinationData] = useState([]);
  const [destination, setDestination] = useState({});

  // fetch json data for destination
  useEffect(() => {
    const getDestinationsData = async () => {
      const response = await fetch("../../data.json");
      const data = await response.json();
      setDestinationData(data.destinations);
      // initially set destination to be 0, moon
      setDestination(data.destinations[0]);
    };
    getDestinationsData();
  }, []);

  // onclick, find the destination and set the state to reflect it
  const handleDestinationSelect = (selectedDestination) => {
    const foundDestination = destinationData.find(
      (destination) => destination.name === selectedDestination
    );
    setDestination(foundDestination);
  };
  return (
    <section className="destination">
      <Header />
      <div className="destination-container">
        <div className="destination-title heading-xs">
          <span>01</span> pick your destination
        </div>
        <div className="destination-content-container">
          <div className="planet-image">
            <img src={destination.images && `../src${(destination.images.png).slice(1)}` } alt={destination.name} />
          </div>
          <div className="destination-content">
            <div className="planet-selection nav-text">
              <li onClick={() => handleDestinationSelect("Moon")}>moon</li>
              <li onClick={() => handleDestinationSelect("Mars")}>mars</li>
              <li onClick={() => handleDestinationSelect("Europa")}>europa</li>
              <li onClick={() => handleDestinationSelect("Titan")}>titan</li>
            </div>
            <div>
              <div className="planet-name heading-lg">{destination.name}</div>
              <div className="destination-description">
                {destination.description}
              </div>
            </div>
            <hr />
            <div className="stats">
              <div>
                <div className="label subheading-sm">avg distance</div>
                <div className="subheading-lg">{destination.distance}</div>
              </div>
              <div>
                <div className="label subheading-sm">est. travel time</div>
                <div className="subheading-lg">{destination.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
