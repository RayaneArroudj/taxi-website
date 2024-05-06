import BannerComponent from "@/components/banner/banner-component";
import ReservationSection from "@/components/form-reservation/reservation-section";
import Services from "@/components/service/services";

export default function Home() {
  return (
    <div>
      <BannerComponent />
      <ReservationSection />
      <Services />
    </div>
  );
}
