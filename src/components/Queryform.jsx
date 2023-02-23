import React, { useState } from "react";

const Queryform= () => {
  const [selectedOption1, setSelectedOption1] = useState("option1");
  const [selectedOption2, setSelectedOption2] = useState("option1");

  /*
  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Selected option 1: ${selectedOption1}`);
    console.log(`Selected option 2: ${selectedOption2}`);
  };
*/

let handleSubmit = async (e) => {
    e.preventDefault();
    const [selectedOption1, setSelectedOption1] = useState("option1");
    const [selectedOption2, setSelectedOption2] = useState("option1");
    
    try {
      let res = await fetch("http://localhost:8080/api/destionations/add", {
        method: "POST",
        body: JSON.stringify({
          selectedOption1: selectedOption1,
          selectedOption2: selectedOption2,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setSelectedOption1("option1");
        setSelectedOption2("option1");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="section_content1">
    <form onSubmit={handleSubmit}>
      <label className="form-labels1">
        FROM
        <select value={selectedOption1} onChange={e => setSelectedOption1(e.target.value)} className="destination">
          <option value="option1">New York</option>
          <option value="option2">Stockholm</option>
        </select>
      </label>
     
      <label>
        TO
        <select value={selectedOption2} onChange={e => setSelectedOption2(e.target.value)} className="destination">
          <option value="option1">GreeLand</option>
          <option value="option2">Iceland</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Queryform;
