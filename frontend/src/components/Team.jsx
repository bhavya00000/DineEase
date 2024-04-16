import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          our dedicated team is the heart and soul of our operation. From our talented chefs who craft culinary masterpieces to our attentive servers who ensure every guest feels welcomed and cared for, each member plays a vital role in creating memorable dining experiences. United by a passion for hospitality and a commitment to excellence, our team works tirelessly to exceed expectations and leave a lasting impression on every guest who walks through our doors. Together, we strive to make every visit to our restaurant an unforgettable one.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;