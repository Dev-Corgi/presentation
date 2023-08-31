import React from "react";

//Components
import CorgiDiv from "./Components/Div/CorgiDiv";

//Controllers
import ButtonController from "./Controller/ButtonController";
import GuageController from "./Controller/GuageController";
import ScrollControllerComponent from "./Controller/ScrollControllerComponent";
import ScrollControllerGlobal from "./Controller/ScrollControllerGlobal";
import SlideDetectorComponent from "./Controller/SlideDetectorComponent";

//Motions
import MovingMotionAbsolute from "./Motion/MovingMotionAbsolute";
import MovingMotionRelative from "./Motion/MovingMotionRelative";
import OpacityMotionAbsolute from "./Motion/OpacityMotionAbsolute";
import ScaleMotionAbsolute from "./Motion/ScaleMotionAbsolute";
import StretchMotionAbsolute from "./Motion/StretchMotionAbsolute";

const CorgiUI = {
  div: function (props, ref, motions) {
    return <CorgiDiv {...props} ref={ref} motions={motions} />;
  },
};



export default CorgiUI;
