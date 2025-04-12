import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",          
        padding: "10px 20px",
        background: "linear-gradient(135deg, #ffd700, #ffffff)",
        borderRadius: "8px",             
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#555555" }}>
        MyApp
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "#ffd700", 
            textDecoration: "none",
            fontWeight: "600",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "background 0.3s ease", 
            
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Home
        </Link>
        <Link
          to="/todo"
          style={{
            color: "#ffd700",
            textDecoration: "none",
            fontWeight: "600",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Todo
        </Link>
        <Link
          to="/profilecard"
          style={{
            color: "#ffd700",
            textDecoration: "none",
            fontWeight: "600",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Profile Card
        </Link>
        <Link
          to="/gridview"
          style={{
            color: "#ffd700",
            textDecoration: "none",
            fontWeight: "600",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Grid App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
