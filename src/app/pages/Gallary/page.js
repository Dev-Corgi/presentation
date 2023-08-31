// "use client"
// import RotationMotionAbsolute from "@/app/CorgiUI/Motion/RotationMotionAbsolute";
// import RotationMotionRelative from "@/app/CorgiUI/Motion/RotationMotionRelative";
// import GuageController from "@/app/CorgiUI/Controller/GuageController";
// import CorgiImg from "@/app/CorgiUI/Components/Div/CorgiImg";
// import ScrollControllerGlobal from "@/app/CorgiUI/Controller/ScrollControllerGlobal";
// import React,{useEffect,useState} from "react";
// import MovingMotionRelative from "@/app/CorgiUI/Motion/MovingMotionRelative";
// const Gallary = () => {
//     const [scrollController, setScrollController] = useState(
//         new ScrollControllerGlobal(0)
//       );

//       const [scrollGuage, setScrollGuage] = useState(new GuageController(scrollController,0,10));
    

//     return (
//       <div className="relative bg-whitesmoke w-full h-[100vh] overflow-hidden text-right text-[0.94rem] text-black font-pretendard">
//         <div className="absolute top-[calc(50%_-_335px)] left-[calc(50%_-_197px)] bg-[#0C151E] w-[24.56rem] h-[36.69rem] overflow-hidden" />
//         <CorgiImg
//           className="absolute top-[calc(50%_-_335px)] left-[calc(50%_-_197px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
//           src="/images/img_gallarypic_1.png"
//           motions={[
//             {
//               input: scrollController,
//               motion: new RotationMotionAbsolute(
//                 10,
//                 -80,
//                 0,
//                 1,
//                 [0.785, 0.135, 0.15, 0.86]
//               ),
//             },
//             {
//                 input: scrollController,
//                 motion: new MovingMotionRelative(
//                     -300,
//                     -1000,
//                     "px",
//                   0,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//               }
//           ]}
//         />
//                 <CorgiImg
//           className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
//           src="/images/img_gallarypic_1.png"
//           motions={[
//             { 
//                 input: scrollGuage,
//                 motion: new RotationMotionAbsolute(
//                   -10,
//                   -80,
//                   0,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//                 condition: (state,value) =>{return value == 2} 
//               },
//               {
//                   input: scrollGuage,
//                   motion: new MovingMotionRelative(
//                       -300,
//                       -1000,
//                       "px",
//                     0,
//                     1,
//                     [0.785, 0.135, 0.15, 0.86]
//                   ),
//                   condition: (state,value) =>{return value == 2} 
//                 },
//             {
//                 input: scrollGuage,
//                 motion: new RotationMotionAbsolute(
//                   10,
//                   -10,
//                   0.1,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//                 condition: (state,value) =>{return value == 1} 
//               },
//             {
//                 input:  scrollGuage,
//                 motion: new MovingMotionRelative(
//                     -300,
//                     -1100,
//                     "px",
//                   0.1,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//                 condition: (state,value) =>{return value == 1} 
//               }
//           ]}
//         />

// <CorgiImg
//           className="absolute top-[calc(50%_+_765px)] left-[calc(50%_+_103px)] w-[24.56rem] h-[36.69rem] overflow-hidden object-cover rotate-[10deg]"
//           src="/images/img_gallarypic_1.png"
//           motions={[
//             {
//                 input: scrollGuage,
//                 motion: new RotationMotionAbsolute(
//                   10,
//                   -80,
//                   0,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//                 condition: (state,value) =>{return value == 3} 
//               },
//               {
//                   input: scrollGuage,
//                   motion: new MovingMotionRelative(
//                       -300,
//                       -1000,
//                       "px",
//                     0,
//                     1,
//                     [0.785, 0.135, 0.15, 0.86]
//                   ),
//                   condition: (state,value) =>{return value == 3} 
//                 },
//             {
//                 input: scrollGuage,
//                 motion: new RotationMotionAbsolute(
//                   -10,
//                   -10,
//                   0.1,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//                 condition: (state,value) =>{return value == 2} 
//               },
//             {
//                 input: scrollGuage,
//                 motion: new MovingMotionRelative(
//                     -300,
//                     -1100,
//                     "px",
//                   0.1,
//                   1,
//                   [0.785, 0.135, 0.15, 0.86]
//                 ),
//                 condition: (state,value) =>{return value == 2} 
//               }
//           ]}
//         />

//         <div className="absolute top-[calc(50%_-_101px)] right-[7.19rem] text-[3.75rem] font-semibold">
//           2008년
//         </div>
//         <div className="absolute top-[18.25rem] right-[7.31rem] w-[4.94rem] h-[1.13rem]">
//           <div className="absolute top-[0rem] left-[3.88rem] font-semibold text-darkgray">
//             15
//           </div>
//           <div className="absolute top-[0.85rem] left-[2.42rem] box-border w-[1.36rem] h-[0.04rem] border-t-[0.7px] border-solid border-darkgray" />
//           <div className="absolute top-[0rem] left-[0rem] font-semibold">No.</div>
//           <div className="absolute top-[0rem] left-[1.69rem] font-semibold">
//             1
//           </div>
//         </div>
//         <div className="absolute top-[calc(50%_+_9px)] right-[7.19rem] tracking-[0.04em] font-semibold text-dimgray">
//           2008년 자화상을 그렸을 당시 사진
//         </div>
//         <div className="absolute top-[calc(50%_+_49px)] right-[7.19rem] text-[1rem] tracking-[0.05em] font-semibold text-dimgray">
//           -진로를 정한 이유
//         </div>
//         <b className="absolute top-[calc(50%_-_143px)] left-[5.63rem] text-[6.25rem] tracking-[-0.02em] leading-[7.5rem] font-bookk-myungjo text-left">
//           <p className="m-0">미술에</p>
//           <p className="m-0">좌절하다</p>
//         </b>
//       </div>
//     );
//   };
  
//   export default Gallary;