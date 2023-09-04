const ImageComponent = ({imgsrc,content}) => {
    return (
        <div className="self-stretch relative h-[59.94rem] text-white text-left">
            <div className="absolute w-[99.78%] top-[0rem] right-[0%] left-[0.22%] h-[37.75rem] overflow-hidden">
              <img
                className="absolute w-[120%] top-[0rem] right-[-20%] left-[0%] max-w-full overflow-hidden h-[45.3rem] object-cover"
                alt=""
                src= {imgsrc}
              />
            </div>
        <div className="absolute top-[38.63rem] left-[0rem] w-[24.88rem] h-[21.31rem]">
          <div className="absolute top-[2.96rem] left-[9.33rem] box-border w-[9.9rem] h-[0.09rem] border-t-[1.4px] border-solid border-gray-400" />
          <div className="absolute top-[0rem] left-[0.06rem] tracking-[0.03em] leading-[6.13rem] font-pretendardRegular">
            Fine Dine Club
          </div>
          <div className="absolute top-[5.94rem] left-[0rem] text-[2.38rem] tracking-[0.01em] leading-[2.69rem] font-pretendardRegular">
            <p className="m-0">{content}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageComponent;