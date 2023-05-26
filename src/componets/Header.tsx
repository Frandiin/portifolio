import { Button, IconButton } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { TogleMode } from "./TogleMode";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-row p-4 w-full fixed top-0 z-50 border-x-color bg-gray-50  dark:bg-slate-700 dark:text-white ">
        <nav className="flex justify-between w-full">
          <div>
            <Stack direction="row" spacing={2}>
              <IconButton
                onClick={() => {
                  document.getElementById("git-link")?.click();
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://avatars.githubusercontent.com/u/65790321?v=4"
                />
                <a
                  href="https://github.com/Frandiin"
                  target="_blank"
                  id="git-link"
                  className="hidden"
                >
                  GitHub
                </a>
              </IconButton>
            </Stack>
          </div>
          <div className=" divide-x-2 divide-indigo-600 divide-solid border-2 border-indigo-600 rounded-full hidden md:flex ">
            <Button onClick={() => navigate("/")}>Home</Button>

            <Button onClick={() => navigate("/projetos")}>Projetos</Button>
          </div>
          <div>
            <TogleMode />
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
