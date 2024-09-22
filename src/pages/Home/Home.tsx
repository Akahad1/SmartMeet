import RoomCards from "../../component/RoomCards/RoomCards";
import Section1 from "../../component/Section1/Section1";
import ServiceAdvertisement from "../../component/Services/Services";

const Home = () => {
  return (
    <div>
      <Section1></Section1>
      <ServiceAdvertisement></ServiceAdvertisement>
      <RoomCards></RoomCards>
    </div>
  );
};

export default Home;
