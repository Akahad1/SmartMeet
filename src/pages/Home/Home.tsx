import HowItWorks from "../../component/HowItWorks/HowItWorks";
import RoomCards from "../../component/RoomCards/RoomCards";
import Section1 from "../../component/Section1/Section1";
import ServiceAdvertisement from "../../component/Services/Services";
import Testimonials from "../../component/Testimonials/Testimonials";
import WhyChooseUs from "../../component/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Section1></Section1>
      <ServiceAdvertisement></ServiceAdvertisement>
      <RoomCards></RoomCards>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
