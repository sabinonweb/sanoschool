import React, { useState, useEffect } from "react";

import SellerModeOff from "../../components/login/SellerModeOff";
import SellerModeOn from "../../components/SellerModeOn";

const Profile = () => {
  const [switchClicked, setSwitchClicked] = useState(false);
  const handleSwitch = () => {
    setSwitchClicked((prevState) => !prevState);
  };

  return !switchClicked ? (
    <SellerModeOff
      handleSwitch={handleSwitch}
      switchClicked={switchClicked}
    ></SellerModeOff>
  ) : (
    <SellerModeOn
      handleSwitch={handleSwitch}
      switchClicked={switchClicked}
    ></SellerModeOn>
  );
};
export default Profile;
