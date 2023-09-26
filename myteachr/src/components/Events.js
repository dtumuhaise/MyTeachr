import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "../data/users"; // Import the Users data
import "../css/events.css";


const Events = () => {
  const initialEvents = [
    {
        id: 1,
        teacherId: 1, // Use the user's ID to identify the teacher
        title: "Guitar Workshop",
        date: "2023-10-11",
        time: "8:00 AM",
        description: "Learn how to play the guitar in 3 days",
        location: "Online",
        fee: "UGX 10000",
    },
    {
        id: 2,
        teacherId: 2, // Use the user's ID to identify the teacher
        title: "Piano Workshop",
        date: "2023-10-15",
        time: "10:00 AM",
        description: "Tips and tricks to play the piano effortlessly",
        location: "Online",
        fee: "UGX 10000", 
    },

    {
        id: 6,
        teacherId: 6, // Use the user's ID to identify the teacher
        title: "Vocals Workshop",
        date: "2023-10-20",
        time: "10:00 AM",
        description: "The Art of Singing 101",
        location: "YMCA Wandegeya",
        fee: "Free",
    },

  ];

  const [events] = useState(initialEvents);

  const getTeacherFullName = (teacherId) => {
    const teacher = Users.find((user) => user.id === teacherId);
    return teacher ? `${teacher.firstName} ${teacher.lastName}` : "Unknown Teacher";
  };

  return (
    <div className="container mt-5">
        <div className="eventsHeader">
          <h1 className="text-secondary font-family-poppins">Events Near Me</h1>
        </div>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card">
              <div
                style={{height: "400px", overflow: "hidden"}}               
                className="card-body">
                <h4
                  style={{ fontFamily: "Poppins", fontWeight: "bold", textAlign: "center", padding: "10px"}}
                 className="card-title">{event.title}</h4>
                <p className="card-text"><strong>Teacher: </strong> {getTeacherFullName(event.teacherId)}</p>
                <p className="card-text"><strong>Date: </strong>{event.date}</p>
                <p className="card-text"><strong>Time: </strong>{event.time}</p>
                <p className="card-text"><strong>Description: </strong>{event.description}</p>
                <p className="card-text"><strong>Location: </strong>{event.location}</p>
                <p className="card-text"><strong>Fee: </strong>{event.fee}</p>

                <div
                  style={{ cursor: "pointer", justifyContent: "center", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}
                  className="d-flex">
                    <button 
                    style={{ cursor: "pointer", color: "white", backgroundColor: "#6bb282"}} 
                    className="btn btn-secondary">
                        Register Now
                    </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
