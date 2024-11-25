
import Image from "next/image";
import logo from "@/app/assets/Logo.png"


const Footer = () => {
    return (
        <>
        <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] pb-[32px] px[220px] bg-[#043873] ">
            <div className="w-[1480px] h-[289px]  mx-auto">
                <div className="w-[1480px] h-[169px] flex ">
                    <div className="w-[295px] h-[169px]  mr-[100px]">
                        <Image src={logo} alt="logo" className="w-[191px] h-[34px]"/>
                        <p className="mt-[15px] w-[240px] h-[120px] font-title font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>


                    </div >
                    {/* 2 */}

                    <div className="mr-[100px] w-[295px] h-[127px] text-white">
                        <ul>
                            <li className="w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-[15px]">Product</li>
                            <li className="w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[15px]">Overview</li>
                            <li className="w-[50px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[15px]">Pricing</li>
                            <li className="w-[117px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[15px]">Customer Stories</li>
                        </ul>

                    </div>

                    {/* 3 */}

                    <div className=" mr-[100px] w-[295px] h-[130px] text-white">
                    <ul>
                            <li className="w-[91px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-[16px]">Resources</li>
                            <li className="w-[33px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[16px]">Blog</li>
                            <li className="w-[128px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[16px]">Guides & tutorials</li>
                            <li className="w-[130px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[16px]">Help center</li>
                        </ul>

                    </div>

                    {/* 4 */}

                    <div className=" mr-[100px] w-[295px] h-[130px] text-white">
                    <ul>
                            <li className="w-838px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-[16px]">Company</li>
                            <li className="w-[66px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[16px]">About us</li>
                            <li className="w-[62px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[16px]">Careers</li>
                            <li className="w-[99px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] mb-[16px]">Media kit</li>
                        </ul>

                    </div>
                    
                </div>


            </div>

        </div>
        </>
    )
}

export default Footer;