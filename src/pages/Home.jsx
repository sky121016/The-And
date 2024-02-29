import React from "react";
import Header from "../components/common/Header";
import TripCard from "../components/home/TripCard";
import * as H from "./Home.style";

const Home = () => {
  const tripList = [
    {
      title: "프랑스 여행",
      startDate: "2024-06-24",
      endDate: "2024-07-12",
      passengers: ["홍수민", "홍가경"],
      startPoint: "서울",
      destination: "프랑스",
    },
    {
      title: "프랑스 여행",
      startDate: "2024-06-24",
      endDate: "2024-07-12",
      passengers: ["홍수민", "홍가경"],
      startPoint: "서울",
      destination: "프랑스",
    },
  ];

  return (
    <div className="Container">
      <Header TitleColor="peach" Text="나의 여행"></Header>

      <H.TripList>
        {tripList.map((trip, index) => {
          return <TripCard trip={trip}></TripCard>;
        })}
      </H.TripList>
    </div>
  );
};

export default Home;
