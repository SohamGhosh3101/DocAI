 import React, { useState } from 'react';


 function App(){
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="style.css"></link>
      <div id="root"></div>
      <div class="container-2"><img style={{width:"30%",height:"30%"}} src="images/Docai-removebg-preview.png" alt=""></img></div>
      <div class="container">
      <div class="container-3">
      <h1 style={{fontFamily:"Microsoft Yi Baiti", color:'#113f67', textAlign:'center', paddingTop:"60px"}}>DocAI</h1></div>
      <h2 style={{fontFamily:"Courier",color:'#113f67', textAlign:'center'}}>Your friendly neighbourhood Food Consultation Engine</h2>
      <p></p>
      <h3 style={{fontFamily:"Courier",color:'#113f67', textAlign:"center", paddingTop:"100px",paddingBottom:"20px"}}>
        Ask any query related to your personal diet:
      </h3>

      <div class="sub-container">
      <form onSubmit={handleSubmit} action="" class="search-bar">
        <input type="text" placeholder="search..." name="q"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <br></br>
        <button type = "submit"><img src="images/search.png" alt=""></img></button>
      </form>
      <br></br>
      </div>
      {response && <div class="container-4">
      {response && <div class="sub-container-2"><img style={{width:"5%",height:"5%"}} src="images/Docai-removebg-preview.png" alt=""></img>:{response}</div>}</div>}
    </div>

    </div>
       
     
  );
 }

 export default App
