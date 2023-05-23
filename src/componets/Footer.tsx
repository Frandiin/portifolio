import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <>
      <MDBFooter
        className="flex flex-col  md:grid md:grid-cols-2 md:mt-4"
        style={{ border: "1px solid green" }}
      >
        <MDBContainer className="text-center ">
          <MDBRow>
            <MDBCol>
              <h1>Teste</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                optio a voluptatibus ea ratione, possimus aperiam tempora
                doloribus eligendi omnis veniam, dignissimos, dolorum fugit quos
                saepe necessitatibus assumenda maiores. Minima.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="text-center">
          <MDBRow>
            <MDBCol>
              <h1>Teste</h1>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      <div
        className="text-center p-5 mt-2 "
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1  )" }}
      >
        © 2023 Copyright Wellington Fernandes Frandim
      </div>
    </>
  );
};
