


import Image from "next/image"
import arrowIamge from "@/app/assets/Group 212.png"


const Sec2 = () => {
    return (
        <>
        {/* Section1 */}
        <div className="w-[1921px] h-[812.09px] py-[140px] px-[220px] top-[3268px] left-[1px] bg-white  flex items-center gap-[98px]">



            {/*  */}
<div className="flex">
            <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]  flex">

            </div>

        </div>
            <div className="w-[669px] h-[411px]  ">
                <div className="w-[669px] h-[288px]">

                    <h2 className="w-[669px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em] font-title">Customise it
                    to <br /> your needs</h2>

                    <p className="w-[669px]  h-[90px]  font-normal text-lg leading-[30px] tracking-[0.02em] mt-[24px] text-[#212529]">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.

                        </p>

                

                </div>

                <div  className="w-[171px] h-[63px] rounded-lg py-5 px-10  bg-[#4F9CF9] flex justify-around mt-[60px] text-white">
                    <button className="flex ">Let's Go <Image src={arrowIamge} alt="image" className="mt-2 w-[10px] h-[10px] ml-[10px]" />
                    </button></div>

            </div>

            </div>


        
        </>
    )
}

export default Sec2