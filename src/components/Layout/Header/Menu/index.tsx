import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../../Icons";
import CreatorImg from '../../../../assets/images/creator2.png'
const Menu = ({ open, setOpen, navList }: any) => {

    const auth = true;
    const location = useLocation();
    return (
        <>
            {open && (
                <div>
                    <div onClick={() => setOpen(false)} className="fixed inset-0 bg-primary bg-opacity-80 transition-opacity z-[999]"
                    />
                    <menu className="fixed h-full w-280 xs:w-320 top-0 left-0 bg-black opacity-95 z-[1000] overflow-x-hidden">
                        <div className="h-106 flex items-center">
                            <div className="flex items-center p-[20px] gap-[20px]">
                                <img src={CreatorImg} alt="Logo" className="max-w-68" />
                                <div className="text-white text-[16px]">
                                    <p className="font-400">Hello,</p>
                                    <p className="font-700">DigiLab</p>
                                </div>
                            </div>
                            <span onClick={() => setOpen(false)} className=" absolute top-2 right-14 text-28 text-white cursor-pointer">
                                &times;</span>
                        </div>
                        <div className="flex flex-col justify-between p-20 h-[calc(100%-120px)]">
                            <div className="flex flex-col gap-10 text-18 font-400">
                                {navList.map((item: any, idx: number) => (
                                    <Link to={item.link} key={idx}
                                        className={`hover:text-purple active:hover:text-purple ${location.pathname === item.link && 'text-purple font-600'}`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-10 ">
                                {auth ? (
                                    <button className="w-full flex gap-2 bg-purple px-20 py-10 items-center justify-center rounded-[20px]">
                                        <Icon icon="User" size={20} />
                                        <span>Sign up</span>
                                    </button>
                                ) : (
                                    <div>
                                        Sign out
                                    </div>
                                )}
                            </div>
                        </div>
                    </menu>
                </div>
            )
            }
        </>
    )
}
export default Menu;