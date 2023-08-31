"use client";
import React, { useState, useEffect } from "react";
import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
import ScaleMotionAbsolute from "@/app/CorgiUI/Motion/ScaleMotionAbsolute";
import MovingMotionRelative from "@/app/CorgiUI/Motion/MovingMotionRelative";
import OpacityMotionAbsolute from "@/app/CorgiUI/Motion/OpacityMotionAbsolute";
import CorgiDiv from "@/app/CorgiUI/Components/Div/CorgiDiv";
import CorgiImg from "@/app/CorgiUI/Components/Div/CorgiImg";
const Dictionary1 = () => {
  const [scrollController, setScrollController] = useState(
    new ScrollControllerGlobal(0)
  );

  return (
    <div className="relative bg-white w-full h-[100vh] overflow-hidden text-left text-[8.13rem] text-turquoise">
      <CorgiImg
        className="absolute h-full w-full overflow-hidden object-cover"
        src="/images/img_Dictionary1_background.png"
        motions={[
          {
            input: scrollController,
            motion: new OpacityMotionAbsolute(
              0,
              0,
              0.8,
              [0.215, 0.61, 0.355, 1]
            ),
          },
        ]}
      ></CorgiImg>

      <CorgiDiv
        className="absolute top-[calc(50%_-_78px)] left-[calc(50%_-_335px)] w-[43rem] h-[9.75rem]"
        motions={[
          {
            input: scrollController,
            motion: new ScaleMotionAbsolute(
              1000 / 130,
              1000 / 130,
              0,
              0.8,
              [0.215, 0.61, 0.355, 1]
            ),
          },
          {
            input: scrollController,
            motion: new MovingMotionRelative(
              700,
              40,
              "px",
              0,
              0.8,
              [0.215, 0.61, 0.355, 1]
            ),
          },
        ]}
      >
        <div className="absolute top-[calc(50%_-_78px)] left-[calc(50%_-_218.5px)] text-[#55E4C8] font-pretendardSemiBold">
          프론트엔드
        </div>
        <div className="absolute top-[calc(50%_-_1px)] left-[calc(50%_-_343.5px)] text-[0.75rem] tracking-[0.1em] text-[#55E4C8] font-pretendardSemiBold">
          DISCOVER MORE
        </div>
      </CorgiDiv>

      <CorgiDiv
        className="absolute top-[22.81rem] left-[calc(50%_-_398px)] text-[4.69rem] font-pretendardBold opacity-0"
        motions={[
          {
            input: scrollController,
            motion: new OpacityMotionAbsolute(
              1,
              0.6,
              1,
              [0.215, 0.61, 0.355, 1]
            ),
          },
          {
            input: scrollController,
            motion: new MovingMotionRelative(
              0,
              -2,
              "rem",
              0.6,
              1,
              [0.215, 0.61, 0.355, 1]
            ),
          }
        ]}
      >
        프론트엔드 엔지니어
      </CorgiDiv>

      <CorgiDiv className="absolute top-[30.63rem] left-[calc(50%_-_390px)] text-[2rem] font-pretendardSemiBold opacity-0"
              motions={[
                {
                  input: scrollController,
                  motion: new OpacityMotionAbsolute(
                    1,
                    0.8,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                },
                {
                  input: scrollController,
                  motion: new MovingMotionRelative(
                    0,
                    -2,
                    "rem",
                    0.8,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                }
              ]}>
        <p className="m-0">앱/웹 등의 서비스에서 사용자에게 보여지는</p>
        <p className="m-0">부분을 구현하는 개발자</p>
      </CorgiDiv>

      <CorgiDiv className="absolute top-[37.38rem] left-[calc(50%_-_390px)] w-[32.75rem] h-[1.19rem] text-[1rem] opacity-0"
              motions={[
                {
                  input: scrollController,
                  motion: new OpacityMotionAbsolute(
                    1,
                    1,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                },
                {
                  input: scrollController,
                  motion: new MovingMotionRelative(
                    0,
                    -2,
                    "rem",
                    1,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                }
              ]}>
        <div className="absolute top-[0rem] left-[calc(50%_-_262px)]">
          <span className="font-pretendardRegular">Year</span>
          <b>{` `}</b>
          <span>:</span>
          <b>{` `}</b>
          <span className="font-pretendardSemiBold">2016</span>
        </div>
        <div className="absolute top-[0rem] left-[calc(50%_-_129px)]">
          <span className="font-pretendardRegular">WITH</span>
          <b>{` `}</b>
          <span>:</span>
          <b>{` `}</b>
          <span className="font-pretendardSemiBold">Aalto University</span>
        </div>
        <div className="absolute top-[0rem] left-[calc(50%_+_91px)]">
          <span className="font-pretendardRegular">THEME</span>
          <b>{` `}</b>
          <span>:</span>
          <b>{` `}</b>
          <span className="font-pretendardSemiBold">Look of Sound</span>
        </div>
      </CorgiDiv>
    </div>
  );
};

export default Dictionary1;
