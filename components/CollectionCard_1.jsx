import Image from "next/image";

export default function Collectioncard_1({img, items, name}) {

    return (
        <div className="p-0 select-none rounded-xl overflow-hidden border-2 border-white/20">
            <div className="w-96 relative aspect-video">
                <Image
                    width={400}
                    height={400}
                    alt=""
                    src={img}
                    className="w-full aspect-video object-top object-cover"
                />
                <div className="absolute px-4 bottom-0 left-0 w-full h-12 bg-black/50 backdrop-blur-lg z-10 flex items-center justify-between">
                    <p className="text-lg font-normal text-gray-50">
                        {name}
                    </p>

                    <div className="border border-gray-100 rounded-lg py-1.5 px-2.5 grid place-items-center">
                        <p className="text-xs text-gray-100 leading-none font-light tracking-wide">{items} items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}