import { Email, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Button, IconButton, TextField, TextareaAutosize } from "@mui/material";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";

export const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <MDBFooter className="md:grid md:grid-cols-2 md:mt-4 md:gap-4">
        <MDBContainer className="text-center ">
          <MDBRow>
            <MDBCol>
              <form className="flex flex-col gap-4 max-w-[60%] mx-auto text-left ">
                Name
                <input
                  className="bg-slate-50 dark:bg-slate-100 dark:text-black h-10 "
                  type="text"
                  value={name}
                  placeholder="Digite seu Nome"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                Email
                <input
                  className="bg-slate-50 dark:bg-slate-100 dark:text-black h-10"
                  type="text"
                  value={email}
                  placeholder="Digite seu e-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                Message
                <textarea
                  className="bg-slate-50     dark:bg-slate-100 dark:text-black max-h-80"
                  value={message}
                  placeholder="Digite sua mensagem de forma clara e objetiva"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <a
                  className="hidden"
                  id="link"
                  target="_blank"
                  href={`https://wa.me/5511958394250?${new URLSearchParams({
                    text: `Olá me chamo ${name}\né por meio deste email ${email}\n${message}`,
                  })}`}
                >
                  Enviar Mensagem
                </a>
                <Button
                  variant="outlined"
                  onClick={() => {
                    document.getElementById("link")?.click();
                  }}
                >
                  Enviar Mensagem
                </Button>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="text-justify text-lg  ">
          <MDBRow>
            <MDBCol className="flex flex-col">
              <h1 className="">Contatos</h1>
              <a
                href="https://wa.me/5511958394250?text=Ol%C3%A1"
                target="_blank"
              >
                <WhatsApp
                  sx={{ height: 50, width: 50 }}
                  className="text-green-500 gap-3 "
                />{" "}
                (11) 95839-4250
              </a>
              <a
                href="https://www.linkedin.com/in/wellington-fernandes-frandim-b6927a189/"
                target="_blank"
              >
                <LinkedIn
                  sx={{ height: 50, width: 50 }}
                  className="text-blue-500 gap-3"
                />{" "}
                Wellington Fernandes Frandim
              </a>
              <a href="mailto:wellingtonfrandin@hotmail.com" target="_blank">
                <Email sx={{ height: 50, width: 50 }} className="gap-3" />{" "}
                wellingtonfrandin@hotmail.com
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      <div className="text-center p-5 mt-2 ">
        © 2023 Copyright Wellington Fernandes Frandim
      </div>
    </>
  );
};
