import { connect } from 'react-redux';

import CityDropDown from "../components/CityDropDown";

import { setCurrentCity } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setCurrentCity(txt)),
    
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CityDropDown);
