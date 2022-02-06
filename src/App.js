import logo from "./logo.svg";
import "./App.css";
import ProfilePhoto from "./component/profilephoto";
import FullName from "./component/fullname";
import Address from "./component/address";
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
