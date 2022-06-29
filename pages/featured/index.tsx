import React from "react";
import { Card, Container } from "react-bootstrap";
import Tittle from "../../components/Tittle";
import SCard from "../../components/StoreCard"
import Style from "../../styles/card.module.css"
import Image from "next/image";


const index: React.FunctionComponent = () => {
  return (
    <>
      <Tittle />
      <Container>
        <Card className={Style.TrendingCard}>
          <Card.Title >
            <Image src="../../public/image/csgo.jpg" height="400" width="1200" alt="image" /> 
          </Card.Title>
        </Card>
      </Container>
      <SCard></SCard>
    </>
  );
};
export default index;
