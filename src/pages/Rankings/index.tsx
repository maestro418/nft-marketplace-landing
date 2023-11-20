import React from "react";
import CreatorImg1 from '../../assets/images/creator1.png';
import CreatorImg2 from '../../assets/images/creator2.png'
import CreatorImg3 from '../../assets/images/creator3.png'
import Nft1 from '../../assets/images/nft1.png'
import Nft2 from '../../assets/images/nft2.png';
import Nft3 from '../../assets/images/nft3.png';
import Nftcard from "../../components/Nftcard";
import Icon from "../../components/Icons";
const Rankings = () => {
    const tags = [
        'ANIMATION',
        'ILLUSTRATION',
        'MOON',
        'MOON'
    ]

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
        },
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
        },
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
    return (
        <>
            <div className="bg-nft-container" />

            <section className="my-40">
                <div className='w-full flex flex-row justify-between md:gap-30 lg:gap-50'>
                    <div className="flex flex-col gap-30 md:w-[55%]">
                        <div className="flex flex-col gap-10">
                            <h2>The Orbitians</h2>

                            <p className='text-third text-16 xs:text-18 md:text-22 font-400'>
                                Minted on Sep 30, 2022
                            </p>
                        </div>

                        <div className="SpaceMono w-full xs:w-min h-min flex md:hidden flex-col items-center sm:items-start gap-20 bg-second/50 rounded-[20px] p-14 xs:p-20 md:p-30">
                            <span className='text-10 xs:text-12 font-400'>Auction ends in:</span>

                            <div className="flex gap-10 text-18 xs2:text-24 xs:text-28 sm:text-32 md:text-38 font-700">
                                <div className='flex flex-col items-center'>
                                    <p className='flex items-start'>59</p>
                                    <span className='text-10 xs:text-12 font-400'>Hours</span>
                                </div>

                                <p>:</p>

                                <div className='flex flex-col items-center'>
                                    <p className='flex items-start'>59</p>
                                    <span className='text-10 xs:text-12 font-400'>Minutes</span>
                                </div>

                                <p>:</p>

                                <div className='flex flex-col items-center'>
                                    <p className='flex items-start'>59</p>
                                    <span className='text-10 xs:text-12 font-400'>Seconds</span>
                                </div>
                            </div>

                            <button className="primary-btn w-full">Place Bid</button>
                        </div>

                        <div className="flex flex-col gap-10">
                            <p className='SpaceMono text-third text-16 xs:text-18 md:text-22 font-700'>
                                Created By
                            </p>

                            <div className='flex items-center gap-12'>
                                <img src={CreatorImg1} width="24px" alt="creator" />
                                <p className='text-white font-500'>Orbitian</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <p className='SpaceMono text-third text-16 xs:text-18 md:text-22 font-700'>
                                Description
                            </p>

                            <div className='text-white/50 text-16 xs:text-18 md:text-22 font-400'>
                                The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, There are all sorts of
                                beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a
                                metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful
                                race, but they have been at war with a group of invaders for many generations. The invaders are called
                                Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to
                                be. Upside-Downs believe that they will be able to win this war if they could only get an eye into
                                Orbitian territory, so they've taken to make human beings their target.
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <p className='SpaceMono text-third text-16 xs:text-18 md:text-22 font-700'>
                                Details
                            </p>

                            <div className='flex flex-col gap-10'>
                                <div className='flex items-center gap-4'>
                                    <Icon icon="Website" size={32} className="text-third" />
                                    <p className='text-white/50 text-16 xs:text-18 md:text-22 font-400'>
                                        View on Etherscan
                                    </p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <Icon icon="Website" size={32} className="text-third" />
                                    <p className='text-white/50 text-16 xs:text-18 md:text-22 font-400'>
                                        View Original
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <p className='SpaceMono text-third text-16 xs:text-18 md:text-22 font-700'>
                                Tags
                            </p>

                            <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
                                {tags.map((text: string, key: number) => (
                                    <div key={key} className='w-min bg-second rounded-[20px] p-[10px_30px]'>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="SpaceMono w-full xs:w-min h-min hidden md:flex flex-col items-center sm:items-start gap-20 bg-second/50 rounded-[20px] p-14 xs:p-20 md:p-30">
                        <span className='text-10 xs:text-12 font-400'>
                            Auction ends in:
                        </span>

                        <div className="flex gap-10 text-18 xs2:text-24 xs:text-28 sm:text-32 md:text-38 font-700">
                            <div className='flex flex-col items-center'>
                                <p className='flex items-start'>59</p>
                                <span className='text-10 xs:text-12 font-400'>Hours</span>
                            </div>

                            <p>:</p>

                            <div className='flex flex-col items-center'>
                                <p className='flex items-start'>59</p>
                                <span className='text-10 xs:text-12 font-400'>Minutes</span>
                            </div>

                            <p>:</p>

                            <div className='flex flex-col items-center'>
                                <p className='flex items-start'>59</p>
                                <span className='text-10 xs:text-12 font-400'>Seconds</span>
                            </div>
                        </div>

                        <button className="primary-btn w-full">Place Bid</button>
                    </div>
                </div>
            </section>

            <section>
                <div className='w-full flex flex-col md:gap-30 lg:gap-50'>
                    <div className="flex justify-between gap-[100px] items-end">
                        <h3>More from this artist</h3>

                        <button className="outline-btn w-full sm:w-[250px] hidden sm:flex">
                            <Icon icon="Arrow" size={20} />
                            Go To Artist Page
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-30">
                        {nfts.map((item: any, idx: number) => (
                            <Nftcard key={idx} imgSrc={item.art} title={item.name} avatarSrc={item.creator.avatar} name={item.creator.author} price={`${item.price} ${item.currency}`} bid={`${item.highestBid} ${item.bidCurrency}`} />
                        ))}
                    </div>

                    <button className="outline-btn w-full sm:w-[250px] flex sm:hidden">
                        <Icon icon="Arrow" size={20} />
                        Go To Artist Page
                    </button>
                </div>
            </section>
        </>
    )
}

export default Rankings