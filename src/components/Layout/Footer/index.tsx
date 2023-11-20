import React from "react";
import Icon from "../../Icons";
import { Link } from "react-router-dom";
import { useGlobalData } from "../../../context";

const Footer = () => {
    const [state]:any = useGlobalData();
    const socialList = state.socialList;
    const navList = state.navList;
    return (
        <footer className="w-full flex flex-col  items-center bg-second border-t-[1px] border-third py-30 xs:px-20">
            <div className="w-full max-w-1440 flex justify-between flex-col gap-30 md:flex-row ">
                <div className="flex flex-col gap-20">
                    <div className="flex gap-10">
                        <Icon icon = 'Logo' size = {32} className="text-purple"/>
                        <h1 className="text-22 font-700">NFT Marketplace</h1>
                    </div>
                    <div className="flex flex-col gap-20">
                        <h3>NFT marketplace for Gatochain Foundation.</h3>
                        <h3>Join our community</h3>
                        <div className="flex gap-10">
                            {socialList.slice(1).map((item:any,idx:number)=>(
                                <Link to = {item.link} key = {idx}
                                className = ""
                                >
                                <Icon icon={item.icon} size = {32} className=" text-third"/>
                                </Link> 
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <h1 className="text-22 font-700">Explore</h1>
                    <div className="flex flex-col gap-20">
                    {navList.map((item:any,idx:number)=>(
                        <Link to={item.link} className="">
                            {item.label}
                        </Link>
                    ))}
                    </div>
                </div>
                <div className="flex flex-col gap-20 ">
                    <h1 className="text-22 font-700">Join our weekly digest</h1>
                    <span>Get exclusive promotions & updates straight <br/> to your inbox.</span>
                    <div className=" flex justify-between bg-white rounded-[20px] xs:w-[60%] md:w-full">
                        <div className="w-full md:w-[60%] p-[12px_16px] md:p-[16px_15px]">
                            <input type="text" placeholder="Enter your email here"
                                className="w-full text-primary outline-none border-none text-16 xs3:text-14 xs2:text-16 "
                            />
                        </div>
                        <button className=" w-full md:w-[40%] px-10 text-16  font-400 tracking-wide bg-purple boder-[1px] border-white whitespace-nowrap rounded-[20px]"
                        >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-third w-full max-w-1440 border-b-[1px] pt-30"/>
            <div className="flex text-left">
                <span>&#169; Gatochain Foundation</span>
            </div>
        </footer>
    )
}
export default Footer;