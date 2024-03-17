import "./App.css";
import Slogan from "./Components/Clock-Slogan";
import CurrentTime from "./Components/Current-Time";
import ClockHeading from "./Components/heading";

function App() {
  return (
    <div>
      <center>
      <ClockHeading></ClockHeading>
      <Slogan></Slogan>
      <CurrentTime></CurrentTime>
      </center>
    </div>
  );
}

export default App;
