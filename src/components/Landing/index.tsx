import Navbar from "./Navbar";
import youngwoman from "../../assets/img/youngwoman.png";
import ValueCard from "./ValueCard";
import { features, howItWorksData, socialIcons, values } from "./data";
import FeatureCard from "./FeatureCard";
import padlock from "../../assets/icons/Lock.svg";
import woman from "../../assets/img/woman.png";
import HowItWorksCard from "./HowItWorksCard";
import yieldlogo from "../../assets/icons/yieldlogo.svg";
import leftBig from "../../assets/icons/left_big.png";
import leftSmall from "../../assets/icons/left_small.png";
import rightBig from "../../assets/icons/right_big.png";
import rightSmall from "../../assets/icons/right_small.svg";
import { Link } from "react-router-dom";

const SmallStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      className="absolute top-[5.81rem] left-[18.37rem]"
    >
      <path
        d="M22.6452 0.0292969L26.4852 17.9116L44.3676 21.7516L26.4852 25.5917L22.6452 43.474L18.8052 25.5917L0.922852 21.7516L18.8052 17.9116L22.6452 0.0292969Z"
        fill="#34B4F7"
      />
    </svg>
  );
};

const BigStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="91"
      viewBox="0 0 91 91"
      fill="none"
      className="absolute right-[15.72rem] top-[15.69rem]"
    >
      <path
        d="M45.4512 0.964844L53.4093 38.0245L90.469 45.9826L53.4093 53.9407L45.4512 91.0004L37.4931 53.9407L0.433411 45.9826L37.4931 38.0245L45.4512 0.964844Z"
        fill="#077DBB"
      />
    </svg>
  );
};

const Landing = () => {
  return (
    <>
      <div className="px-[112px] py-[43px] flex flex-col gap-[4.94rem] relative">
        <Navbar />
        <section className="flex flex-col gap-[5.19rem]">
          <div className="flex items-center justify-between gap-[1.2rem]">
            <div className="flex flex-col gap-[1rem] items-start">
              <h1 className="text-[#1F2937] text-6xl font-bold">
                Grow your <span className="text-[#077DBB]">money</span> today
              </h1>
              <p className="text-[#4B5563] text-lg font-medium tracking-normal">
                Get the opportunity to unlock earnings as you save
              </p>
              <button className="bg-[#077DBB] text-[#FFFFFF] p-4 rounded-md">
                Start Investing
              </button>
            </div>
            <div className="box-content px-4 w-[40.3%] bg-[#CCECFD] rounded-3xl ">
              <img src={youngwoman} alt="Woman Picture" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* mapping */}
            {values.map((item) => (
              <ValueCard
                key={item.title}
                mainBg={item.mainBg}
                smallBg={item.smallBg}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-[1.5rem]">
          <h1 className="w-[50%] m-auto text-[2.75rem] font-medium leading-3.25 tracking-tighter text-center">
            Feel the best experience with our features
          </h1>
          <div className="flex justify-between gap-[1.5rem]">
            {features.map((data) => (
              <FeatureCard
                key={data.bigTitle}
                icon={data.icon}
                bigTitle={data.bigTitle}
                content={data.content}
                smallTitle={data.smallTitle}
                smallText={data.smallText}
                image={data.image}
                smallTitleColor={data.smallTitleColor}
                smallTextColor={data.smallTextColor}
              />
            ))}
          </div>
          <div className="flex items-center bg-[#077dbb0a] justify-between pt-[2rem] px-[3rem] relative overflow-hidden h-[26rem]">
            <div className="flex flex-col gap-[2rem] items-start w-[46%]">
              <div className="rounded-full bg-[#077DBB] flex items-center justify-center w-[4.5rem] h-[4.5rem]">
                <img src={padlock} alt="padlock" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#055986] text-4xl font-semibold">
                  Guaranteed Returns
                </span>
                <span className="text-[#6B7280] text-base font-normal">
                  With Fixed Savings, you can enjoy the peace of mind that comes
                  with guaranteed returns. Your deposited funds are protected.
                </span>
              </div>
            </div>

            <div className="w-[41.9%] bg-[#F3F4F6] flex justify-center border border-[#E5E7EB] rounded-2xl absolute right-[3rem] top-[4rem] h-[27rem]">
              <div className="w-[95.7%] flex items-center justify-center bg-[#F9FAFB] border border-[#E5E7EB] p-[1.5rem] absolute top-[-2rem] rounded-2xl">
                <img src={woman} alt="woman" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-[2.75rem] font-medium leading-3.25 tracking-tighter text-center">
              How it works
            </h1>
            <p className="text-[1.125rem] text-center text-[#6B7280]">
              It’s very easy
            </p>
          </div>
          <div className="flex gap-[0.8rem]">
            {howItWorksData.map((data) => (
              <HowItWorksCard
                icon={data.icon}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col overflow-hidden relative items-center justify-center h-[32.6875rem] bg-gradient-to-b from-[#077DBB] to-[#07608F] rounded-3xl">
          <div className="flex flex-col items-center w-[47.3%] gap-[2rem] relative z-10">
            <span className="text-white text-5xl font-bold">
              Start Saving Today!
            </span>
            <span className="text-white text-lg font-normal text-center">
              Fixed Saving Solution designed to help you grow your savings
              effortlessly.
            </span>
            <button className="text-white bg-[#077DBB] px-[1.25rem] py-[0.625rem] rounded-md">
              Get Started
            </button>
          </div>
          <SmallStar />
          <BigStar />
          <img src={leftBig} alt="" className="absolute bottom-0 left-0" />
          <img
            src={leftSmall}
            alt=""
            className="absolute bottom-0 left-[13rem]"
          />
          <img src={rightBig} alt="" className="absolute top-0 right-0" />
          <img
            src={rightSmall}
            alt=""
            className="absolute top-0 right-[13rem]"
          />
        </section>
      </div>
      <footer className="bg-[#111827] flex px-[7.8%] py-[4.4%] flex-col items-start gap-[4rem]">
        <div className="flex w-[100%] items-start justify-between">
          <div className="flex flex-col w-[32.4%]">
            <img
              src={yieldlogo}
              alt="Yield Cdl"
              className="w-[6.125rem] h-[2.625rem]"
            />
            <p className="text-[#E5E7EB] text-sm font-normal leading-6">
              Fixed savings plans tailored to your financial goals.
            </p>
          </div>

          <div className="flex w-[40.8%] items-start justify-between text-[#D1D5DB] text-base leading-6 self-stretch">
            <div className="text-base font-normal flex flex-col gap-[0.5rem] w-[50%] leading-6 self-stretch">
              <p className="text-[#F3F4F6] font-medium">Company</p>
              <p>About</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
            </div>

            <div className="text-[#D1D5DB] w-[50%] text-base flex flex-col gap-[0.5rem] font-normal leading-6 self-stretch">
              <span className="text-[#F3F4F6] font-medium"> Contact Us</span>
              <p>Phone: 01-4482225</p>
              <p>
                Address: 48/50 Isaac John Street, GRA, Ikeja, Lagos, Nigeria.
              </p>
              <p>Whatsapp: 09070309430</p>
            </div>
          </div>
        </div>
        <div className="flex items-center border-t w-full pt-[1.94rem] justify-between">
          <div className="flex gap-[1rem]">
            {socialIcons.map((url) => (
              <Link to={url.url} key={url.url}>
                <img src={url.path} className="w-[1.5rem] h-[1.5rem]" />
              </Link>
            ))}
          </div>
          <span className="text-[#9CA3AF] text-sm font-normal">
            Copyright © Credit Direct Limited. Authorized and regulated by the
            CBN.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Landing;
