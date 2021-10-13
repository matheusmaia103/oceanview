//import GlobalStyle from "./style.js";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
} from "@material-ui/core/";
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  MenuRounded,
  ArrowForward,
} from "@material-ui/icons";
import GlobalStyles from "./style";
import logo2 from "./assets/logo/logo2.png";
import Drawer from "./drawer";


//Pages
import LandingPage from "./landingPage";
//import LoginPage from "./loginPage";
//import AboutPage from "./aboutPage";

//AOS Animations On Scoll
import Aos from "aos";
import "aos/dist/aos.css";


export default function App() {
  
  

  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <GlobalStyles />
      

        <nav>
          <Button variant="text" color="inherit">
            Oceanview
          </Button>
          <ul>
            <li>
              <Button variant="text" color="inherit">
                Seviços
              </Button>
            </li>
            <li>
              <Button variant="text" color="inherit">
                Sobre
              </Button>
            </li>
            <li>
              <Button variant="outlined" color="inherit">
                Login
              </Button>
            </li>
          </ul>

          <Button color="inherit" id="hamburguer" onClick={() => setOpen(true)}>
            <MenuRounded />
          </Button>
        </nav>
        <Drawer open={open} setOpen={setOpen}>
          links
        </Drawer>


      <LandingPage />
      

        <footer>
          <div id="mail">
            Deseja receber ofertas de hotéis exclusivas? Assine a nossa
            newsletter!
            <div>
              <TextField
                label="Digite seu email"
                variant="filled"
                color="inherit"
                className="input"
              ></TextField>
              <IconButton variant="outlined" color="secondary" className="btn">
                <ArrowForward />
              </IconButton>
            </div>
          </div>
          <hr />
          <div id="social">
            Siga-nos nas redes sociais:
            <div id="btns">
              <IconButton color="secondary">
                <Facebook></Facebook>
              </IconButton>
              <IconButton color="secondary">
                <LinkedIn></LinkedIn>
              </IconButton>
              <IconButton color="secondary">
                <Instagram></Instagram>
              </IconButton>
              <IconButton color="secondary">
                <Twitter></Twitter>
              </IconButton>
            </div>
          </div>

          <div id="imgDiv">
            <img src={logo2} alt="logo" />
          </div>
        </footer>
    </>
  );
}
