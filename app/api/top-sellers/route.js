
import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({
        data: [
            {
                id: "6gjb2449fns2j",
                items: [
                    {
                        id: "46d20h",
                        img: "/images/user-profile/img-1.jpg",
                        sells: "490 ETH",
                        username: "user-1's username"
                    },
                    {
                        id: "gdjs85194h",
                        img: "/images/user-profile/img-2.jpg",
                        sells: "490 ETH",
                        username: "user-2's username"
                    },
                    {
                        id: "dh20725f",
                        img: "/images/user-profile/img-3.jpg",
                        sells: "501 ETH",
                        username: "user-3's username"
                    },
                    {
                        id: "g49d5gsg35",
                        img: "/images/user-profile/img-4.jpg",
                        sells: "311 ETH",
                        username: "user-4's username"
                    },
                    {
                        id: "6sf2k586gs",
                        img: "/images/user-profile/img-5.jpg",
                        sells: "701 ETH",
                        username: "user-5's username"
                    },
                    {
                        id: "7726fcf1f",
                        img: "/images/user-profile/img-6.jpg",
                        sells: "444 ETH",
                        username: "user-6's username"
                    }
                ]
            },
            
            {
                id: "hs5937fbsk36c",
                items: [
                    {
                        id: "998cg1467gw",
                        img: "/images/user-profile/img-7.jpg",
                        sells: "301 ETH",
                        username: "user-6's username"
                    },
                    {
                        id: "725fb18c5",
                        img: "/images/user-profile/img-8.jpg",
                        sells: "721 ETH",
                        username: "user-8's username"
                    },
                    {
                        id: "g25c9wb2d2",
                        img: "/images/user-profile/img-9.jpg",
                        sells: "290 ETH",
                        username: "user-9's username"
                    },
                    {
                        id: "55fvd3825d",
                        img: "/images/user-profile/img-10.jpg",
                        sells: "494 ETH",
                        username: "user-10's username"
                    },
                    {
                        id: "44nfs0918d4",
                        img: "/images/user-profile/img-11.jpg",
                        sells: "393 ETH",
                        username: "user-11's username"
                    }
                ]
            }
        ]
    })
}