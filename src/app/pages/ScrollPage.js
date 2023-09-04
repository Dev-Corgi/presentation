"use client";
import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
import ImageComponent from "./imageComponent";
import React, { useState, useEffect } from "react";
import GuageController from "@/app/CorgiUI/Controller/GuageController";
import CorgiDiv from "@/app/CorgiUI/Components/CorgiDiv";
import MovingMotion from "@/app/CorgiUI/Motion/MovingMotion";
import OpacityMotion from "@/app/CorgiUI/Motion/OpacityMotion";
const ScrollPage = () => {
  const [scrollController, setScrollController] = useState(
    new ScrollControllerGlobal(1000)
  );

  const [scrollGuage, setScrollGuage] = useState(
    new GuageController(scrollController, 0, 100)
  );

  return (
    <CorgiDiv className="absolute bg-white w-full h-[100vh] text-left text-[1.19rem] text-white font-pretendardRegular overflow-hidden"
    motions={[
        {
          input: scrollGuage,
          motion: new OpacityMotion(
            -1,
            0,
            1,
            [0.785, 0.135, 0.15, 0.86]
          ),
          condition: (state, value) => {
            return value == 12;
          },
        }
      ]}>
      <CorgiDiv
        className="absolute w-full top-[0rem] right-[0rem] left-[0rem] bg-[#1B1B1B] h-[600rem]"
        motions={[
          {
            input: scrollGuage,
            motion: new MovingMotion(
              0,
              "-1200px",
              0,
              0.8,
              [0.39, 0.575, 0.565, 1]
            ),
            condition: (state, value) => {
              return value > 8;
            },
          },
        ]}
      >
        <div className="absolute w-[28.06%] top-[1300px] right-[16%] left-[55.94%] flex flex-col items-start justify-start gap-[1441px]"
        >
          <ImageComponent imgsrc="/images/test1.jpg" content={"교내 동아리 교육담당, 지식을 나누며 갈고닦자"}/>
          <ImageComponent imgsrc="/images/test3.jpg" content={"포트폴리오, 나의 노력들을 기록해두자"}/>
        </div>
        <div className="absolute w-[28.06%] top-[100px] right-[56%] left-[15.94%] flex flex-col items-center justify-start gap-[1441px]"
                  >
          <ImageComponent imgsrc="/images/test2.jpg" content={"공모전 출전, 다른학생들과의 차이를 경험하자"}/>
          <ImageComponent imgsrc="/images/test4.jpg"content={"웹클론 스터디, 실전 기술들도 놓치지 말고 익히자"} />
        </div>
      </CorgiDiv>
    </CorgiDiv>
  );
};

export default ScrollPage;
