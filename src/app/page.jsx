import BannerComponent from "@/components/banner/banner-component";
import HeroBanner from "@/components/banner/hero-banner";
import Services from "@/components/service/services";

export default function Home() {
  return (
    <div className="flex-col">
      <HeroBanner />
      <BannerComponent />
      <Services />
    </div>
  );
}
