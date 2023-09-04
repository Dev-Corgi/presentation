"use client";
import React, { useState, useEffect } from "react";
import ScaleMotion from "@/app/CorgiUI/Motion/ScaleMotion";
import MovingMotion from "@/app/CorgiUI/Motion/MovingMotion";
import OpacityMotion from "@/app/CorgiUI/Motion/OpacityMotion";
import CorgiDiv from "@/app/CorgiUI/Components/CorgiDiv";
import CorgiImg from "@/app/CorgiUI/Components/CorgiImg";
import GuageController from "@/app/CorgiUI/Controller/GuageController";
import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
const Dictionary1 = () => {
  const [scrollController, setScrollController] = useState(
    new ScrollControllerGlobal(1000)
  );

  const [scrollGuage, setScrollGuage] = useState(
    new GuageController(scrollController, 0, 100)
  );

  return (
    <CorgiDiv className="absolute bg-white w-full h-[100vh] overflow-hidden text-left text-[8.13rem] text-turquoise"
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
            return value == 2;
          },
        }
      ]}>
      <CorgiImg
        className="absolute h-full w-full overflow-hidden object-cover"
        src="/images/img_Dictionary1_background.png"
        motions={[
          {
            input: scrollGuage,
            motion: new OpacityMotion(
              -1,
              0,
              0.8,
              [0.215, 0.61, 0.355, 1]
            ),
            condition: (state, value) => {
              return value == 1;
            },
          }
        ]}
      ></CorgiImg>

      <CorgiDiv
        className="absolute top-[calc(50%_-_78px)] left-[calc(50%_-_335px)] w-[43rem] h-[9.75rem]"
        motions={[
          {
            input: scrollGuage,
            motion: new ScaleMotion(
              1000 / 130,
              1000 / 130,
              0,
              0.8,
              [0.215, 0.61, 0.355, 1]
            ),
            condition: (state, value) => {
              return value == 1;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              "700px",
              "40px",
              0,
              0.8,
              [0.215, 0.61, 0.355, 1]
            ),
            condition: (state, value) => {
              return value == 1;
            },
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
            input: scrollGuage,
            motion: new OpacityMotion(
              1,
              0.6,
              1,
              [0.215, 0.61, 0.355, 1]
            ),
            condition: (state, value) => {
              return value == 1;
            },
          },
          {
            input: scrollGuage,
            motion: new MovingMotion(
              0,
              "-2vh",
              0.6,
              1,
              [0.215, 0.61, 0.355, 1]
            ),
            condition: (state, value) => {
              return value == 1;
            },
          }
        ]}
      >
        프론트엔드 엔지니어
      </CorgiDiv>

      <CorgiDiv className="absolute top-[30.63rem] left-[calc(50%_-_390px)] text-[2rem] font-pretendardSemiBold opacity-0"
              motions={[
                {
                  input: scrollGuage,
                  motion: new OpacityMotion(
                    1,
                    0.8,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 1;
                  },
                },
                {
                  input: scrollGuage,
                  motion: new MovingMotion(
                    0,
                    "-2vh",
                    0.8,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 1;
                  },
                }
              ]}>
        <p className="m-0">앱/웹 등의 서비스에서 사용자에게 보여지는</p>
        <p className="m-0">부분을 구현하는 개발자</p>
      </CorgiDiv>

      <CorgiDiv className="absolute top-[37.38rem] left-[calc(50%_-_390px)] w-[32.75rem] h-[1.19rem] text-[1rem] opacity-0"
              motions={[
                {
                  input: scrollGuage,
                  motion: new OpacityMotion(
                    1,
                    1,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 1;
                  },
                },
                {
                  input: scrollGuage,
                  motion: new MovingMotion(
                    0,
                    "-2vh",
                    1,
                    1,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 1;
                  },
                }
              ]}>
      </CorgiDiv>
    </CorgiDiv>
  );
};

export default Dictionary1;
