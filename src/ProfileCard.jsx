import React from "react";
import vitelogo from "/vite.svg";

const ProfileCard = ({ profile }) => {
  return (
    <div
      style={{
        backgroundColor: "#f7f6f2", 
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", 
        width: "400px",
        fontFamily: "'Georgia', serif",
        border: "2px solidrgb(223, 228, 207)",
        position: "relative",
        textAlign: "left",
        
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#ffffff", 
          border: "2px solid #6b705c", 
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={vitelogo}
          alt="Logo"
          style={{ width: "40px", height: "40px" }}
        />
      </div>

      <div style={{ lineHeight: "1.8", fontSize: "16px", color: "#3d405b" }}> 
        <div>
          <strong>Name:</strong> {profile.name}
        </div>
        <div>
          <strong>Department:</strong> {profile.department}
        </div>
        <div>
          <strong>Designation:</strong> {profile.designation}
        </div>
        <div>
          <strong>Email:</strong> {profile.email}
        </div>
        <div>
          <strong>Phone:</strong> {profile.phone}
        </div>
        <div>
          <strong>Address:</strong> {profile.address.street}, {profile.address.city},{" "}
          {profile.address.state}
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/bhuvanesh-waran-13595b2ab/"
        target="_blank"
        style={{
          color: "#b08968",
          textDecoration: "none",
        }}
      >
        LinkedIn Profile
      </a>
    </div>
  );
};

export default ProfileCard;
