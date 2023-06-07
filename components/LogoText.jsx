import Link from "next/link";

export default function LogoText({size="lg"}) {

    const _size = (
        size === "sm"
        ?
        "text-lg"
        :
        size === "md"
        ?
        "text-xl"
        :
        size === "lg"
        ?
        "text-2xl"
        :
        size === "xl" && "text-3xl"
    )

    return (
        <Link href="/" className={`text-white font-medium ${_size}`}>
            Nifter.
        </Link>
    )
}