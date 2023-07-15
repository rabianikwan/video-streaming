import React from "react";
import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";


const Billboard = () => {
    const { data } = useBillboard();
    return(
        <div className="relative h-[56.25vw]">
            <video
                className="
                w-full
                h-[56.25vw]
                object-cover
                brightness-[60%]
                transition"
            autoPlay muted loop
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}>

            </video>

            <div className="absolute top-[30%]
            md:top-[40%]
            ml-4 md:ml-16">
                <p className="text-white text-2xl
                md:text-5xl h-full sm:text-3xl
                lg:text-6xl font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="text-white
                text-[1rem]
                md:text-lg
                w-full
                md:mt-8
                mt-3
                md:w-[70%]
                lg:w-[50%]
                drop-shadow-2xl">
                    {data?.description}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-2">
                    <button className="
                    text-white bg-white bg-opacity-30 rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex-row
                    flex
                    items-center
                    hover:bg-opacity-20
                    transition">
                        < AiOutlineInfoCircle className="mr-1"/>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Billboard;
