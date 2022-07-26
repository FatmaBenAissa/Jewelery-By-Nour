import React from "react";
import im1 from "../images/im1.jpg";
import im2 from "../images/im2.jpg";
import im3 from "../images/im3.jpg";
import im4 from "../images/im4.jpg";
import im5 from "../images/im5.jpg";
import im6 from "../images/im6.jpg";
import im7 from "../images/im7.jpg";
import jana from "../images/jana.jpg";
import collier1 from "../images/collier1.jpg";
import yasmine from "../images/yasmine.jpg";
import fairouza from "../images/fairouza.jpg";
import livraison from "../images/livraison.png";
import domicile from "../images/domicile.png";
import paiment from "../images/paiment.png";

import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <div style={{ marginTop: "130px" }}>
        <div className="box" style={{ display: "flex", width: "100%" }}>
          <div className="box1">
            <img
              src={im4}
              width="480"
              height="770"
              style={{ margin: "10px" }}
            />
          </div>

          <div
            className="box2"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              src={im1}
              width="350"
              height="375"
              style={{ margin: "10px" }}
            />
            <img
              src={im2}
              width="350"
              height="375"
              style={{ margin: "10px" }}
            />
          </div>

          <div className="box3">
            <img
              src={im3}
              width="480"
              height="770"
              style={{ margin: "10px" }}
            />
          </div>
        </div>
        <div
          className="ligne"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <hr
            style={{
              border: "2px solid black",
              color: "black",
              width: "30%",
              marginRight: "5px",
            }}
          />
          <p> Tous les styles cet été</p>
          <hr
            style={{
              border: "2px solid black",
              width: "30%",
              marginRight: "5px",
            }}
          />
        </div>
        <h2
          style={{
            color: "#050606",
            fontFamily: "Oswald Sans-serif",
            fontSize: "35px",
            fontWeight: "normal",
            marginLeft: "480px",
          }}
        >
          PRODUITS EN VEDETTE
        </h2>

        <div
          className="brand"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img src={jana} width="480" height="450" style={{ margin: "10px" }} />
          <img
            src={yasmine}
            width="480"
            height="450"
            style={{ margin: "10px" }}
          />
          <img
            src={fairouza}
            width="480"
            height="450"
            style={{ margin: "10px" }}
          />
        </div>

        <div className="btands">
          <img src={collier1} width="1400" />
        </div>

        <div
          className="section"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <img
            src={livraison}
            width="100"
            height="100"
            style={{ margin: "25px" }}
          />

          <img
            src={domicile}
            width="80"
            height="80"
            style={{ margin: "25px" }}
          />
          <img
            src={paiment}
            width="80"
            height="80"
            style={{ margin: "25px" }}
          />
        </div>
        <div
          className="ldph"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "10px",
          }}
        >
          <h2>LIVRAISON</h2>
          <h2>A DOMICILE</h2>
          <h2>PAIMENT</h2>
        </div>

        <div
          className="ldpp"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginRight: "15px",
          }}
        >
          <p>Nationale et Internationale</p>
          <p>selon votre région</p>
          <p>à la livraison</p>
        </div>

        <div
          className="brandd"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginRight: "80px",
          }}
        >
          <img src={im5} width="300" height="240" style={{ margin: "50px" }} />
          <img src={im6} width="300" height="240" style={{ margin: "50px" }} />
          <img src={im7} width="300" height="240" style={{ margin: "50px" }} />
        </div>
      </div>
    </>
  );
};

export default home;
