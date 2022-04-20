import React from "react";
import logo from "../../assets/sstudio.png";
const NavBar = () => {
  return (
    <nav
      style={{
        padding: "1rem 1.6rem",
        height: "3rem",
        position:'fixed',
        minWidth:'95%', 
        backdropFilter: "blur(10px)",
        zIndex: 2,
      }}
      className="row"
    >
      <div className="row">
        <img
          style={{
            width: "2.6rem",
            height: "2.6rem",
          }}
          src={logo}
          alt="SStudio logo"
        />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "2px",
          }}
        >
          Studio
        </span>
      </div>
      <div
        className="row cursor"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "capitalize",
          letterSpacing: "1px",
          fontSize: "14px",
        }}
      >
        <span>home</span>
        <span>about</span>
        <span>projects</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          textTransform: "capitalize",
          letterSpacing: "1px",
        }}
      >
        <span
          style={{
            border: "2px solid var(--green-primary)",
            padding: "0.5rem 1rem",
            fontSize: "14px",
            borderRadius: "50px",
          }}
        >
          contact
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
