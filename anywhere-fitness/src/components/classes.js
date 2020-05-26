import React from "react";

const Classes = ({ classes }) => {
  const {
    id,
    location,
    class_name,
    class_type,
    class_desc,
    start_time,
    duration,
    intensity,
    registered,
    max_size,
    instructor_name,
  } = classes.item;

  return (
    <div>
      <h2>Id: {id}</h2>
      <h3>Location: {location}</h3>
      <h1>Class: {class_name}</h1>
      <p>Class Type: {class_type}</p>
      <p>Class Description: {class_desc}</p>
      <p>Start Time: {start_time}</p>
      <p>Duration: {duration}</p>
      <p>Intensity: {intensity}</p>
      <p>Registered: {registered}</p>
      <p>Max Class Size: {max_size}</p>
      <h4>Instructor: {instructor_name}</h4>
    </div>
  );
};
export default Classes;
