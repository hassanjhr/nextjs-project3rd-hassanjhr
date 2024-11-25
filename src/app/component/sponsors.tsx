
import Image from "next/image";
import Apple from "@/app/assets/Apple.png";
import MicroSoft from "@/app/assets/microsoft 1.png";
import Slack from "@/app/assets/Slack_Technologies_Logo 1.png";
import Google from "@/app/assets/Group 246.png";



const Sponsors = () => {
    return(
        <>
        <div className="w-[1922px] h-[538px] top-[4654px] bg-white ">
            <div className="w-[1482px] h-[87px] py-[140px] mx-auto ">
                <h2 className="  text-[#212529] text-center font-title font-bold text-[72px] leading-[87.14px] tracking-[0.02em] ">Our sponsors</h2>

            </div>

            <div className="w-[1482px] h-[71px]  mx-auto  mt-[50px] flex justify-between">

                <Image src={Apple} alt="Apple" className="w-[55.47px] h-[68px]" />
                <Image src={MicroSoft} alt="MicroSoft" className="w-[287px] h-[62px]" />
                <Image src={Slack} alt="Slack" className="w-[280px] h-[71px]" />
                <Image src={Google} alt="Google" className="w-[211px] h-[69.81px]" />


            </div>
            



        </div>
        </>
    )
}

export default Sponsors;