

import Image from "next/image"
import arrowIamge from "@/app/assets/Group 212.png"


const Hero = () => {
    return (
        <>
        {/* Section1 */}
        <div className="w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] left-[1px] bg-[#043873]  text-white flex items-center">

            <div className="w-[656px] h-[361px] ">
                <div className="w-[656px] h-[238px]">

                    <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[0.02em] font-title">Get More Done with whitepace</h2>

                    <p className="w-[656px] h-[60px]  font-normal text-lg leading-[30px] tracking-[-0.02em] mt-[24px] font-title">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                        </p>

                

                </div>

                <div  className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] flex justify-around mt-[60px]">
                    <button className="flex font-title">Try Whitepace free <Image src={arrowIamge} alt="image" className="mt-2 w-[10px] h-[10px] ml-[10px]" />
                    </button></div>

            </div>


            {/*  */}

            <div className="w-[824px] h-[549px] bg-[#C4DEFD]">

            </div>

        </div>

        



        


        
        </>
    )
}

export default Hero