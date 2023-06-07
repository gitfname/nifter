
"use client"

export default function SectionGroup_1({ left=null, right=null, className="", children, hasSeach=false, onSearchValueChange }) {

    const handleOnSearchValueChagne = e => {
        typeof onSearchValueChange === "function" && onSearchValueChange(e.target.value)
    }

    return (
        <div
            className={"w-full " + className}
        >

            <div className="flex items-center justify-between gap-x-4 mb-8">

                {
                    typeof left === "string"
                    ?
                        <p
                            className="text-2xl flex-shrink-0 font-semibold tracking-wide text-white"
                        >
                            {left}
                        </p>
                    :
                        left
                }

                {
                    hasSeach
                    ?
                        <div className="w-6/12 md:w-full max-w-xs relative">
                            <input
                                onChange={handleOnSearchValueChagne}
                                className="w-full border border-white/20 rounded-xl p-3 text-sm tracking-wide
                                text-white placeholder-white/60 bg-transparent/10 focus:outline-none"
                                placeholder="Search Top Seller..."
                            />
                        </div>
                    :
                        typeof right === "string"
                        ?
                            <p
                                className="text-white/80 flex-shrink-0 text-sm tracking-wide font-light"
                            >
                                {right}
                            </p>
                        :
                            right
                }

            </div>

            {children}

        </div>
    )
}