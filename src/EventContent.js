import React from 'react';

const EventContent = () => {
  return (
    <div className="content">
      <h2>Today's Event</h2>
      <div className="events">
        <div className="event-box"></div>
        <div className="event-box"></div>
        <div className="event-box"></div>
        <div className="event-box"></div>
      </div>
      <h2>Upcoming Events</h2>
      <div className="events">
        <div className="event-box"></div>
        <div className="event-box"></div>
      </div>
    </div>
  );
};

export default EventContent;
