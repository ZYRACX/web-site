import Link from "next/link";
import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import style from "../styles/index.module.css";

const Tittle: React.FunctionComponent = () => {
  return (
    <>
      {/* <div className={style.title}>
        Your Web
        <a href="">
          <button className={style.login}>Login</button>
        </a>
      </div>
      <div className={style.section}>
        <a href="" className="top tp">
          <span className="ts pb"> Top sellers </span>
        </a>
        <a href="" className="featured tp">
          <span className="featured pb"> Featured </span>
        </a>
        <a href="" className="f2p tp">
          <span className="f2p pb"> Free to play </span>
        </a>
      </div> */}
      <>
        <div className={style.title}>
          My Web 
          <Button
            href="/auth/login"
            style={{ margin: "5px", position: "relative", float: "right" }}
          >
            Login
          </Button>
        </div>

        <Row style={{background: "#1f2eff", textAlign: "center", }}>
          <Col>
          <Button variant="" href="/top-sellers " className={style.btn1} >
            <span className="ts pb"> Top sellers </span>
          </Button>
          </Col>
          <Col>
          <Button variant="" href="/featured" className={style.btn1}>
            <span className="featured pb"> Featured </span>
          </Button>
          </Col>
          <Col>
          <Button variant="" href="/free-to-play" className={style.btn1}>
            <span className="f2p pb"> Free to play </span>
          </Button>
          </Col>
        </Row>
      </>
    </>
  );
};

export default Tittle;
