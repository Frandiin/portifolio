import { IconButton } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { GitHub } from "@mui/icons-material";
import { CardMock } from "./Mock";

export const Cards = () => {
  return (
    <div
      className="flex flex-col mt-4 md:grid md:grid-cols-3 md:w-[90%] md:gap-2 md:mx-auto 
    "
    >
      {CardMock.map((item) => (
        <div key={item.id} className="gap-2  flex mt-7">
          <Card
            className=" dark:bg-slate-700 dark:text-white flex flex-col justify-between "
            sx={{}}
          >
            <div>
              <CardMedia sx={{ height: 250, width: 250 }} image={item.img} />
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
            </div>
            <div>
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
                  ></a>
                </IconButton>
                <IconButton
                  className="dark:text-white"
                  onClick={() => {
                    document.getElementById(item.id)?.click();
                  }}
                >
                  <img src={item.descripton} height={20} width={20} />
                  <a
                    href={item.link}
                    target="_blank"
                    id={item.id}
                    className="hidden"
                  ></a>
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
