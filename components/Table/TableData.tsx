/* eslint-disable @next/next/no-img-element */
import React, {Component, FC, ReactNode} from "react";
import Image from "next/image";
import myImage from "../../images.json"

interface myProps {
  title: string
  url: string
  width?: number | string
  height?: number | string
  price?: string 
  rating?:string
  

}

const TableData:React.FC<myProps> = (props) => {
        return (
            <tr>
              <td>
                  <img src={props.url} width={props.width} height={props.height} alt="image"/></td>
                  <td>{props.name}</td>
              <td>{props.price}</td>
              <td>{props.rating}</td>
            </tr>
        );
      }

export default TableData;
