import React from "react";
import Icon from "../../components/Icons";
import Nftcard from "../../components/Nftcard";
import CreatorCard from "../../components/CreatorCard";
import Work from "../../components/Work";
import Browse from "../../components/Browse";
import HeroImg from '../../assets/images/hero.png';
import CreatorImg1 from '../../assets/images/creator1.png';
import CreatorImg2 from '../../assets/images/creator2.png'
import CreatorImg3 from '../../assets/images/creator3.png'
import Art1 from '../../assets/images/art1.png'
import Art2 from '../../assets/images/art2.png'
import Art3 from '../../assets/images/art3.png'
import Art4 from '../../assets/images/art4.png'
import Art8 from '../../assets/images/art8.png'
import Nft1 from '../../assets/images/nft1.png'
import Nft2 from '../../assets/images/nft2.png'
import Nft3 from '../../assets/images/nft3.png'
import Wallet from '../../assets/images/wallet.png'
import Collection from '../../assets/images/collection.png'
import Earning from '../../assets/images/earning.png'
import Contact from '../../assets/images/contact.png'

import { FreeMode, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './home.scss'
import '../../assets/style/global.scss'

const Home = () => {
    const heroMmount = [
        { count: '240k+', label: 'Total size' },
        { count: '100k+', label: 'Auctions' },
        { count: '240k+', label: 'Artists' }
    ];
    const heroDetails = {
        title: 'Space Waliking',
        name: 'Animakid',
    }
    const trendings = [
        {
            art: Art1,
            creator: {
                avatar: CreatorImg1,
                name: 'MrFox'
            },
            title: 'DSGN Animals',
            arts: [Art8, Art4, '']
        },
        {
            art: Art2,
            creator: {
                avatar: CreatorImg2,
                name: 'Shroomie'
            },
            title: 'Magic Mushrooms',
            arts: [Art8, Art4, '']
        },
        {
            art: Art3,
            creator: {
                avatar: CreatorImg3,
                name: 'BeKind2Robots'
            },
            title: 'Disco Machines',
            arts: [Art8, Art4, '']
        }
    ]

    const creators = [
        { avatar: CreatorImg1, author: 'Keepitreal', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg2, author: 'DigiLab', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg3, author: 'GravityOne', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg1, author: 'Juanie', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg2, author: 'BlueWhale', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg3, author: 'Mr Fox', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg1, author: 'Shroomie', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg2, author: 'Robotica', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg3, author: 'RustyRobot', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg1, author: 'Animakid', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg2, author: 'Dotgu', price: 34.53, currency: 'ETH' },
        { avatar: CreatorImg3, author: 'Ghiblier', price: 34.53, currency: 'ETH' }
    ]
    const browses = [
        { art: Art1, icon: 'Brush', name: 'Art' },
        { art: Art2, icon: 'Swatches', name: 'Collectibles' },
        { art: Art3, icon: 'Music', name: 'Music' },
        { art: Art1, icon: 'Camera', name: 'Photography' },
        { art: Art2, icon: 'Video', name: 'Video' },
        { art: Art3, icon: 'Magic', name: 'Utility' },
        { art: Art1, icon: 'BasketBall', name: 'Sport' },
        { art: Art2, icon: 'Planet', name: 'Virtual Worlds' }
    ];

    const nfts = [
        {
            art: Nft1,
            name: 'Distant Galaxy',
            creator: {
                avatar: CreatorImg1,
                author: 'MrFox'
            },
            price: 1.63,
            currency: 'ETH',
            highestBid: 0.33,
            bidCurrency: 'wETH'
        },
        {
            art: Nft2,
            name: 'Life On Edena',
            creator: {
                avatar: CreatorImg2,
                author: 'DigiLab'
            },
            price: 1.63,
            currency: 'ETH',
            highestBid: 0.33,
            bidCurrency: 'wETH'
        },
        {
            art: Nft3,
            name: 'AstroFiction',
            creator: {
                avatar: CreatorImg3,
                author: 'BlueWhale'
            },
            price: 1.63,
            currency: 'ETH',
            highestBid: 0.33,
            bidCurrency: 'wETH'
        }
    ];

    const works = [
        {
            icon: Wallet,
            title: 'Setup Your wallet',
            description:
                'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
        },
        {
            icon: Collection,
            title: 'Create Collection',
            description: 'Upload your work and setup your collection. Add a description, social links and floor price.'
        },
        {
            icon: Earning,
            title: 'Start Earning',
            description:
                'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
        }
    ]

    return (
        <>
            <section>
                <div className="section-container max-w-[1440px] flex flex-col md:flex-row gap-20 sm:gap-30 lg:gap-200">
                    <div className="flex flex-col gap-20">
                        <span className="font-700  text-40 md:text-50 xl:text-65  max-w-600 x12:max-w-800">Discover digital art & Collect NFTs</span>
                        <span className="text-[25px] font-500">NFT marketplace for whitelabel solution </span>
                        <div className="hidden md:flex flex-col gap-20">
                            <button className=" w-full max-w-210 flex justify-between items-center gap-1 rounded-[20px] bg-purple px-50 py-20">
                                <Icon icon='Rocket' size={20} />
                                <span className="text-white text-[15px] font-500">Get started</span>
                            </button>
                            <div className="w-full flex justify-between">
                                {heroMmount.map((item, idx) => (
                                    <div key={idx} className="">
                                        <p className="text-[30px] font-700 ">{item.count}</p>
                                        <p className="text-[20px] font-500">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Nftcard
                        imgSrc={HeroImg} size={{ width: '', height: '' }} title={heroDetails.title} name={heroDetails.name} avatarSrc={CreatorImg1}
                    />
                    <div className="flex md:hidden flex-col gap-20">
                        <button className=" w-full  flex justify-center items-center gap-1 rounded-[20px] bg-purple px-50 py-20">
                            <Icon icon='Rocket' size={20} />
                            <span className="text-white text-[15px] font-500">Get started</span>
                        </button>
                        <div className="w-full flex justify-between">
                            {heroMmount.map((item, idx) => (
                                <div key={idx} className="">
                                    <p className="text-[30px] font-700 ">{item.count}</p>
                                    <p className="text-[20px] font-500">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="section-container w-full max-w-[1440px] flex flex-col gap-40 md:gap-60">
                    <div className="flex flex-col gap-20">
                        <h3 className="text-40 font-700">Trending Collection</h3>
                        <span className="text-14 sm:text-16 md:text-18 xl:text-22 font-400">
                            Checkout our weekly updated trending collection.
                        </span>
                    </div>
                    <Swiper pagination={{ clickable: true }}
                        modules={[FreeMode, Autoplay, Pagination]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            840: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1240: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        className="mySwiper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-30"
                    >
                        {trendings.map((item: any, idx: number) => (
                            <SwiperSlide
                                key={idx}
                                style={{
                                    gap: '15px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <img src={item.art}
                                    alt={`${idx}`}
                                    className="w-full rounded-[20px]"
                                />
                                <div className="w-full grid grid-cols-3 gap-15">
                                    {item.arts.map((item: any, i: number) => (
                                        <div key={i} className="flex flex-col items-center justify-center rounded-[20px] bg-purple">
                                            {i < 2 ? (
                                                <img src={item} alt="" className="rounded-[20px]" />
                                            ) : (
                                                <span className="text-20 font-semibold">1025+</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-10">
                                    <p className="text-16 xs2:text-18 xs:text-22 font-600">{item.title}</p>
                                    <div className="flex items-center gap-12">
                                        <img src={item.creator.avatar} alt="" width='24px' />
                                        <span className="text-14 sm:text-16">{item.creator.name}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section>
                <div className="section-container flex flex-col gap-40 md:gap-60">
                    <div className="flex flex-col gap-20">
                        <h3 className="text-40 font-700">Top creators</h3>
                        <div className="flex justify-between">
                            <span className="text-14 sm:text-16 md:text-18 xl:text-22 font-400">Checkout Top Rated Creators on the NFT Marketplace</span>
                            <button className="w-250 hidden gap-10 items-center justify-center border-[2px] border-purple  hover:text-white text-purple bg-second hover:bg-purple  px-40 py-20 md:flex rounded-[20px]">
                                <Icon icon="Rocket" size={20} />
                                <span className="text-white">
                                    View Ranking
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-30 ">
                        {creators.map((item: any, idx: number) => (
                            <CreatorCard src={item.avatar} author={item.author} price={item.price} currency={item.currency} key={idx} index={idx + 1} />
                        ))}
                    </div>
                    <button className="flex md:hidden gap-10 items-center justify-center border-[2px] border-purple hover:text-white text-purple bg-second hover:bg-purple  px-40 py-20 rounded-[20px]">
                        <Icon icon="Rocket" size={20} />
                        <span className="text-white">
                            View Ranking
                        </span>
                    </button>
                </div>
            </section>
            <section>
                <div className="section-container flex flex-col gap-40 md:gap-60">
                    <h3 className="text-40 font-700">Browse Categories</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-30">
                        {browses.map((item: any, idx: number) => (
                            <Browse art={item.art} icon={item.icon} name={item.name} key={idx} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="section-container flex flex-col gap-40 md:gap-60">
                    <div className="flex flex-col gap-20">
                        <h3 className="text-40 font-700" >Discover More NFTs</h3>
                        <div className="flex justify-between">
                            <span className="text-14 sm:text-16 md:text-18 xl:text-22 font-400">Explore new trending NFTs</span>
                            <button className="w-250 hidden gap-10 items-center justify-center bg-second hover:bg-purple text-purple hover:text-white  px-40 py-20 md:flex rounded-[20px] border-purple border-[2px]">
                                <Icon icon="Eye" size={20} />
                                <span className="text-white">
                                    See All
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30">
                        {nfts.map((item: any, idx: number) => (
                            <Nftcard key={idx} imgSrc={item.art} title={item.name} avatarSrc={item.creator.avatar} name={item.creator.author} price={`${item.price} ${item.currency}`} bid={`${item.highestBid} ${item.bidCurrency}`} />
                        ))}
                    </div>
                    <button className="w-full flex sm:hidden gap-10 items-center justify-center bg-purple  px-40 py-20  rounded-[20px]">
                        <Icon icon="Eye" size={20} />
                        <span>
                            See All
                        </span>
                    </button>
                </div>
            </section>
            <section className="special-section h-500 sm:h-50vh md:h-60vh lg:h-90vh">
                <section className="section-container flex">
                    <div className="w-full flex justify-center">
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-10 w-full">
                            <div className="flex flex-col items-center sm:items-start gap-30">
                                <div className="flex gap-10 bg-second rounded-[20px] py-5 w-150 justify-center items-center">
                                    <img src={CreatorImg1} alt="" width={30} />
                                    <span className="text-14 xs:text-16 font-600">Shroomie</span>
                                </div>
                                <h1 className="text-30 font-500 md:text-50 md:font-700">Magic Mushrooms</h1>
                                <button className="w-full sm:w-250 hidden sm:flex bg-white justify-center gap-12 items-center text-primary text-16 font-600 rounded-[20px] py-14 sm:py-18 whitespace-nowrap hover:bg-second hover:text-white">
                                    <Icon icon="Eye" size={20} /> See NFT
                                </button>
                            </div>
                            <div className=" w-full flex flex-col gap-10 items-center sm:items-start xs:w-min bg-second/50 rounded-[20px] p-20  ">
                                <h3>Auction ends in</h3>
                                <div className="flex gap-20 text-40 font-600">
                                    <span>59</span>
                                    <span>:</span>
                                    <span>59</span>
                                    <span>:</span>
                                    <span>59</span>
                                </div>
                                <div className="flex gap-40">
                                    <span>Hours</span>
                                    <span>Minutes</span>
                                    <span>Seconds</span>


                                </div>
                            </div>
                            <button className="w-full flex sm:hidden bg-white justify-center gap-12 items-center text-primary text-16 font-600 rounded-[20px] py-14 sm:py-18 whitespace-nowrap hover:bg-second hover:text-white">
                                <Icon icon="Eye" size={20} /> See NFT
                            </button>
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <div className="section-container flex flex-col gap-40 md:gap-60 ">
                    <div className="flex flex-col gap-20">
                        <h2 className="text-40 font-700">How it works</h2>
                        <h3 className="text-14 sm:text-16 md:text-18 xl:text-22 font-400">Find out how to get started</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30">
                        {works.map((i, k) => (
                            <Work key={k} icon={i.icon} title={i.title} description={i.description} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="section-container flex flex-col md:flex-row gap-30 md:gap-40 lg:gap-80 items-center  bg-second rounded-[20px] p-60">
                    <div className="w-full md:w-[50%]">
                        <img src={Contact} className="w-full" />
                    </div>
                    <div className="flex flex-col gap-30">
                        <h2 className="text-40 font-700">Join our weekly digest</h2>
                        <h3 className="text-20 font-600">Get exclusive promotions & updates straight to your inbox.</h3>
                        <div className=" flex justify-between bg-white rounded-[20px] md:w-[80%]">
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
            </section>
        </>
    )
}

export default Home
