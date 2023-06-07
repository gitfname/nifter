import Image from "next/image";
import FIllButton from "./Button/FillButton";

export default function Banner_1({text, subtext, img}) {

    return (
        <div className="p-1 bg-purple-500/30 rounded-2xl w-full">
            <div className="bg-gradient-to-b py-6 px-4 sm:px-12 from-purple-600 to-purple-800 w-full h-full place-items-center rounded-2xl grid grid-cols-1 md:grid-cols-[65%_35%]">
                <div className="flex flex-col gap-y-5">
                    <p className="text-2xl text-white font-medium">{text}</p>
                    <p className="text-white/70 tracking-wide text-sm font-light leading-5">
                        {subtext}
                    </p>
                    <div className="border border-white/40 relative w-full bg-transparent/25 rounded-3xl overflow-hidden">
                        <input
                            type="text"
                            className="w-full p-2.5 px-5 pr-36 text-white text-sm tracking-wide font-normal
                            placeholder-white/60 bg-transparent focus:outline-none"
                            placeholder="Enter your email"
                            maxLength={70}
                        />
                        <FIllButton
                            className="rounded-3xl absolute top-0 right-0 h-full !font-medium"
                            text="Get started"
                            textColor="text-purple-500"
                            bgColor="bg-white"
                        />
                    </div>
                </div>

                <Image
                    width={500}
                    height={500}
                    alt=""
                    src={img}
                    className="w-72 h-auto object-center object-cover"
                />
            </div>
        </div>
    )
}