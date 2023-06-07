
import { NextResponse } from "next/server";

export async function GET(req) {

    return NextResponse.json({
        data: [
            {
                "id": "hsgv83648xh",
                "img": "/images/nft/img-39.jpg",
                "name": "nft-1-name",
                "likes": "50K",
                "creator": {
                    "username": "nft-1-creator-name",
                    "img": "/images/user-profile/img-4.jpg"
                },
                "price": "21 ETH"
            },
            {
                "id": "vg86593hg2",
                "img": "/images/nft/img-40.jpg",
                "name": "nft-2-name",
                "likes": "44K",
                "creator": {
                    "username": "nft-2-creator-name",
                    "img": "/images/user-profile/img-2.jpg"
                },
                "price": "11 ETH"
            },
            {
                "id": "gf629563dgot",
                "img": "/images/nft/img-41.jpg",
                "name": "nft-3-name",
                "likes": "29K",
                "creator": {
                    "username": "nft-3-creator-name",
                    "img": "/images/user-profile/img-3.jpg"
                },
                "price": "21 ETH"
            },
            {
                "id": "gv62957fgw2",
                "img": "/images/nft/img-42.jpg",
                "name": "nft-4-name",
                "likes": "32K",
                "creator": {
                    "username": "nft-4-creator-name",
                    "img": "/images/user-profile/img-20.jpg"
                },
                "price": "14 ETH"
            },
            {
                "id": "hvg8563fcj2",
                "img": "/images/nft/img-43.jpg",
                "name": "nft-5-name",
                "likes": "39K",
                "creator": {
                    "username": "nft-5-creator-name",
                    "img": "/images/user-profile/img-21.jpg"
                },
                "price": "19 ETH"
            },
            {
                "id": "gc52956df13",
                "img": "/images/nft/img-44.jpg",
                "name": "nft-6-name",
                "likes": "42K",
                "creator": {
                    "username": "nft-6-creator-name",
                    "img": "/images/user-profile/img-22.jpg"
                },
                "price": "40 ETH"
            },
            {
                "id": "dg53dh39djw",
                "img": "/images/nft/img-45.jpg",
                "name": "nft-7-name",
                "likes": "19K",
                "creator": {
                    "username": "nft-7-creator-name",
                    "img": "/images/user-profile/img-23.jpg"
                },
                "price": "36 ETH"
            },
            {
                "id": "gej8253fs12",
                "img": "/images/nft/img-46.jpg",
                "name": "nft-8-name",
                "likes": "21K",
                "creator": {
                    "username": "nft-8-creator-name",
                    "img": "/images/user-profile/img-24.jpg"
                },
                "price": "30 ETH"
            },
        ]
    })
}