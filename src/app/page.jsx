import BannerComponent from "@/components/banner/banner-component";
import ReservationSection from "@/components/form-reservation/reservation-section";
import Services from "@/components/service/services";
import HeroBanner from "@/components/banner/hero-banner";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BannerComponent />
      <Services />
    </div>
  );
}
