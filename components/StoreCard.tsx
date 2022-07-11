/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, {Component}from "react";
import { Card } from "react-bootstrap";
import Style from "../styles/card.module.css";
import myImage from "../images.json"

interface Scard{
  title: string
  name: string
  url: string
  height: string | number
  width: string | number

}
const SCard: React.FC<Scard> = (props) => {

  
  
  
  return(
    <div className={Style.cardBase}>
        <Card className={Style.card}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Body>
            
            
            <img
              src={props.url|| myImage.noImage.url}
              height={props.height || 80}
              width={props.width || 80}
              alt="image"
              />
          </Card.Body>
        </Card>
      </div>
  )
}
  
export default SCard;
