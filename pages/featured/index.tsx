import React from "react";
import { Card, Container } from "react-bootstrap";
import Tittle from "../../components/Tittle";
import SCard from "../../components/StoreCard"
import Style from "../../styles/card.module.css"
import Image from "next/image";
import myImage from "../../images.json"
import {Table, TableProps, } from "react-bootstrap"
import TableData from "../../components/Table/TableData";


const index: React.FC = () => {
  let Arr: string[] = new Array("123", "dadawd", "123123")
  const value = Arr.map(((ie) => {<TableData title={ie} url={myImage.Valorant.url} height={50} />}));
  return (
    <>
      <Tittle />
      <Container>
        <Card className={Style.TrendingCard}>
          <Card.Title >
            <Image src={myImage.csgo.url} height="400" width="1200" alt={myImage.csgo.name}/> 
          </Card.Title>
        </Card>
      </Container>
      {/* <SCard image={myImage.csgo.url} ></SCard>
      <SCard image={myImage.csgo.url} ></SCard>
      <SCard image={"https://source.unsplash.com/random/329 x153?city,night"} ></SCard> */}
      <Table striped bordered hover>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Title</td>
                    <td>Price(in INR)</td>
                    <td>Rating(Out of 5)</td>
                </tr>
            </thead>
                <tbody>
                  { value }
                
                </tbody>
        </Table>
    </>
  );
};
export default index;
