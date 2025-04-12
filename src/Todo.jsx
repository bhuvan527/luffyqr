import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";

const Todo = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: "10% auto",
        justifyContent: "center",
        textAlign: "center",
        padding: "30px",
        border: "2px solid #ccc", 
        borderRadius: "12px",
        width: "320px",
        background: "#ffffff", 
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          color: "#333333",
          fontWeight: "bold",
        }}
      >
        Count: {count}
      </div>
      <br />
      <br />
      <button
        style={{
          background: "#4CAF50", 
          color: "#ffffff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "15px",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(76, 175, 80, 0.3)", 
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        style={{
          background: "#FF5722", 
          color: "#ffffff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "15px",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(255, 87, 34, 0.3)", 
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <br />
      <br />
      <button
        style={{
          background: "#607D8B", 
          color: "#ffffff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "15px",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(96, 125, 139, 0.3)",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

export default Todo;
