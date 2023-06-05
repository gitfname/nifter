
import { NextResponse } from "next/server";

export async function GET(req) {

    return NextResponse.json({
        data: [
            {
                img: "/images/hot-collections/abstract.jpg",
                name: "Abstract",
                items: 44
            },
            {
                img: "/images/hot-collections/3d.jpg",
                name: "3D",
                items: 20
            },
            {
                img: "/images/hot-collections/game.jpg",
                name: "Game",
                items: 18
            },            {
                img: "/images/hot-collections/modern-art.jpg",
                name: "Modern art",
                items: 61
            }
        ]
    })
}