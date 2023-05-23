import { Footer } from "./Footer";
import logo2 from "/logo2.jpg";

import { Carousel } from "./Carousel";
import { Cards } from "./Card";

export const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center mt-10 md:grid md:grid-cols-2 md:top-0 ">
        <img src="logo.svg" />
        <p className="flex flex-col justify-center p-10 text-justify">
          Desenvolvedor front-end altamente motivado, recém-formado em Análise
          em desenvolvimento de sistemas e ansioso para iniciar uma carreira
          profissional na área de desenvolvimento web. Apaixonado por criar
          interfaces interativas e responsivas, tenho habilidades sólidas em
          HTML, CSS e JavaScript. Sou um aprendiz rápido, sempre buscando me
          atualizar com as últimas tendências e melhores práticas da indústria.
          Tenho um olhar atento aos detalhes e estou pronto para enfrentar
          desafios em equipe, contribuindo para projetos de sucesso.
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center mt-10 md:grid md:grid-cols-2 md:top-0  ">
        <p className="flex flex-col justify-center p-10 text-justify">dasdas</p>
        <img src="logo2.jpg" />
      </div>
      <div>
        <p className="text-center">Habilidades</p>
        <Carousel />
      </div>
    </>
  );
};
