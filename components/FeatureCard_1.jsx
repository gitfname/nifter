
export default function FeatureCard_1({icon, text, subtext}) {

    return (
        <div className="relative z-10">
            <div className="absolute rounded-3xl -top-[1px] -left-[1px] w-full h-full bg-gradient-to-br from-purple-400 blur-[1px] via-purple-500/10 to-transparent -z-10"></div>
            <div className="w-full rounded-3xl min-h-full p-3 py-5 bg-slate-900 shadow-lg shadow-black/10 flex flex-col gap-y-3">
                <div className="border w-max fill-purple-500 border-purple-500/40 rounded-lg p-1.5 bg-purple-500/20">
                    {icon}
                </div>
                <p className="text-white/90 text-base font-medium">{text}</p>
                <p className="text-white/70 text-[0.85rem] tracking-wide leading-5 font-light">
                    {subtext}
                </p>
            </div>
        </div>
    )
}