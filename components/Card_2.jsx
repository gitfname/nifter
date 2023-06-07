import Image from "next/image";
import { BsHeart } from "react-icons/bs";

export default function Card_2({img, name, creator={username:""}, likes, price}) {
    return (
        <div className="w-72 p-5">
            <div className="select-none rounded-xl overflow-hidden relative bg-purple-700/5 p-1">
                <div className="w-48 h-48 -z-10 bg-purple-800/20 rounded-full absolute -bottom-10 -right-10 blur-xl"></div>
                <Image
                    width={400}
                    height={400}
                    alt=""
                    src={img}
                    className="w-full aspect-square rounded-xl rounded-b-sm"
                />

                <div className="p-3">
                    <div className="flex items-center justify-between">

                        <p className="text-white tracking-wide text-base md:text-sm font-medium">{name}</p>

                        <div className="border border-purple-600 rounded-md grid place-items-center py-1 px-2">
                            <p
                                className="text-xs text-purple-500 font-semibold leading-none"
                            >
                                {price}
                            </p>
                        </div>

                    </div>

                    <p className="text-white/50 text-sm md:text-xs tracking-wide mt-3">
                        by&nbsp;
                        <span className="text-white/90 font-medium cursor-pointer">
                            {creator.username}
                        </span>
                    </p>

                    <div className="mt-4 flex items-center justify-end gap-x-2">

                        <BsHeart className="w-4 h-4 fill-white" />
                        <p className="text-white text-sm font-normal">{likes}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}