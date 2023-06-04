
"use client"

export default function FIllButton({ text, onClick, bgColor="", textColor="text-white" }) {

    const handleOnCLick = e => {
        typeof onClick === "function" && onClick(e)
    }
    
    return (
        <button
            onClick={handleOnCLick}
            className={`py-2 px-7 active:scale-95 transition-transform duration-300 shadow-lg shadow-purple-500/20
            rounded-lg text-sm font-normal ${[bgColor, textColor].join(" ")}`}
        >
            {text}
        </button>
    )
}