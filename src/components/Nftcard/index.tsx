import CreatorImg from '../../assets/images/creator1.png'


const Nftcard = (props: any) => {

    const imgSrc = props.imgSrc;
    const size = props.size;
    const title = props.title;
    const avatarSrc = props.avatarSrc;
    const name = props.name;
    const price = props.price;
    const bid = props.bid;
    const commentList = props.commentList;
    return (
        <div className="flex flex-col">
            <div className='w-full '>
                <img src={imgSrc} className='w-full' />
            </div>
            <div className="flex">
                {commentList && (
                    commentList.map((item: any, idx: number) => (
                        <div key={idx}>
                            <img src={item.src} width={item.size.width} height={item.size.height} className="" />
                        </div>
                    ))
                )}
            </div>
            <div className={`flex flex-col gap-20 py-20 px-30 ${props.colorset?'bg-primary':'bg-second'}  rounded-b-[20px] `}>
                <h1 className="text-[20px] font-700">{title}</h1>
                <div className="flex gap-10">
                    <img src={avatarSrc} width={30} alt="No imgae"/>
                    <h2>{name}</h2>
                </div>
                {price && (
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-10">
                            <p className='text-16 text-third'>Price:</p>
                            <p className='text-20'>{price}</p>
                        </div>
                        <div className="flex flex-col gap-10">
                            <p className='text-16 text-third'>Highest Bid:</p>
                            <p className='text-20'>{bid}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Nftcard;