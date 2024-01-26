interface FeatureCardProps {
  icon: string;
  bigTitle: string;
  content: string;
  smallTitle: string;
  smallText: string;
  image: string;
  smallTitleColor: string;
  smallTextColor: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  bigTitle,
  content,
  smallTitle,
  smallText,
  image,
  smallTextColor,
  smallTitleColor,
}) => {
  return (
    <div className="flex flex-col p-[3rem] rounded-[3rem] bg-[#077dbb0a] gap-[1rem]">
      <div className="flex items-center justify-center rounded-full w-[4.5rem] h-[4.5rem] bg-[#077DBB]">
        <img src={icon} alt={bigTitle} />
      </div>
      <span className="text-[#055986] text-4xl font-semibold">{bigTitle}</span>
      <p className="text-[#6B7280] text-base font-normal">{content}</p>
      <div className="bg-[#F3F4F6] relative flex w-[100%] mt-[2rem] ml-[1rem] rounded-2xl border border-[#E5E7EB]">
        <div className="relative top-[-0.69rem] flex w-[100%] bg-[#F9FAFB] left-[-0.77rem] rounded-2xl border border-[#E5E7EB]">
          <div className="bg-white flex items-center justify-between p-[1.5rem] rounded-2xl border border-[#E5E7EB] relative w-[100%] top-[-0.69rem] left-[-0.77rem]">
            <div className="flex flex-col">
              <span
                className="text-[1.75rem] font-medium"
                style={{ color: `${smallTitleColor}` }}
              >
                {smallTitle}
              </span>
              <span
                className="font-normal text-base"
                style={{ color: `${smallTextColor}` }}
              >
                {smallText}
              </span>
            </div>
            <img src={image} alt={smallTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
