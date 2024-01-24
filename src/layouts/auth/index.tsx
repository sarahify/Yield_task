import { ReactNode, useEffect, useState } from "react";
import signInImg from "../../assets/img/signIn-Img.png";
import logo from "../../assets/icons/Logo.svg";
import bigNaira from "../../assets/icons/big-naira.svg";
import smallNaira from "../../assets/icons/small-naira.svg";
import { slidingTexts } from "./data";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex === slidingTexts.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div className=" flex bg-neutral-100 h-screen w-screen">
      <div className="w-[50vw] h-[100vh] flex justify-center items-center relative">
        <img
          src={logo}
          alt="company logo"
          className="w-[5.75756rem] h-[2.5rem] absolute top-[3.8%] left-[8.1%]"
        />
        <div className="w-[67.5%] pb-8 gap-[0.5rem] flex flex-col rounded-lg bg-white bg-opacity-90 backdrop-blur-14 relative">
          <img src={signInImg} alt="" className="rounded-lg" />
          <div className="flex flex-col items-center gap-[0.5rem] py-0 px-[1rem]">
            <span className="text-[#077DBB] text-center font-bold text-lg leading-8 tracking-tight">
              {slidingTexts?.[currentIndex]?.title}
            </span>
            <p className="text-neutral-500 text-center font-medium text-sm leading-5 h-[3rem]">
              {slidingTexts?.[currentIndex]?.content}
            </p>
          </div>
          <div className="flex align-center justify-center gap-[0.5rem]">
            <span
              className={`rounded-full bg-${
                currentIndex === 0 ? "[#077DBB]" : "neutral-400"
              } w-[0.6875rem] h-[0.6875rem] cursor-${
                currentIndex === 0 ? "not-allowed" : "pointer"
              }`}
              onClick={() => setCurrentIndex(0)}
            ></span>
            <span
              className={`rounded-full bg-${
                currentIndex === 1 ? "[#077DBB]" : "neutral-400"
              } w-[0.6875rem] h-[0.6875rem] cursor-${
                currentIndex === 1 ? "not-allowed" : "pointer"
              }`}
              onClick={() => setCurrentIndex(1)}
            ></span>
            <span
              className={`rounded-full bg-${
                currentIndex === 2 ? "[#077DBB]" : "neutral-400"
              } w-[0.6875rem] h-[0.6875rem] cursor-${
                currentIndex === 2 ? "not-allowed" : "pointer"
              }`}
              onClick={() => setCurrentIndex(2)}
            ></span>
          </div>
          <img
            src={smallNaira}
            alt=""
            className="absolute left-[70%] top-[-4rem] z-99"
          />
          <img
            src={bigNaira}
            alt=""
            className="absolute top-[-3rem] right-[-3rem]"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
