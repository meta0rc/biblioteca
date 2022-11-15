import { MenuItem, MenuList, Nav, Link, Container } from "./style";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Open = () => {
    if(openMenu) setOpenMenu(false)
    else setOpenMenu(true)
  }
  return (
    <Container>
      <IoIosMenu
        size={34}
        onClick={Open}
      />
      {openMenu && ( 
        <Nav>
          <MenuList>
            <MenuItem>
              <Link href="/">Ínicio</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">Livros</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">Info</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">Contato</Link>
            </MenuItem>
          </MenuList>
        </Nav>
      )}

    </Container>
  );
};
 