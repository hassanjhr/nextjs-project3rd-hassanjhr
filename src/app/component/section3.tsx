





import Image from "next/image"
import arrowIamge from "@/app/assets/Group 212.png"


const Sec3 = () => {
    return (
        <>
        <div className="w-[1921px] h-[574px] top-[4080px] left-[1px] bg-[#043873] text-white ">
            <div className="w-[1481px] h-[294px] py-[140px] px-[428.5px]">
                <div className="w-[1064px] h-[171px] ">
                    <h2 className="w-[1064px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em] font-title text-center">Your work, everywhere you are</h2>
                    <p className="w-[1064px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-center font-title mt-[24px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>

                    <div  className="w-[195px] h-[63px] rounded-lg py-5 px-10  bg-[#4F9CF9] flex justify-around mt-[60px] ml-[434.5px] text-white">
                    <button className="flex  ">Try Taskey <Image src={arrowIamge} alt="image" className="mt-2 w-[10px] h-[10px] ml-[10px]" />
                    </button></div>
                </div>

            </div>

        </div>
        
        </>
    )
}

export default Sec3