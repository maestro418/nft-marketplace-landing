import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../../Icons";
import Menu from "./Menu";
import { useGlobalData } from "../../../context";
// const navList  = [
//     {
//         label:'Marketplace',
//         link:'/marketplace'
//     },
//     {
//         label:'Ranking',
//         link:'/ranking'
//     },
//     {
//         label:'Connect a wallet',
//         link:'/wallet'
//     },
// ]
const Header = () => {
    const [state]: any = useGlobalData();
    const location = useLocation();
    const navigate = useNavigate();
    const [scrollEvent, setScrollEvent] = useState(false)
    const [mobile, setMobile] = useState(false);

    const navList = state.navList;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const getScrollPosition = () => window.scrollY;
    const getWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    useEffect(() => {
        const setResponsive = () => {
            if (getWidth() < 1140) {
                setMobile(true);
            } else {
                setMobile(false)
                setMenuOpen(false)
            }
        }
        setResponsive();
        const setScrollEventY = () => {
            return getScrollPosition() > 50 ? setScrollEvent(true) : setScrollEvent(false)
        }
        setScrollEventY()
        window.addEventListener('scroll', setScrollEventY);
        window.addEventListener('resize', setResponsive);
        return () => {
            window.removeEventListener('resize', setResponsive);
            window.removeEventListener('scroll', setScrollEventY);
        };
    }, [])
    return (
        <>
            <header className={`fixed w-full flex top-0 gap-20 justify-between items-center py-20 px-14 xs:px-20 sm:px-30 md:px-20 lg:px-40 xl:px-50 z-[999] ${scrollEvent && 'bg-second border-b-[1px] border-third py-14 transition-all duration-[0.5]'}`}>
                <Link to='/' className="flex gap-10 text-22 font-700">
                    <Icon icon="Logo" size={32} className="text-purple" />
                    <h1>NFT Marketplace</h1>
                </Link>
                {mobile ? (
                    <button onClick={() => setMenuOpen(true)}>
                        <Icon icon="Hamburger" size={24} />

                        
                    </button>
                ) : (
                    <div className="flex gap-8 lg:gap-60 items-center text-white text-16 font-600">
                        {navList.map((item: any, idx: number) => (
                            <Link to={item.link} key={idx} className={`hover:text-purple cursor-pointer font-600 text-16 items-center ${location.pathname==item.link && ' text-purple font-600'}`}>
                                {item.label}
                            </Link>
                        ))}
                        <button className="flex gap-12 justify-center items-center py-12 px-20 lg:py-14 lg:px-30 rounded-[20px] bg-purple">
                            <Icon icon="User" size={20} />
                            <span>Sign up</span>
                        </button>
                    </div>
                )}
                <Menu open={menuOpen} setOpen={setMenuOpen} navList={navList} />
            </header>
        </>
    )
}
export default Header;







