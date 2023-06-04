
"use client"

export default function OutlineButton({ text, onClick, textColor="text-white", borderColor="border-white/50" }) {

    const handleOnCLick = e => {
        typeof onClick === "function" && onClick(e)
    }

    return (
        <button
            onClickCapture={handleOnCLick}
            className={`py-2 px-7 active:scale-95 transition-transform duration-300 border ${borderColor} rounded-lg border-gray-50 ${textColor
            } bg-transparent text-sm font-normal`}
        >
            {text}
        </button>
    )
}