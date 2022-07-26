import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { commandeAdd } from "../JS/commandeSlice";
import "./vetement.css";
function Accdescr({ accessoire, ping, setping }) {
  const [show, setShow] = useState(false);
  const client = useSelector((state) => state.client.client);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [commande, setcommande] = useState({
    image: accessoire.image,
    nameClient: client.name,
    produit: accessoire.name,
    qte: 1,
    prix: accessoire.price,
  });
  // console.log(commande)
  // const dispatch=useDispatch();
  return (
    <div>
      <>
        <div className="buttonss">
          <button className="addd" onClick={handleShow}>
            see more
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{accessoire.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div>
                <img src={accessoire.image} width="350" height="400" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}
              >
                <h3>{accessoire.description}</h3>
                <p>{accessoire.longdesc}</p>
                <h3>{accessoire.price}</h3>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="buttonss">
              <button
                className="addd"
                style={{ width: "150px" }}
                onClick={() => {
                  setShow(!show)
                  dispatch(commandeAdd(commande));
                  setping(!ping);
                }}
              >
                Book now
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Accdescr;
