/*
 * @Author: 寒嫣
 * @Date: 2020-06-02 16:09:10
 * @Description: file content
 */ 
import Head from 'next/head'
import Nav from './nav'
import React, { useState, useEffect } from "react";
// 使用函数组件

export default function Home() {
  
  const [pictures, setpictures] = useState([
    { id: 1, img: "pictureONE" },
    { id: 2, img: "pictureTwo" },
    { id: 3, img: "pictureThree" },
    { id: 4, img: "pictureFour" }
  ]);
  return (
    <div>
     <Nav></Nav>
      <div>
      {pictures.map((item)=>
      <span key={item.id}>{item.img}</span>
      )}
      </div>
      
    </div>
  )
}
