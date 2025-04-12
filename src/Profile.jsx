import React from "react";
import viteLogo from "./assets/react.svg";

const Profile = ({ ProfileLst }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        width: "400px",
        height: "400px",
        paddingTop: "10%",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          textAlign: "left",
          padding: "30px",
          border: "2px solid #1e90ff", 
          borderRadius: "12px",
          width: "290px",
          background: "linear-gradient(135deg, #ffffff, #e0f7ff)", 
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <div style={{ textAlign: "right", marginBottom: "15px" }}>
          <img
            style={{
              border: "2px solid #1e90ff", 
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
            }}
            src={viteLogo}
            alt="Logo"
          />
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "1.8",
            color: "#333333",
          }}
        >
          <div>
            <span style={{ color: "#1e90ff" }}>Name: </span>
            <span>{ProfileLst.name}</span>
          </div>
          <div>
            <span style={{ color: "#1e90ff" }}>Department: </span>
            <span>{ProfileLst.Department}</span>
          </div>
          <div>
            <span style={{ color: "#1e90ff" }}>Year: </span>
            <span>{ProfileLst.year}</span>
          </div>
          <div>
            <span style={{ color: "#1e90ff" }}>Mobile: </span>
            <span>{ProfileLst.mobile}</span>
          </div>
          <div>
            <span style={{ color: "#1e90ff" }}>Address: </span>
            <span>{ProfileLst.address}</span>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            marginTop: "20px",
            color: "#1e90ff", 
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          LINKEDIN Profile
        </a>
      </div>
    </div>
  );
};

export default Profile;
