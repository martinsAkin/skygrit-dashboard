interface HeadbarProps {
  firstname?: string;
  badgeNo?: string;
  fullname?: string;
}

const Headbar = ({
  firstname = "Arik",
  badgeNo = "9+",
  fullname = "Arik Arik",
}: HeadbarProps) => {
  return (
    <section>
      <nav className="py-2 px-16 border-b-[1px] border-b-[#E5E7EB]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[20px] text-[#374151] font-semibold cursor-pointer">
            Hi, {firstname}
          </h2>
          <div className="flex flex-row gap-[16px] items-center">
            <div className="relative cursor-pointer">
              <img
                src="/assets/si_notifications-line.png"
                alt="bell-icon"
                className="w-[30px] h-[30px] cursor-pointer "
              />
              <span className="absolute top-0 right-0 bg-red-600 text-white font-bold rounded-full text-[8.5px] px-1.5 py-0.5">
                {badgeNo}
              </span>
            </div>
            <span className="flex justify-center items-center rounded-full bg-[#F5F8FF] w-[42px] h-[42px] text-[14px] font-semibold text-[#F9956B] cursor-pointer">
              AM
            </span>
            <p className="text-[14px] font-bold text-[#302C1C] cursor-pointer hover:text-blue-800">{fullname}</p>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Headbar;
