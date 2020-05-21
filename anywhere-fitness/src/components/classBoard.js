import React from "react";
import { AxiosWithAuth } from "./axiosWithAuthentification";

const MyClassBoard = (props) => {
  return (
    <div>
      <h3>Class:</h3>
      <p>Class Type:</p>
      <p>Class Description:</p>
      <p>Start Time:</p>
      <p>Duration:</p>
      <p>Intensity:</p>
      <p>Location:</p>
      <p>Registered:</p>
      <p>Max Size:</p>
    </div>
  );
};
export default MyClassBoard;
