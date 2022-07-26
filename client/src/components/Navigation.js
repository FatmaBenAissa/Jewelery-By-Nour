import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import account from "../../src/account.png";
import logout from "../images/logout.png";

const Navigation = ({ ping, setPing }) => {
  const navigate = useNavigate();
  const client = useSelector((state) => state.client.client);
  const [isAuth, setIsAuth] = useState();
  useEffect(() => {
    setIsAuth(localStorage.getItem("token"));
  }, [ping]);
  return (
    <div>
      <Navbar bg="light" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://elkhomssa.com/wp-content/uploads/2018/08/logo-el-khomssa-horizontale-noir-min.png"
              width="150px"
              height={"50px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "rgb(211, 125, 153)",
                  }}
                >
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="">
                  <Link
                    to="/accessoire"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Accesoires
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link
                    to="/vetement"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Clothes
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link
                  to="/dashbord"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Dashbord
                </Link>
              </Nav.Link>
            </Nav>
            <div className="account">
              <Link to="/Profil">
                <img src={account} width="35px" height="35px" />
              </Link>
            </div>

            <div className="pann">
              <Link to="/pannier">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shopping_Cart_Flat_Icon_Vector.svg/1200px-Shopping_Cart_Flat_Icon_Vector.svg.png"
                  width="35"
                  height="35"
                />
              </Link>
            </div>
            {isAuth ? (
              <div className="logoutt">
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setPing(!ping);
                    setTimeout(() => {
                      navigate("/login");
                    }, 1000);
                  }}
                  style={{ backgroundColor: "white" }}
                >
                  <img src={logout} width="25px" height={"25px"} />
                </button>
              </div>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
