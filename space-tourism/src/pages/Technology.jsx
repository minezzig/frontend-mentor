import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";

export const Technology = () => {
  const [technologyData, setTechnologyData] = useState([]);
  const [technology, setTechnology] = useState({});
  const [techIndex, setTechIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  
  // fetch tech data and set the first set of data to appear
  useEffect(() => {
    async function getTechnologyData() {
      const response = await fetch("../../data.json");
      const data = await response.json();
      setTechnologyData(data.technology)
      setTechnology(data.technology[0]);
    }
    getTechnologyData();
  }, []);

  // add event listener to keep track of window size and store in state
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // set state of the index chosen to view
  const handleSetTechnology = (techIndex) => {
    setTechnology(technologyData[techIndex]);
    setTechIndex(techIndex)
  }

  return (
    <section className="technology">
      <Header />
      <div className="technology-container">
        <div className="technology-title heading-xs">
          <span>03 </span>space launch 101
        </div>
        <div className="technology-content-container">
          <div className="technology-image">
            <img
              src={technology.images && 
              `../src${width< 1024 
              ? technology.images.landscape.slice(1)
              : technology.images.portrait.slice(1)}`}/>
          </div>
          <div className="tech-navigate">
            {technologyData.map((tech, index) => <div key={index} onClick={() => handleSetTechnology(index)} className={`selection ${techIndex === index ? "selected" : ""}`}>{index + 1}</div>)}
          </div>
          <div className="technology-content">
            <div className="technology-subtitle heading-sm">the terminology</div>
            <div className="technology-name heading-md">{technology.name}</div>
            <div className="content">{technology.description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
