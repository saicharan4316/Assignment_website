import React from "react";
import CustomButton from "../components/Button";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <p>This is an assignment Website developed for demonstrating by using react and its router Dom with Material UI and custom css for each of the react componets !</p>
      <CustomButton text="Learn More" onClick={() => alert("Button Clicked!")} />
    </div>
  );
}

export default Home;
