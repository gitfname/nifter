import Hero_1 from "@/components/Hero_1";
import StatusCard_1 from "@/components/StatusCard_1";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Hero_1 />
      <div className="z-10 relative pr-20 flex justify-end -translate-y-12">
        <div className="w-max">
          <StatusCard_1 />
        </div>
      </div>
    </div>
  )
}
