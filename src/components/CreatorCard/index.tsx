import React from "react";

const CreatorCard = (props: any) => {
    return (
        <div className="flex md:flex-col bg-second rounded-[20px] relative justify-center items-center gap-20 py-20 xs3:flex-row xs3:justify-start xs3:px-30">
            <span className="absolute top-20 left-20 justify-center items-center px-10 py-5 rounded-[30px]  bg-primary text-third ">
                {props.index}
            </span>
            <img src={props.src} width={100} />
            <div className="flex flex-col gap-20 xs3:gap-10 items-center    ">
                <p className="text-22 font-700">{props.author}</p>
                <span><span className="text-third">Total Sales:</span> {props.price} {props.currency}</span>
            </div>

        </div>
    )
}

export default CreatorCard;

