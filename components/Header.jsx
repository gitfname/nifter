import Link from "next/link";
import FIllButton from "./Button/FillButton";
import OutlineButton from "./Button/OutlineButton";
import LogoText from "./LogoText";
import MobileMenu_1 from "./MobileMenu_1";

export default function Header() {

    return (
        <div className="z-20 w-full pt-8 p-4 px-6 md:px-16 bg-transparent absolute top-0 left-0 flex items-center justify-between gap-x-9">

            <LogoText size="lg" />

            <div className="flex items-center gap-x-4 flex-1 max-md:hidden">

                <Link href="/" className="text-white font-light text-sm tracking-wide">
                    Home
                </Link>

                <Link href="/" className="text-white font-light text-sm tracking-wide">
                    Market
                </Link>

                <Link href="/" className="text-white font-light text-sm tracking-wide">
                    Discover
                </Link>

                <Link href="/" className="text-white font-light text-sm tracking-wide">
                    Community
                </Link>

                <Link href="/" className="text-white font-light text-sm tracking-wide">
                    Wallet
                </Link>

            </div>

            <div className="flex items-center gap-x-3 max-md:hidden">
                <OutlineButton
                    className="!text-xs !py-2 !px-5"
                    text="Search"
                    textColor="text-white"
                    borderColor="border-white/70"
                />
                <FIllButton
                    className="!text-xs !py-2 !px-5 border border-purple-500"
                    text="Explore"
                    textColor="text-white"
                    bgColor="bg-purple-500"
                />
            </div>

            <MobileMenu_1
                className="md:hidden"
                navLinks={[
                    {
                        id: "hd52836dg",
                        text: "Home",
                        href: "/"
                    },
                    {
                        id: "fh62946fgw2",
                        text: "Market",
                        href: "/market"
                    },
                    {
                        id: "fh52845fg23",
                        text: "Discover",
                        href: "/discover"
                    },
                    {
                        id: "jvhf8365g2od",
                        text: "Community",
                        href: "/community"
                    },
                    {
                        id: "ffg274528fj2",
                        text: "Wallet",
                        href: "/wallet"
                    }
                ]}
            />

        </div>
    )
}