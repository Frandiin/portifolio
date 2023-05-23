import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Card from "react-bootstrap/Card";

interface dataProps {
  id: string;
  img: string;
  title: string;
  text: string;
}
export const Cards = () => {
  const [data, setData] = useState<dataProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/data/card.json")
      .then((response) => response.json())
      .then((valor: dataProps[]) => {
        setData(valor);
      });
  }, []);
  return (
    <div
      className="flex flex-col mt-4 md:grid md:grid-cols-3 md:w-[80%] md:gap-8 md:mx-auto  
    "
    >
      {data.map((item) => (
        <div key={item.id} className="border border-indigo-600 gap-10">
          <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body className="flex flex-col gap-3">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button variant="outlined">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
