import "tailwindcss/tailwind.css";
import React, { useState } from 'react';
import Card from "../Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import '../../styles/index.css'
import Easyness from '@/Images/easyness.png'
import conectivity from '@/Images/connectivity.png'
import understanding from '@/Images/understanding.png'
const Sidebar = () => {

  const KeyFeature=[{
    'img':Easyness,
    'name':"Easyness",
    "description":"Proceess of hiring a laywer cannot be much easier now."
  },{
    'img':conectivity,
    'name':"Conectivity",
    "description":"Easy to connect with a lawyer of your choice."
  },{
    'img':understanding,
    'name':"Better Understanding",
    "description":"A better understanding betwwen Client and Lawyer"
  },{
    'img':understanding,
    'name':"Better Understanding",
    "description":"A better understanding betwwen Client and Lawyer"
  }]
  return (
    <>
    
   <Tabs
      defaultActiveKey="Client"
      id="uncontrolled-tab-example"
      className="mb-3 text-slate-700"
    >
      <Tab eventKey="Client" title="Client">
        <div className="flex gap-4 ">
        {KeyFeature?KeyFeature.map((entry)=>(
            <Card outerClass={`bg-sky-950 `} Description={entry.description} name={entry.name} img={entry.img} titleSize={"text-lg"} descSize={"text-xs"}></Card>
          )):null}  
          
        </div>
       
      </Tab>
      <Tab eventKey="Lawyer" title="Lawyer">
      <div className="flex gap-4 grid grid-cols-3">
          <div>
          <Card></Card>
          </div>
          <div>
          <Card></Card>
          </div>
          <div>
          <Card></Card>
          </div>
          
          
        </div>
      </Tab>
   
    </Tabs>
          </>
  );
};

export default Sidebar;
