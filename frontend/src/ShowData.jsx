import React from 'react';
import axios from 'axios';

function ShowData() {
  function handleClick(e) {
    e.preventDefault();
    axios.get("http://localhost:8080/Show")
      .then((res) => {
        console.log(res.data);
        console.log("Data updated");
      })
   .catch((err)=>{
    console.log(err)
   })
  }

  return (
    <button onClick={handleClick}>FetchData</button>
  );
}

export default ShowData;
