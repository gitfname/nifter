
import { NextResponse } from "next/server";

export async function GET(req) {

    return NextResponse.json({
        data: [
            {
                id: "h15826c2kmc7",
                img: "/images/nft/img-1.jpg",
                name: "NFT-1",
                sells: 192,
                price: "44 ETH",
                comments: 62,
                creator: {
                    username: "username-1",
                    img: "/images/user-profile/img-1.jpg"
                }
            },
            {
                id: "h52892gln35c",
                img: "/images/nft/img-2.jpg",
                name: "NFT-2",
                sells: 192,
                price: "41 ETH",
                comments: 401,
                creator: {
                    username: "username-2",
                    img: "/images/user-profile/img-2.jpg"
                }
            },
            {
                id: "g528gghbw4d23",
                img: "/images/nft/img-3.jpg",
                name: "NFT-3",
                sells: 190,
                price: "48 ETH",
                comments: 53,
                creator: {
                    username: "username-3",
                    img: "/images/user-profile/img-3.jpg"
                }
            },
            {
                id: "g47dgvs39v6bw",
                img: "/images/nft/img-4.jpg",
                name: "NFT-4",
                sells: 185,
                price: "44 ETH",
                comments: 101,
                creator: {
                    username: "username-4",
                    img: "/images/user-profile/img-4.jpg"
                }
            },
            {
                id: "gs420f7g36vhw",
                img: "/images/nft/img-5.jpg",
                name: "NFT-5",
                sells: 184,
                price: "39 ETH",
                comments: 93,
                creator: {
                    username: "username-2",
                    img: "/images/user-profile/img-2.jpg"
                }
            },
            {
                id: "gz429636dg2j5",
                img: "/images/nft/img-6.jpg",
                name: "NFT-6",
                sells: 179,
                price: "50 ETH",
                comments: 28,
                creator: {
                    username: "username-2",
                    img: "/images/user-profile/img-2.jpg"
                }
            },
            {
                id: "gd4276d5v54",
                img: "/images/nft/img-7.jpg",
                name: "NFT-7",
                sells: 179,
                price: "38 ETH",
                comments: 77,
                creator: {
                    username: "username-7",
                    img: "/images/user-profile/img-7.jpg"
                }
            },
            {
                id: "f24c8syh5d6",
                img: "/images/nft/img-8.jpg",
                name: "NFT-8",
                sells: 177,
                price: "40 ETH",
                comments: 52,
                creator: {
                    username: "username-1",
                    img: "/images/user-profile/img-1.jpg"
                }
            },
            {
                id: "d428vjdb5",
                img: "/images/nft/img-9.jpg",
                name: "NFT-9",
                sells: 175,
                price: "55 ETH",
                comments: 30,
                creator: {
                    username: "username-10",
                    img: "/images/user-profile/img-10.jpg"
                }
            },
        ]
    })
}