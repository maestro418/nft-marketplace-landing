import React from "react";

interface WorkProps {
    icon: string
    title: string
    description: string
}
const Work = (props: WorkProps) => {
    return (
        <div className="flex flex-col gap-20 items-center justify-center bg-second rounded-[20px] px-20 py-30">
            <div>
                <img src={props.icon} width={250} alt="No image" />
            </div>
            <div className="flex flex-col gap-10 items-center">
                <h2 className="text-25 font-600">{props.title}</h2>
                <h3 className="text-center text-15 font-500">
                    {props.description}
                </h3>
            </div>
        </div>
    )
}

export default Work