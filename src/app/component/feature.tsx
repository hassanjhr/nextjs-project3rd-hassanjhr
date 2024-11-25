import Image from "next/image";
import arrowIamge from "@/app/assets/Group 212.png";
import RingImage from "@/app/assets/Work Together Image.png"

const Feature = () => {
  return (
    <>
      {/* Section2 */}

      <div className="w-[1920px] h-[1588px] top-[921px] left-[1px] py-[140px] px-[220px] bg-white">
        {/* Part 1 */}
        <div className="flex">
        <div className="w-[1480px] h-[547px] flex items-center">
          {/* 1 */}
          <div className="w-[672px] h-[411px] ">

            <h1 className="w-[672px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[0.02em] font-title">
              Project Management
            </h1>
            <p className="w-[672px] h-[90px] font-normal text-[18px] leading-[30px] tracking-[-0.002em] mt-[24px] font-title ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note
            </p>

            <div  className="w-[201px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] flex justify-around mt-[60px]">
                    <button className="flex  text-white font-title">Get Started <Image src={arrowIamge} alt="image" className="mt-2 w-[10px] h-[10px] ml-[10px]"  />
                    </button></div>

          </div>
          {/* 2 */}
          <div> <div className="w-[748px] h-[547px] bg-[#C4DEFD] ml-[60px]">

          </div>

</div></div>
        </div>

       

        {/* part 2 */}
        <div className="flex mt-[100px] w-[1480px] h-[661px] ">
            {/* 1 */}
            <div className="w-[710px] h-[661px] ">
                <Image src={RingImage} alt="Image"/>

            </div>

            {/* 2 */}
            <div className="w-[670px] h-[294px] ml-[100px] flex mt-[183.5px]">
                <div className="w-[670px] h-[171px]">
                    <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] font-title">Work together</h2>
                    <p className="w-[670px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[0.02em] mt-[24px] ">With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                        </p>
                        <div  className="w-[186px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] flex justify-around mt-[60px]">
                    <button className="flex  text-white">Try it now <Image src={arrowIamge} alt="image" className="mt-2 w-[10px] h-[10px] ml-[10px]"  />
                    </button></div>

                </div>

            </div>

        </div>
      </div>
    </>
  );
};

export default Feature;
