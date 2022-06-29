import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import Style from "../styles/card.module.css";

const SCard: React.FunctionComponent = () => {
  return (
    <>
      <div className={Style.cardBase}>
        <Card className={Style.card}>
          <Card.Title>CSGO</Card.Title>
          <Card.Body>
            <Image
              src="../../public/image/csgo.jpg"
              height={100}
              width={200}
              alt="image"
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SCard;
