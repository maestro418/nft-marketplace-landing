import React from "react";
import Bg1 from '../../assets/images/bg1.png'
import CreatorImg1 from '../../assets/images/creator1.png';
import CreatorImg2 from '../../assets/images/creator2.png'
import CreatorImg3 from '../../assets/images/creator3.png'
import Nft1 from '../../assets/images/nft1.png'
import Nft2 from '../../assets/images/nft2.png';
import Nft3 from '../../assets/images/nft3.png';
import Nftcard from "../../components/Nftcard";
import Icon from "../../components/Icons";
const Marketplace = () => {
    const [tab, setTab] = React.useState(false);
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
            <div className="relative">
                
                <div className="flex justify-center w-full my-40 md:my-80 px-20 xs:px-4vw">
                    <div className='flex flex-col gap-30 w-full max-w-1440'>
                        <div className="flex flex-col gap-10">
                            <h2 className="text-50 font-700">Browse Marketplace</h2>

                            <p className='text-16 xs:text-18 md:text-22 font-400'>
                                Browse through more than 50k NFTs on the NFT Marketplace.
                            </p>
                        </div>

                        <div className="flex items-center gap-20 border-[1px] border-second rounded-[20px] p-[12px_20px]">
                            <input type="text"
                                placeholder="Search your favourite NFTs"
                                className='border-none outline-none w-full bg-transparent text-16 text-third'
                            />
                            <Icon icon="Search" size={24} />
                        </div>
                    </div>
                </div>

                <div className="absolute w-full left-0 border-b-[1px] border-second" />

                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center gap-30 w-full px-20 xs:px-4vw">
                        <div className='flex flex-col items-center gap-30 w-full max-w-1440'>
                            <div className='grid grid-cols-2 w-full items-center'>
                                <button onClick={() => setTab(false)} className="p-10">
                                    NFTs <span className="px-10 py-5 bg-third rounded-[20px]">302</span>
                                </button>
                                <button onClick={() => setTab(true)} className="p-10">
                                    Collections <span className="px-10 py-5 bg-third rounded-[20px]">67</span>
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center bg-second w-full px-20 xs:px-4vw">
                        <div className='flex flex-col items-center gap-30 w-full max-w-1440'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-30 py-60'>
                                {nfts.map((item: any, idx: number) => (
                                    <Nftcard key={idx} imgSrc={item.art} title={item.name} avatarSrc={item.creator.avatar} name={item.creator.author} price={`${item.price} ${item.currency}`} bid={`${item.highestBid} ${item.bidCurrency}`} colorset ={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Marketplace