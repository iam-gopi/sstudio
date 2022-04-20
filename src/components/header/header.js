import React from "react";
import "../header/header.css";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/yt.png";
import instagram from "../../assets/insta.png";
import gopi from "../../assets/gopi.png";

const Header = () => {
  return (
    <main className="row vertical-center container">
      <div>
        <small>
          SPEED UP <br /> COMMUNICATION
        </small>
        <div className="company-name">
          Best UI/UX <br />
          Designer
        </div>
        <p>
          It is the place for everything related to a project Planning,
          Development and Training.
        </p>
        <div
          className="row"
          style={{
            paddingTop: "3rem",
          }}
        >
          <img className="icon cursor" src={twitter} alt="" />
          <img className="icon cursor" src={instagram} alt="" />
          <img className="icon cursor" src={youtube} alt="" />
        </div>
        {/* <p className="fw-700 fs-1">Clients</p>
        <div className="row">
          <p>Guvi</p>
          <p>UcPro</p>
          <p>Largstone</p>
          <p>TutorialPoints</p>
          <p>Achutha</p>
        </div> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            filter: "saturate(1.5)",
            position: "relative",
            top: "3em",
          }}
        >
          <div
            style={{
              backgroundImage: "var(--linear-gradient)",
              width: "100%",
              height: "450px",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              filter: "blur(100px)",
              position: "absolute",
            }}
          ></div>
          <img
            style={{
              width: "400px",
              transform: "scale(1.6)",
              display: "flex",
              alignItems: "flex-end",
            }}
            src={gopi}
            alt=""
            loading="lazy"
          />
          {/* <div
            style={{
              backgroundImage: "var(--linear-gradient)",
              width: "100%",
              height: "6em",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              // filter: "blur(100px)",
              position: "absolute",
            }}
          ></div> */}
          <p
            style={{
              width: "200px",
              height: "180px",
              borderRadius: "9px",
              position: "absolute",
              backgroundColor: "#29282F",
              boxShadow: "1px 1px 11px 1px rgba(0,0,0,0.19)",
              marginRight: "-40px",
              left: "-220px",
              top: "260px",
              padding: "1rem",
              color: "royalblue",
              fontWeight: 700,
              letterSpacing: "1px",
              fontSize: "1.2rem",
            }}
          >
            <p>
              Web Apps - <span className="fw-700"> 5</span>
            </p>
            <p>
              Mobile Apps - <span className="fw-700"> 2</span>
            </p>
            <p>
              Mentoring - <span className="fw-700"> 3</span>
            </p>
            <p>
              Video Courses - <span className="fw-700"> 2</span>
            </p>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Header;
