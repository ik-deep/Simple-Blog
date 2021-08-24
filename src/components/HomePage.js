import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  const [tempInfo, setTempInfo] = useState({});


  const getData = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/posts`;

      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Header />



    <card>
            <Card.Body style={{ textAlign: "center" }} >title</Card.Body>
            </card>



    </div>
  );
};

export default HomePage;
