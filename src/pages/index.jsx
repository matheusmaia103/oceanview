//import GlobalStyle from "./style.js";
import { TextField, AppBar } from "@material-ui/core/";
import { FlightTakeoffRounded } from "@material-ui/icons";
import GlobalStyles from './style';
import LandingPage from './landingPage'


export default function App() {
  return (
    <>
      <GlobalStyles/>
      <nav>
        <FlightTakeoffRounded />
           OceanView
      </nav>
      <LandingPage/>
    </>
  );
}
