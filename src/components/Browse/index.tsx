import React from "react";
import Icon from "../Icons";
const Browse = (props: any) => {
    return (
        <div className="rounded-[20px]">
            <div className="flex justify-center items-center relative">
                <div className="overlay absolute top-0 right-0 bottom-0 left-0 z-0 rounded-t-[20px] border-second" />

                <Icon icon={props.icon} size={100}
                    className="absolute z-[1]"
                />

                <img alt=''
                    src={props.art}
                    width="100%"
                    className='w-full rounded-t-[20px] opacity-30 blur-sm'
                />
            </div>

            <div className="bg-second rounded-b-[20px] p-[14px_14px] xs:p-[14px_20px] sm:p-[20px_30px]">
                <p className='text-14 sm:text-18 xl:text-22 font-600'>
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default Browse;