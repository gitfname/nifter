
import { NextResponse } from "next/server";

export async function GET(req) {

    return NextResponse.json({
        data: [
            {
                "id": "g264926fgsj2",
                "img": "/images/nft/img-31.jpg",
                "name": "nft-1-name",
                "likes": "50K",
                "creator": {
                    "username": "nft-1-creator-name",
                    "img": "/images/user-profile/img-1.jpg"
                },
                "price": "21 ETH"
            },
            {
                "id": "gs53375dk3",
                "img": "/images/nft/img-32.jpg",
                "name": "nft-2-name",
                "likes": "43K",
                "creator": {
                    "username": "nft-2-creator-name",
                    "img": "/images/user-profile/img-2.jpg"
                },
                "price": "21 ETH"
            },
            {
                "id": "hc59462f2s2",
                "img": "/images/nft/img-33.jpg",
                "name": "nft-3-name",
                "likes": "33K",
                "creator": {
                    "username": "nft-3-creator-name",
                    "img": "/images/user-profile/img-3.jpg"
                },
                "price": "44 ETH"
            },
            {
                "id": "hcg529365cg2",
                "img": "/images/nft/img-34.jpg",
                "name": "nft-4-name",
                "likes": "51K",
                "creator": {
                    "username": "nft-4-creator-name",
                    "img": "/images/user-profile/img-4.jpg"
                },
                "price": "11 ETH"
            },
            {
                "id": "g264349164d",
                "img": "/images/nft/img-35.jpg",
                "name": "nft-5-name",
                "likes": "33K",
                "creator": {
                    "username": "nft-5-creator-name",
                    "img": "/images/user-profile/img-5.jpg"
                },
                "price": "20 ETH"
            },
            {
                "id": "g25927d51f",
                "img": "/images/nft/img-36.jpg",
                "name": "nft-6-name",
                "likes": "77K",
                "creator": {
                    "username": "nft-6-creator-name",
                    "img": "/images/user-profile/img-6.jpg"
                },
                "price": "45 ETH"
            },
            {
                "id": "g52975cgej3g",
                "img": "/images/nft/img-37.jpg",
                "name": "nft-7-name",
                "likes": "30K",
                "creator": {
                    "username": "nft-7-creator-name",
                    "img": "/images/user-profile/img-7.jpg"
                },
                "price": "25 ETH"
            },
            {
                "id": "g5296cf2j4d",
                "img": "/images/nft/img-38.jpg",
                "name": "nft-8-name",
                "likes": "38K",
                "creator": {
                    "username": "nft-8-creator-name",
                    "img": "/images/user-profile/img-8.jpg"
                },
                "price": "27 ETH"
            }
        ]
    })
}