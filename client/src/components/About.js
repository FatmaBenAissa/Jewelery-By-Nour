import React from "react";
import "./About.css";

function About2() {
  return (
    <div>
      <div style={{ display: "flex", marginTop: 93, marginLeft: 20 }}>
        <div>
          <img
            src="https://elkhomssa.com/wp-content/uploads/2020/02/2site-3.jpg"
            style={{ width: "500px" }}
          />
        </div>
        <div style={{ marginTop: 93, width: 587, marginLeft: 33 }}>
          <h1
            style={{
              fontFamily: "Dancing Script, cursive",
              fontSize: 31,
              textShadow: "rgb(51 51 51) 1px 1px 1px",
              color: "rgb(154, 206, 203)",
            }}
          >
            {" "}
            Qui sommes nous?{" "}
          </h1>
          <p style={{ textAlign: "center", marginTop: 20 }}>
            <span
              style={{
                color: "#de7171",
                textShadow: "rgb(51 51 51) 1px 1px 1px",
                fontSize: "Bold",
              }}
            >
              Jewelery By Nour
            </span>{" "}
            EL Khomssa Création des bijoux,accessoires et vetements
            traditionnels et artisanales Tunisiens. Livraison sur toute la
            Tunisie 🇹🇳🚚📦 et dans le monde entier ✈️🌍.
          </p>
        </div>
      </div>
      </div>
  );
}

export default About2;
