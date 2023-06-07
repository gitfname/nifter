
"use client"

import dynamic from "next/dynamic";
import Card_1 from "@/components/Card_1";
import Carousel_1 from "@/components/Carousel_1";
import Collectioncard_1 from "@/components/CollectionCard_1";
import Hero_1 from "@/components/Hero_1";
import SectionGroup_1 from "@/components/SectionGroup_1";
import StatusCard_1 from "@/components/StatusCard_1";
import TopSellerCard_1 from "@/components/TopSellerCard_1";
import { useEffect, useState } from "react";
const Tabs = dynamic(() => import("@chakra-ui/react").then(module => module.Tabs), {ssr: false})
const TabList = dynamic(() => import("@chakra-ui/react").then(module => module.TabList), {ssr: false})
const TabPanels = dynamic(() => import("@chakra-ui/react").then(module => module.TabPanels), {ssr: false})
const Tab = dynamic(() => import("@chakra-ui/react").then(module => module.Tab), {ssr: false})
const TabPanel = dynamic(() => import("@chakra-ui/react").then(module => module.TabPanel), {ssr: false})
const TabIndicator = dynamic(() => import("@chakra-ui/react").then(module => module.TabIndicator), {ssr: false})
// import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
const Card_2 = dynamic(() => import("@/components/Card_2"), {ssr: false})
// import Card_2 from "@/components/Card_2";
import FIllButton from "@/components/Button/FillButton";
const FeatureCard_1 = dynamic(() => import("@/components/FeatureCard_1"), {ssr: false})
// import FeatureCard_1 from "@/components/FeatureCard_1";
import { BiEdit, BiWallet } from "react-icons/bi"
import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { BiAddToQueue } from "react-icons/bi"
import Banner_1 from "@/components/Banner_1";

export default function Home() {
  const [topSellers, setTopSellers] = useState([])
  const [liveAuction, setliveAuction] = useState([])
  const [hotCollections, sethotCollections] = useState([])
  const [recommendedNfts, setRecommendedNfts] = useState([])
  const [musicNfts, setMusicNfts] = useState([])
  const [modernartNfts, setModernartNfts] = useState([])

  useEffect(
    () => {

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

      async function getRecommendedNfts() {
        const res = await (await fetch('/api/recommended-nfts', { next: { revalidate: 3600 } })).json()
        if(res.data) {
          setRecommendedNfts(res.data)
        }
      }

      async function getMusicNfts() {
        const res = await (await fetch('/api/music-nfts', { next: { revalidate: 3600 } })).json()
        if(res.data) {
          setMusicNfts(res.data)
        }
      }

      async function getModernArtNfts() {
        const res = await (await fetch('/api/modernart-nfts', { next: { revalidate: 3600 } })).json()
        if(res.data) {
          setModernartNfts(res.data)
        }
      }

      getTopSelersList()
      getLiveAuction()
      getHotCollections()
      getRecommendedNfts()
      getMusicNfts()
      getModernArtNfts()

    },
    []
  )

  return (
    <div className="bg-slate-900 pb-40">

      <Hero_1 />

      <div className="z-10 max-sm:mt-10 relative max-lg:px-6 lg:pr-20 flex justify-end lg:-translate-y-12">
        <div className="max-sm:w-full w-max">
          <StatusCard_1 />
        </div>
      </div>

      <div className="mx-auto w-full max-lg:px-6 lg:w-10/12 mt-20">
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

      <div className="mt-32 px-6 md:px-10 relative z-10">
        <div className="w-36 h-36 bg-purple-500/40 rounded-full absolute bottom-1 left-28 translate-x-full blur-3xl"></div>
        <Carousel_1
          title="Hot Collections"
          items={hotCollections}
          spaceBetween={20}
          centeredSlides={false}
          renderer={data => <Collectioncard_1 key={data.id} {...data} />}
        />
      </div>

      <div className="mt-32 px-6 md:px-10 z-10 relative">

        <div className="w-72 h-72 bg-purple-500/10 rounded-full absolute -top-20 right-56 blur-3xl"></div>

        <p className="text-white w-10/12 mx-auto text-4xl font-medium tracking-wide mb-16 text-center">
          Explore Artworks
        </p>

        <Tabs isLazy position="relative" size="sm" variant="unstyled">
          
          <TabList className="!border-none" columnGap={2} justifyContent="center">
            <Tab _selected={{bg: "whiteAlpha.200"}} _hover={{bg: "whiteAlpha.100"}} borderTopRadius={10} color="white">Recommendations</Tab>
            <Tab _selected={{bg: "whiteAlpha.200"}} _hover={{bg: "whiteAlpha.100"}} borderTopRadius={10} color="white">Music</Tab>
            <Tab _selected={{bg: "whiteAlpha.200"}} _hover={{bg: "whiteAlpha.100"}} borderTopRadius={10} color="white">Modern art</Tab>
          </TabList>

          <TabIndicator
            bgColor="whiteAlpha.600"
            height="1px"
            borderRadius={3}
          />

          <TabPanels mt="10px">

            <TabPanel className="text-white">
              <Carousel_1
                title=""
                items={recommendedNfts}
                spaceBetween={0}
                centeredSlides={false}
                renderer={data => <Card_2 key={data.id} {...data} />}
              />
            </TabPanel>

            <TabPanel className="text-white">
              <Carousel_1
                title=""
                items={musicNfts}
                spaceBetween={0}
                centeredSlides={false}
                renderer={data => <Card_2 key={data.id} {...data} />}
              />
            </TabPanel>

            <TabPanel className="text-white">
              <Carousel_1
                title=""
                items={modernartNfts}
                spaceBetween={0}
                centeredSlides={false}
                renderer={data => <Card_2 key={data.id} {...data} />}
              />
            </TabPanel>
          </TabPanels>

        </Tabs>

      </div>

      <div className="w-full max-lg:px-4 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-32 gap-y-10">

        <div className="flex max-lg:items-center flex-col gap-y-4 items-start justify-center w-full">
          <p className="text-white tracking-wide font-semibold text-4xl">How it works</p> 
          <p className="text-white/80 text-sm leading-5 tracking-wide max-w-[50ch] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias, consequatur facere velit maxime corrupti excepturi odit eum qui, aut saepe voluptatem culpa assumenda cum dolorem. Deleniti vitae veniam eius!
          </p>
          <FIllButton
            text="Learn more"
            textColor="text-white"
            bgColor="bg-purple-500"
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FeatureCard_1
            icon={<BiWallet className="w-5 h-5 fill-inherit" />}
            text="Set up your wallet"
            subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere recusandae, placeat nulla atque magni!"
          />
          <FeatureCard_1
            icon={<HiOutlineSquares2X2 className="w-5 h-5 fill-inherit stroke-inherit" />}
            text="Create collection"
            subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere recusandae, placeat nulla atque magni!"
          />
          <FeatureCard_1
            icon={<BiAddToQueue className="w-5 h-5 fill-inherit" />}
            text="Add your NFTs"
            subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere recusandae, placeat nulla atque magni!"
          />
          <FeatureCard_1
            icon={<BiEdit className="w-5 h-5 fill-inherit" />}
            text="List item for sale"
            subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere recusandae, placeat nulla atque magni!"
          />
        </div>
        
      </div>

      <div className="mt-32 w-full max-lg:px-4 lg:w-10/12 mx-auto">
        <Banner_1
          text="Are you a digital creator?"
          subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut delectus voluptatibus? Obcaecati debitis dolores vel consequuntur blanditiis ipsum quia vero! Amet, nesciunt sit a dignissimos ratione voluptate, sint ad soluta optio molestiae perferendis quibusdam debitis ex mollitia itaque, tenetur beatae enim minima. Dolor, autem."
          img="/images/nft-img-1.png"
        />
      </div>


      
    </div>
  )
}
