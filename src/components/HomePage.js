import React, { useState, useEffect } from "react";
import Content from "./Content";
import Card from 'react-bootstrap/Card';
import Header from "./Header"
const HomePage = (props) => {
  const [tempInfo, setTempInfo] = useState([]);
const [flag,setFlag]=useState(true);
const [id,setId]=useState();
const [userId,setUserId]=useState();

// fetch the data from API
  const getData = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/posts`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
      setTempInfo(data);    
    } catch (error) {
      console.log(error);
    }
  };
 let getEvent=(event)=>{
   event.preventDefault();
   setId(event.target.id);
    setFlag(false);  
  }
  useEffect(() => {
    getData();
  },[]);
  return (
    <div>

    {/* Header  */}
    <Header/>

     {/*show all title  */}

      {flag?
      <div onClick={getEvent}>
      {
        tempInfo?tempInfo.map(val=>{
         return(
          <Card style={{width:'auto',padding: '15px',backgroundColor:'lightgreen' ,marginTop:'10px'}}>
  <Card.Body style={{textAlign: 'center'}}> <a href="./Content" data={val.userId} id={val.id}  className='title'  style={{ textDecoration:'none' }} >{val.title}</a> </Card.Body>
           </Card>
            
            )
        }):<h1>loading.....</h1>
      } 
      </div>

      :
       
      <Content id={id} user={tempInfo} />
      }
      </div>
  );
};

export default HomePage;