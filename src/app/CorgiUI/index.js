import React from "react";

//Components
import CorgiDiv from "./Components/Div/CorgiDiv";
import CorgiImg from "./Components/CorgiImg";
import CorgiLoader from "./CorgiLoader";

//Controllers
import ButtonController from "./Controller/ButtonController";
import GuageController from "./Controller/GuageController";
import ScrollControllerComponent from "./Controller/ScrollControllerComponent";
import ScrollControllerGlobal from "./Controller/ScrollControllerGlobal";
import SlideDetectorComponent from "./Controller/SlideDetectorComponent";

//Motions

import MovingMotion from "./Motion/MovingMotion";
import OpacityMotion from "./Motion/OpacityMotion";
import RotationMotion from "./Motion/RotationMotion";
import ScaleMotion from "./Motion/ScaleMotion";
import StretchMotion from "./Motion/StretchMotion";

const CorgiUI = {
  div: function (props, ref, motions) {
    return <CorgiDiv {...props} ref={ref} motions={motions} />;
  },

  img: function (props, ref, motions) {
    return <CorgiImg {...props} ref={ref} motions={motions} />;
  },
};



export default CorgiUI;
