
"use client"

import OutlineButton from "@/components/Button/OutlineButton";
import Card_1 from "@/components/Card_1";
import Carousel_1 from "@/components/Carousel_1";
import Collectioncard_1 from "@/components/CollectionCard_1";
import Hero_1 from "@/components/Hero_1";
import SectionGroup_1 from "@/components/SectionGroup_1";
import StatusCard_1 from "@/components/StatusCard_1";
import TopSellerCard_1 from "@/components/TopSellerCard_1";
import { useEffect, useState } from "react";

export default function Home() {
  const [topSellers, setTopSellers] = useState([])
  const [liveAuction, setliveAuction] = useState([])
  const [hotCollections, sethotCollections] = useState([])

  useEffect(
    () => {

      // const { signal, abort } = new AbortController()

      async function getTopSelersList() {
        const res = await (await fetch("/api/top-sellers", { next: { revalidate: 3600 } })).json()
        if(res.data) {
          setTopSellers(res.data)
        }
      }

      async function getLiveAuction() {
        const res = await (await fetch("/api/live-auction", { next: { revalidate: 3600 } })).json()
        if(res.data) {
          setliveAuction(res.data)
        }
      }

      async function getHotCollections() {
        const res = await (await ( fetch("/api/hot-collections", { next: { revalidate: 3600 } }) )).json()
        if(res.data) {
          sethotCollections(res.data)
        }
      }

      getTopSelersList()
      getLiveAuction()
      getHotCollections()

      // return () => {
      //   abort()
      // }

    },
    []
  )

  return (
    <div className="bg-slate-900 pb-40">

      <Hero_1 />

      <div className="z-10 relative pr-20 flex justify-end -translate-y-12">
        <div className="w-max">
          <StatusCard_1 />
        </div>
      </div>

      <div className="mx-auto w-10/12 mt-20">
        <div className="w-36 h-36 bg-purple-500/40 rounded-full absolute top3-1 left-2 blur-3xl"></div>
        
        <SectionGroup_1
          className="z-20 relative"
          left="Top Sellers"
          hasSeach
          onSearchValueChange={value => {
            console.log(value);
          }}
        >
          <div className="w-full flex flex-col gap-y-6">
            {
              topSellers.map(topSellerSection => {
                return (
                  <div key={topSellerSection.id} className="w-full overflow-x-auto">
                    <div className="flex items-center gap-x-4 w-max pb-2 px-4">
                      {
                        topSellerSection.items.map(topSeller => (
                          <TopSellerCard_1
                            key={topSeller.id}
                            className="flex-shrink-0"
                            img={topSeller.img}
                            username={topSeller.username}
                            sells={topSeller.sells}
                          />
                        ))
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </SectionGroup_1>
      </div>
      
      <div className="mt-32 relative z-10">
        <div className="w-36 h-36 bg-purple-500/40 rounded-full absolute bottom-1 left-28 translate-x-full blur-3xl"></div>
        <Carousel_1
          id="live-auction"
          title="Live Auction"
          textCenter
          items={liveAuction}
          renderer={data => <Card_1 key={data.id} {...data} />}
        />
      </div>

      <div className="mt-32 px-10 relative z-10">
        <div className="w-36 h-36 bg-purple-500/40 rounded-full absolute bottom-1 left-28 translate-x-full blur-3xl"></div>
        <Carousel_1
          title="Hot Collections"
          items={hotCollections}
          spaceBetween={20}
          centeredSlides={false}
          renderer={data => <Collectioncard_1 key={data.id} {...data} />}
        />
      </div>
      
    </div>
  )
}
