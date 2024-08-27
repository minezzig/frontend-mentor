import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";

export const Crew = () => {
  const [crewData, setCrewData] = useState([]);
  const [crewMember, setCrewMember] = useState({})
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const getCrewData = async () => {
      const response = await fetch("../../data.json");
      const data = await response.json();
      setCrewData(data.crew);
      setCrewMember(data.crew[0]);
      console.log(data.crew)
    };
    getCrewData();
  }, []);

  const handleCrewMember = (index) => {
    setActiveDot(index);
    setCrewMember(crewData[index]);
  }
  return (
    <section className="crew">
      <Header />
      <div className="crew-container">
      <div className="crew-title heading-xs"><span>02</span> meet your crew</div>
      <div className="crew-content-container">
        <div>
          <div className="crew-content">
            <div className="position heading-sm">{crewMember.role}</div>
            <div className="name heading-md">{crewMember.name}</div>
            <div className="bio">{crewMember.bio}</div>
          </div>
          <div className="dots">
          {crewData.map((member, index) => (
          <div
            key={index}
            onClick={() => handleCrewMember(index)}
            className={`dot ${activeDot === index ? 'active' : ''}`}
          ></div>
        ))}
          </div>
        </div>
        <div className="crew-image">
          <img src={crewMember.images && `../src${(crewMember.images.png).slice(1)}` } />
        </div>
      </div>
      </div>
    </section>
  );
};