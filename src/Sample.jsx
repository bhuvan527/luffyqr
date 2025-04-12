import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "", 
        textShadow: "2px 2px 4px rgba(85, 84, 80, 0.7)", 
      }}
    >
      <h1
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "bold",
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "linear-gradient(90deg, rgb(255, 255, 255), rgba(245, 225, 51, 0.9))", 
        }}
      >
        Welcome to My World
      </h1>
    </div>
  );
};

export default Home;
