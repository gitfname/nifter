
import Image from "next/image"
import FIllButton from "./Button/FillButton"
import OutlineButton from "./Button/OutlineButton"

export default function Hero_1() {
    return (
        <div className="w-full grid max-lg:pt-28 grid-cols-1 lg:grid-cols-2 place-items-center relative z-10 pt-14 px-10 overflow-hidden">

            <div className="w-44 h-44 bg-purple-500/30 rounded-full absolute top-28 left-2 blur-3xl -z-10"></div>

            <div className="pb-10">
                <p className="text-white text-5xl font-semibold tracking-wide flex flex-col gap-y-2.5">
                    <span>Discover,</span>
                    <span>Collect and sell</span>
                    <span>dope NFTs</span>
                </p>

                <p className="text-white/80 mt-6 text-sm font-normal light tracking-wide max-w-[40ch] leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident commodi nemo.
                </p>

                <div className="mt-6 flex items-center gap-x-2.5">

                    <FIllButton
                        text="Explore"
                        bgColor="bg-purple-500"
                    />

                    <OutlineButton
                        text="Create"
                    />
                    
                </div>

                <div className="flex max-sm:flex-row flex-col max-sm:items-center max-sm:justify-evenly gap-4 mt-10 w-full">
                    <div>
                        <p className="text-3xl text-white font-semibold">42k +</p>
                        <p className="text-sm text-white/60 font-light mt-0.5 tracking-wide">User Active</p>
                    </div>

                    <div>
                        <p className="text-3xl text-white font-semibold">8k +</p>
                        <p className="text-sm text-white/60 font-light mt-0.5 tracking-wide">Art Works</p>
                    </div>

                    <div>
                        <p className="text-3xl text-white font-semibold">2k +</p>
                        <p className="text-sm text-white/60 font-light mt-0.5 tracking-wide">Artist</p>
                    </div>
                </div>

            </div>

            <div className="relative w-full h-full flex items-end max-lg:hidden">
                <div className="w-52 h-52 bg-purple-500/50 rounded-full absolute bottom-1 -left-4 blur-3xl -z-10"></div>

                <Image
                    width={440}
                    height={550}
                    alt=""
                    src="/bg.png"
                    className="w-auto h-auto object-center object-cover"
                />

            </div>



        </div>
    )
}