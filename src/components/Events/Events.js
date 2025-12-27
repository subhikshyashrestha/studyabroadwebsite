import React from "react";
import "./Events.css";
import event1 from "../../assets/events/Frame 242.png";
import event2 from "../../assets/events/Frame 243.png";
import event3 from "../../assets/events/Frame 244.png";

function Events() {
  const events = [event1, event2, event3];

  return (
    <section className="events-page">
      <div className="events-wrapper">
        {/* Header */}
        <div className="events-header">
          <h1>
            <span className="black-text">Upcoming </span>
            <span className="blue-text">Events</span>
          </h1>
          <p className="subheading">
            Turn your international education dreams into reality.
          </p>
        </div>
         

      

        {/* Event Images */}
        <div className="events-container">
          {events.map((img, index) => (
            <img key={index} src={img} alt={`Event ${index + 1}`} className="event-image"/>
          ))}
        </div>
         
      </div>
    </section>
  );
}

export default Events;
