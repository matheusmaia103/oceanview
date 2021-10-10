//import GlobalStyle from "./style.js";
import { useState } from 'react';
import { TextField, Button } from "@material-ui/core/";
import { Facebook, LinkedIn, Instagram, Twitter, MenuRounded } from "@material-ui/icons";
import GlobalStyles from "./style";
import LandingPage from "./landingPage";
import logo2 from './assets/logo/logo2.png'
import Drawer  from "./drawer";

export default function App() {

    const [open, setOpen] = useState(false);

  
  return (
    <>
      <GlobalStyles />
      <nav>
        <Button variant='text' color='inherit'>Oceanview</Button>
        <ul>
          <li>
            <Button variant='text' color='inherit'> serviços </Button>
          </li>
          <li>
            <Button variant='text' color='inherit'> sobre </Button>
          </li>
          <li>
            <Button variant='outlined' color='inherit'> login </Button>
          </li>
        </ul>

        <Button color='inherit' id='hamburguer' onClick={() => setOpen(true)}> <MenuRounded /> </Button>
        
        
      </nav>
      <Drawer open={open} setOpen={setOpen}>
        links
      </Drawer>
      <LandingPage />
      <footer>
        <div id="mail">
Deseja receber ofertas de hotéis exclusivas? Assine a nossa newsletter!          <div className="input">
            <TextField
            label='Digite seu email'
            variant='filled'
            color='inherit'
          ></TextField>
          </div>
        </div>
        <hr />
        <div id="social">
          Siga-nos nas redes sociais:

          <div id="btns">
            <Button color='secondary'><Facebook></Facebook></Button>
            <Button color='secondary'><LinkedIn></LinkedIn></Button>
            <Button color='secondary'><Instagram></Instagram></Button>
            <Button color='secondary'><Twitter></Twitter></Button>
          </div>
        </div>

        <div id="imgDiv">
          <img src={logo2} alt="logo" />
        </div>
      </footer>
    </>
  );
}
