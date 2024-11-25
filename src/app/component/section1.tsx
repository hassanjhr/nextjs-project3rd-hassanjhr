

import Image from "next/image"
import arrowIamge from "@/app/assets/Group 212.png"


const Sec1 = () => {
    return (
        <>
        {/* Section1 */}
        <div className="w-[1921px] h-[759px] py-[140px] px-[220px] top-[2509px] left-[1px] bg-[#043873]  text-white flex items-center">

            <div className="w-[697px] h-[294px] ">
                <div className="w-[697px] h-[171px]">

                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] font-title">Use as Extension</h2>

                    <p className="w-[697px] h-[60px]  font-normal text-lg leading-[30px] tracking-[0.02em] mt-[24px] text-[#FFFFFF]">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

                        </p>

                

                </div>

                <div  className="w-[171px] h-[63px] rounded-md py-5 px-10  bg-[#4F9CF9] flex justify-around mt-[60px]">
                    <button className="flex ">Let's Go <Image src={arrowIamge} alt="image" className="mt-2 w-[10px] h-[10px] ml-[10px]" />
                    </button></div>

            </div>


            {/*  */}

            <div className="w-[686px] h-[479px] bg-[#C4DEFD] ml-[98px]">

            </div>

        </div>


        
        </>
    )
}

export default Sec1