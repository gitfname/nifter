
import Link from "next/link"
import { BsDiscord, BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs"
import LogoText from "./LogoText"


function FooterMenu({title, items=[]}) {

    return (
        <div>
            <p className="text-base text-purple-500 tracking-wide font-medium mb-5">{title}</p>
            <div className="flex flex-col gap-y-3">
                {
                    items.map(item => (
                        <p className="text-sm text-white/80 text-white font-normal">{item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default function Footer() {

    return (
        <div className="w-full p-10 py-14 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4 gap-y-12 bg-slate-900">

            <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                <LogoText size="xl" />

                <p className="text-sm text-white/70 tracking-wide leading-5 font-light mt-3 max-w-[40ch]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit quis dolore? Dolores obcaecati perspiciatis debitis dolorum suscipit est beatae, blanditiis quo a aliquam tenetur amet! Amet, neque.
                </p>

                <div className="flex items-center gap-x-4 mt-5">
                    <BsTwitter className="w-5 h-5 transition-colors duration-200 cursor-pointer fill-purple-500/50 hover:fill-purple-500" />
                    <BsDiscord className="w-5 h-5 transition-colors duration-200 cursor-pointer fill-purple-500/50 hover:fill-purple-500" />
                    <BsFacebook className="w-5 h-5 transition-colors duration-200 cursor-pointer fill-purple-500/50 hover:fill-purple-500" />
                    <BsInstagram className="w-5 h-5 transition-colors duration-200 cursor-pointer fill-purple-500/50 hover:fill-purple-500" />
                    <BsTelegram className="w-5 h-5 transition-colors duration-200 cursor-pointer fill-purple-500/50 hover:fill-purple-500" /> 
                </div>
            </div>

            <div className="grid place-items-center grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    <FooterMenu
                        title="Explore"
                        items={["Art", "Photography", "Music", "Games"]}
                    />

                    <FooterMenu
                        title="My Account"
                        items={["My Profile", "My Collections", "My Favorites", "My Account Settings"]}
                    />

                    <FooterMenu
                        title="Rsources"
                        items={["Help Center", "Privacy & Policy", "Support", "Newsletter"]}
                    />


                    <FooterMenu
                        title="Company"
                        items={["About", "Contact", "Activity", "Creers"]}
                    />
            </div>

        </div>
    )
}