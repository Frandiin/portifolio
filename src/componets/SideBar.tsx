import { useState } from "react";
import { IconButton, Slide, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export const SideBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="divide-y-4 divide-indigo-600 divide-solid ">
      <IconButton
        className="dark:text-white"
        onClick={() => {
          setShow(!show);
        }}
      >
        <Menu />
      </IconButton>
      <Slide in={show} direction="right">
        <div className="fixed top-[70px] left-0 h-full w-full flex flex-col gap-3 bg-gray-50 z-40 bg-red ">
          <div className="flex flex-col ">
            <Button
              onClick={() => {
                navigate("/home");
                setShow(false);
              }}
            >
              Home
            </Button>

            <Button
              onClick={() => {
                navigate("/projetos");
                setShow(false);
              }}
            >
              Projetos
            </Button>

            <Button
              onClick={() => {
                navigate("/sobre");
                setShow(false);
              }}
            >
              Sobre
            </Button>

            <Button
              onClick={() => {
                navigate("/teste");
                setShow(false);
              }}
            >
              Contato
            </Button>
            <div></div>
          </div>
        </div>
      </Slide>
    </div>
  );
};
