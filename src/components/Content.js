import React, { useEffect,useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
const Content = (props) => {
   const [info,setInfo]=useState();
   const [author,setAuthor]=useState();
   let singleValue=props.user.find((val)=>{
       return  val.id==props.id;
   })
const getData=()=>{   fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
   .then(val=>
    {
        return val.json();
    })
    .then(res=>
        {
            setInfo(res);  
        })
    }
      fetch(`https://jsonplaceholder.typicode.com/users/${singleValue.userId}`)
      .then(val=>val.json())
        .then(res=>res.name)
        .then(res=>setAuthor(res));
    useEffect(()=>{    
          getData();   
    },[])
    return (
   <>
  {info?(
      <>
      <Card style={{ width: '100%',backgroundColor:'lightblue' }}>
  <Card.Body>
    <Card.Title>{info.title}</Card.Title>
    
    <Card.Text>
    {info.body}
    </Card.Text>
    <h5  style={{textAlign: 'right'}}>author- <i>{author}</i></h5>
  </Card.Body>
</Card>

  </>
  )
  :null}
</>
    )
}

export default Content;
