import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { GitHub } from "@mui/icons-material";
import { CardMock } from "./Mock";
interface dataProps {
  id: string;
  img: string;
  title: string;
  text: string;
}
export const Cards = () => {
  return (
    <div
      className="flex flex-col mt-4 md:grid md:grid-cols-3 md:w-[80%] md:gap-8 md:mx-auto 
    "
    >
      {CardMock.map((item) => (
        <div key={item.id} className="gap-10 ">
          <Card className=" dark:bg-slate-700 dark:text-white">
            <CardMedia sx={{ height: 300, width: 300 }} image={item.img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="dark:text-white"
              >
                {item.text}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                className="dark:text-white"
                onClick={() => {
                  document.getElementById("git-link")?.click();
                }}
              >
                <GitHub />
                <a
                  href="https://github.com/Frandiin"
                  target="_blank"
                  id="git-link"
                  className="hidden"
                >
                  GitHub
                </a>
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};
