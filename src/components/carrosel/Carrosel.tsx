import { useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Heading } from "../heading/Heading";
import {
  ContainerCarrosel,
  ContainerContentCarrosel,
  ContainerNavCarrosel,
  ContainerNavCarroselChildren,
  ImageCarrosel,
  ImagesCarrosel,
} from "./style";

type Book = {
  id: string;
  name: string;
  reserved: boolean;
  capa: string;
};
type Items = {
  items: Book[];
};
export const Carrosel: React.FC<Items> = ({ items }) => {
  const ref: any = useRef(null)

  const Control = (side: string) => {
    if(ref.current)
    side === 'back' ? ref.current.scrollLeft -= ref.current.offsetWidth : ref.current.scrollLeft += ref.current.offsetWidth
    }
  
  return (
    <ContainerCarrosel>
      <ContainerNavCarrosel>
        <ContainerNavCarroselChildren>
          <MdOutlineArrowBackIos onClick={() => Control('back')} />
          <MdOutlineArrowForwardIos onClick={() => Control('next')}/>
        </ContainerNavCarroselChildren>
      </ContainerNavCarrosel>
      <ImagesCarrosel ref={ref}>
        {items.map((item, index) => (
        <ContainerContentCarrosel>
          <Heading text={item.name} h2={true} margin={''}/>
          <ImageCarrosel key={index} src={item.capa} width={200} />
        </ContainerContentCarrosel>
        ))}
      </ImagesCarrosel>
    </ContainerCarrosel>
  );
};
