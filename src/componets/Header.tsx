import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-row p-4 w-full fixed top-0 z-50 border-x-color bg-gray-50">
        <nav className="flex justify-between w-full">
          <div className="border-2 border-indigo-600 rounded-full ">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/51239510?v=4"
              />
            </Stack>
          </div>
          <div className=" divide-x-4 divide-indigo-600 divide-solid border-2 border-indigo-600 divide-y rounded-full hidden md:block ">
            <Button onClick={() => navigate("/home")}>Home</Button>

            <Button onClick={() => navigate("/projetos")}>Projetos</Button>

            <Button onClick={() => navigate("/sobre")}>Sobre</Button>

            <Button onClick={() => navigate("/teste")}>Contato</Button>
          </div>
          <div className="md:hidden">
            <SideBar />
          </div>
        </nav>
      </header>
      <div className="pt-[90px] p-4">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
