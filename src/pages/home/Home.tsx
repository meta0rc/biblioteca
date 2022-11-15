import { Header } from "../../components/header/Header";
import { Heading } from "../../components/heading/Heading";
import { ContainerImage, Image } from "./style";
import Destach from "../../assets/ler-home.png";
import { Carrosel } from "../../components/carrosel/Carrosel";
import { Books } from "../../mocks/data";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Heading
        text={"Encontre todos os nossos livros aqui no nosso site"}
        margin={"0 20"}
      />
      <ContainerImage>
        <Image src={Destach} width={300} />
      </ContainerImage>
      <Carrosel items={Books} />
      <Footer />
    </>
  );
};
