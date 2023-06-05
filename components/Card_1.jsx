
import Image from "next/image";
import FIllButton from "./Button/FillButton";
import OutlineButton from "./Button/OutlineButton";
import { BsHeart, BsHeartFill } from "react-icons/bs"

export default function Card_1({id, img, creator={username, img}, sells, price, comments, name}) {

    return (
        <div className="p-5 select-none">
            <div className="w-80 relative p-4 rounded-xl bg-[rgb(18,28,48,1)] shadow-lg shadow-black/20">

                <Image
                    width={400}
                    height={400}
                    alt=""
                    src={img}
                    className="w-full mx-auto max-w-[16rem] aspect-square rounded-xl object-center object-cover border border-white/10"
                />

                <BsHeart className="w-4 h-4 fill-red-500 cursor-pointer absolute top-5 right-0 -translate-x-1/2" />

                <Image
                    width={200}
                    height={200}
                    alt=""
                    src={creator.img}
                    className="w-14 h-14 rounded-full border-2 border-white/10 -translate-y-1/2 object-center object-cover translate-x-1/2"
                />

                <div className="w-full -translate-y-3">

                    <div className="flex items-center justify-between">
                        <p className="text-lg text-white font-light">{name}</p>

                        <div className="border border-purple-600 rounded-lg grid place-items-center py-1.5 px-3">
                            <p
                                className="text-xs text-purple-600 font-normal leading-none"
                            >
                                {price}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">

                        <p className="text-xs text-white/50 font-normal">
                            by&nbsp;&nbsp;<span className="text-sm text-cyan-400 cursor-pointer">@{creator.username}</span>
                        </p>

                        <p className="text-sm text-white/60 font-light">
                            {sells} sells
                        </p>

                    </div>

                    <p className="text-sm cursor-pointer w-max text-white/70 tracking-wide font-light mt-3">
                        <span className="text-white/90">{comments}</span> comments
                    </p>

                    <div className="flex items-center mt-5 gap-x-4">

                        <FIllButton
                            text="Buy"
                            bgColor="bg-purple-500"
                            textColor="text-white"
                            className="flex-1 text-xs"
                        />

                        <OutlineButton
                            text="See"
                            borderColor="border-white/80"
                            textColor="text-white/80"
                            className="flex-1 text-xs"
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}