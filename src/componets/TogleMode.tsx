import { DarkMode, LightMode } from "@mui/icons-material";
import { ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";

export const TogleMode = () => {
  const [tema, setTema] = useState(localStorage.getItem("tema") ?? "light");

  useEffect(() => {
    document
      .getElementById("body")
      ?.setAttribute("mode", tema === "light" ? "dark" : "light");
  }, [tema]);
  return (
    <div>
      <ListItemButton
        onClick={() => {
          localStorage.setItem("tema", tema === "light" ? "dark" : "light");
          setTema(tema === "light" ? "dark" : "light");
        }}
        sx={{ padding: 1, borderRadius: "12px" }}
      >
        {tema === "light" ? <LightMode /> : <DarkMode />}
      </ListItemButton>
    </div>
  );
};
