import React from "react";
import CounterButton from "./components/CounterButtonContainer";
import SpecialTextBox from "./components/SpecialTextBoxContainer";
import Counter from "./components/CounterContainer";
import SpecialText from "./components/SpecialTextContainer";
import UserButtons from "./components/UserButtonsContainer";
import Thermostat from "./components/ThermostatContainer";
import Users from "./components/UsersContainer";
import ChangeTemperature from "./components/ChangeTemperatureContainer";
import VideoPlayer from "./components/VideoPlayerContainer";
import VideoTextBox from "./components/VideoTextBoxContainer";
import CurrentCity from "./components/CurrentCityContainer";
import CityDropDown from "./components/CityDropDownContainer";
import SearchTextBox from "./components/SearchTextBoxContainer";
import SortUsers from "./components/SortUsersContainer";
import ScaleVideo from "./components/ScaleVideoContainer";
import Modal from "./components/ModalContainer";
import ShowModal from "./components/ShowModalContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CounterButton />
        <br />
        <SpecialTextBox />
        <br />
        <UserButtons />
        <br />
        <CityDropDown />
        <br />
        <ChangeTemperature />
        <br />
        <SearchTextBox />
        <br />
        <VideoTextBox />
        <br />
        <SortUsers />
        <br />
        <ScaleVideo />
        <br />
        <ShowModal />
      </div>
      <div className="container">
        <Counter />
        <br />
        <SpecialText />
        <br />
        <CurrentCity />
        <br />
        <Thermostat />
        <br />
        <VideoPlayer />
        <br />
      </div>
      <div className="container">
        <Users />
      </div>
      <Modal />
    </div>
  );
}
export default App;
