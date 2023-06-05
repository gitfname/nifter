import Image from "next/image";

export default function TopSellerCard_1({img, username, sells}) {

    return (
        <div className="w-72 select-none cursor-pointer hover:bg-white/5 transition-colors duration-200 p-3 rounded-xl border border-white/25 flex items-center gap-x-3">

            <Image
                width={250}
                height={250}
                alt=""
                src={img}
                className="w-14 h-14 rounded-xl"
            />

            <div>
                <p
                    className="text-base text-white font-normal tracking-wide line-clamp-1"
                >
                    {username}
                </p>

                <p
                    className="text-sm text-white/70 tracking-wide font-light mt-0.5"
                >
                    {sells}
                </p>
            </div>

        </div>
    )
}