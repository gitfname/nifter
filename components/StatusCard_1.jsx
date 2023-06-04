import FIllButton from "./Button/FillButton";
import OutlineButton from "./Button/OutlineButton";

export default function StatusCard_1() {

    return (
        <div className="w-full rounded-xl p-3 px-7 bg-slate-800/60 backdrop-blur-sm flex items-center justify-evenly gap-x-9">

            <div className="flex flex-col gap-y-1">
                <p className="text-sm text-white/60 tracking-wide font-light">Current Big</p>
                <p className="text-3xl text-purple-500 tracking-wide font-semibold">5.00 ETH</p>
                <p className="text-sm text-white/60 tracking-wide font-light">$11.375</p>
            </div>

            <div className="border-r border-gray-600 rounded self-stretch"></div>

            <div className="flex flex-col gap-y-1">
                <p className="text-sm text-white/60 tracking-wide font-light">Next Big Challange</p>
                <div className="flex items-center gap-x-5">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-3xl text-purple-500 tracking-wide font-semibold">18</p>
                        <p className="text-sm text-white/60 tracking-wide font-light">Hours</p>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <p className="text-3xl text-purple-500 tracking-wide font-semibold">52</p>
                        <p className="text-sm text-white/60 tracking-wide font-light">Mins</p>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <p className="text-3xl text-purple-500 tracking-wide font-semibold">49</p>
                        <p className="text-sm text-white/60 tracking-wide font-light">Secs</p>
                    </div>
                </div>
            </div>

            <div className="border-r border-gray-600 rounded self-stretch"></div>

            <div className="flex flex-col gap-y-2.5">
                <OutlineButton
                    text="Take a seat"
                    borderColor="border-purple-500"
                    textColor="text-purple-500"
                />

                <OutlineButton
                    text="See items"
                />
            </div>

        </div>
    )
}