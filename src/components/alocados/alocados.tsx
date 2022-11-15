import { Heading } from "../heading/Heading";
import Scanner from "../scanner/Scanner";
import { List, ListItem } from "./styled";

type alocados = {
  id: string;
  name: string;
  reserved: boolean;
  capa: string;
  devolucao: string;
  locatario: string;
};

export const Alocados = ({ Lista }: { Lista: alocados[] }) => {
  return (
    <List>
      {Lista.map((book) => (
        <ListItem key={book.id}>
          <img src={book.capa} />
          <Heading h3 text={book.name} color={"#333"} />
          <Heading h3 text={"Devolução: " + book.devolucao} color={"#333"} />
          <Heading h3 text={"Locatário: " + book.locatario} color={"#333"} />
        </ListItem>
      ))}
    </List>
  );
};
