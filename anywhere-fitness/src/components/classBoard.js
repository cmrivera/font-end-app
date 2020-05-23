import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "./axiosWithAuthentification";

const MyClassBoard = (props) => {
  const [classBoard, setClassBoard] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/api/classes")
      .then((response) => {
        setClassBoard(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const updateClasses = () => {
    AxiosWithAuth()
      .get("https://anywhere-fitness.ptbw.herokuapp.com/api/classes")
      .then((res) => {
        setClassBoard(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MyClassBoard classes={classBoard} updateClasses={updateClasses} />
    </>
  );
};
export default MyClassBoard;
