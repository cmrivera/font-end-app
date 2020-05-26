import React, { useState, useEffect } from "react";
import Axios from "axios";
import Classes from "./classes";

const DashBoard = () => {
  const ApiUrl = "https://anywhere-fitness-ptbw.herokuapp.com/api/classes";
  const [classList, setClassList] = useState();

  useEffect(() => {
    Axios.get(ApiUrl)
      .then((response) => setClassList(response.data.results))
      .catch((error) => console.log(error));
  }, []);
  console.log(classList);

  if (!classList) return "Loading...";
  return (
    <div>
      {classList.map((item, index) => (
        <Classes key={index} item={item} />
      ))}
    </div>
  );
};
export default DashBoard;
