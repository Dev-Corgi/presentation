"use client";
import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
import ImageComponent from "./imageComponent";
import CorgiDiv from "@/app/CorgiUI/Components/Div/CorgiDiv";
import React, { useState, useEffect } from "react";
import MovingMotionRelative from "@/app/CorgiUI/Motion/MovingMotionRelative";

const ScrollPage = () => {
  const [scrollController, setScrollController] = useState(
    new ScrollControllerGlobal(1)
  );

  return (
    <div className="relative bg-white w-full h-[100vh] text-left text-[1.19rem] text-white font-pretendard overflow-hidden">
      <CorgiDiv
        className="absolute w-full top-[0rem] right-[0rem] left-[0rem] bg-[#1B1B1B] h-[360.75rem]"
        motions={[
          {
            input: scrollController,
            motion: new MovingMotionRelative(
              0,
              -600,
              "px",
              0,
              0.8,
              [0.39, 0.575, 0.565, 1]
            ),
            condition: (state, value) => {
              return state > 0;
            },
          },
          {
            input: scrollController,
            motion: new MovingMotionRelative(
              0,
              600,
              "px",
              0,
              1,
              [0.39, 0.575, 0.565, 1]
            ),
            condition: (state, value) => {
              return state < 0;
            },
          }
        ]}
      >
        <div className="absolute w-[28.06%] top-[80rem] right-[16%] left-[55.94%] flex flex-col items-start justify-start gap-[33.63rem]"
          // motions={[
          //   {
          //     input: scrollController,
          //     motion: new MovingMotionRelative(
          //       0,
          //       -30,
          //       "px",
          //       0,
          //       1,
          //       [0.39, 0.575, 0.565, 1]
          //     ),
          //     condition: (state, value) => {
          //       return state > 0;
          //     },
          //   },
          //   {
          //     input: scrollController,
          //     motion: new MovingMotionRelative(
          //       0,
          //       30,
          //       "px",
          //       0,
          //       1,
          //       [0.39, 0.575, 0.565, 1]
          //     ),
          //     condition: (state, value) => {
          //       return state < 0;
          //     },
          //   }
          // ]}
        >
          <ImageComponent imgsrc="/images/testimage1.jpg" />
          <ImageComponent imgsrc="/images/testimage3.jpg" />
          <ImageComponent imgsrc="/images/testimage5.jpg" />
          <ImageComponent imgsrc="/images/testimage7.jpg" />
        </div>
        <div className="absolute w-[28.06%] top-[44rem] right-[56%] left-[15.94%] flex flex-col items-center justify-start gap-[49.94rem]"
                  // motions={[
                  //   {
                  //     input: scrollController,
                  //     motion: new MovingMotionRelative(
                  //       0,
                  //       -15,
                  //       "px",
                  //       0,
                  //       1,
                  //       [0.39, 0.575, 0.565, 1]
                  //     ),
                  //     condition: (state, value) => {
                  //       return state > 0;
                  //     },
                  //   },
                  //   {
                  //     input: scrollController,
                  //     motion: new MovingMotionRelative(
                  //       0,
                  //       15,
                  //       "px",
                  //       0,
                  //       1,
                  //       [0.39, 0.575, 0.565, 1]
                  //     ),
                  //     condition: (state, value) => {
                  //       return state < 0;
                  //     },
                  //   }
                  // ]}
                  >
          <ImageComponent imgsrc="/images/testimage2.jpg" />
          <ImageComponent imgsrc="/images/testimage4.jpg" />
          <ImageComponent imgsrc="/images/testimage6.jpg" />
          <ImageComponent imgsrc="/images/testimage8.jpg" />
        </div>
        <div className="absolute top-[14.69rem] left-[calc(50%_-_462px)] text-[6.25rem] tracking-[-0.02em] leading-[6.13rem] font-extralight">
          <p className="m-0">We do amazing things with amazing</p>
          <p className="m-0">People.</p>
        </div>
      </CorgiDiv>
    </div>
  );
};

export default ScrollPage;
