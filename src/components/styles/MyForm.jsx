import React, { useState } from "react";
import { useParams } from "react-router-dom";

function MyForm(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { name, surname, email, flighNew: id };

    fetch("http://localhost:8080/api/bookingnew/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Post created successfully!");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        alert("There was an error creating the post. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        id="surname"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input type="hidden" id="FlightNew" value={id} />

      <button type="submit">Create Post</button>
    </form>
  );
}

export default MyForm;



