import Image from "next/image";
import React, {Component}from "react";
import { Card } from "react-bootstrap";
import Style from "../styles/card.module.css";
import myImage from "../images.json"


class SCard extends Component{

 render(): React.ReactNode {
     
     return(
         <div className={Style.cardBase}>
        <div className={Style.card}>
          <div>CSGO</div>
          <Card.Body>
            
            <Image
              src={myImage.csgo.url}
              height={100}
              width={200}
              alt="image"
              />
          </Card.Body>
        </div>
      </div>
  )
}

};

export default SCard;