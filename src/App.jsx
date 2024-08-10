import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="appContent">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
      <Footer></Footer>
    </div>
  );
}

export default App;
