import React from "react";
import * as T from "./TripHome.style";
import Header from "../components/common/Header";
import {
  FcRules,
  FcCalendar,
  FcMoneyTransfer,
  FcRating,
  FcBriefcase,
  FcSurvey,
} from "react-icons/fc";

const TripHome = () => {
  const tripList = {
    title: "프랑스 여행",
    startDate: "2024-06-24",
    endDate: "2024-07-12",
    passengers: ["홍수민", "홍가경"],
    startPoint: "서울",
    destination: "프랑스",
  };

  return (
    <>
      <Header TitleColor="peach" Text={tripList.title}></Header>

      <T.Container>
        <T.TripInfo>
          <T.Location>
            <h2>{tripList.startPoint}</h2>
            <T.Flight />
            <h2>{tripList.destination}</h2>
          </T.Location>

          <T.Box>
            <h3>DATE</h3>
            <p>
              {tripList.startDate} - {tripList.endDate}
            </p>
          </T.Box>
          <T.Box>
            <h3>PASSENGERS</h3>
            <p>
              {tripList.passengers.map((name, index) => {
                return index + 1 === tripList.passengers.length
                  ? `${name}`
                  : `${name}, `;
              })}
            </p>
          </T.Box>
        </T.TripInfo>

        <T.Menus>
          <T.Menu>
            <T.MenuTitle>계획</T.MenuTitle>
            <T.MenuIcon>
              <FcCalendar size={40} />
            </T.MenuIcon>
          </T.Menu>
          <T.Menu>
            <T.MenuTitle>규칙</T.MenuTitle>
            <T.MenuIcon>
              <FcRules size={40} />
            </T.MenuIcon>
          </T.Menu>

          <T.Menu>
            <T.MenuTitle>예산</T.MenuTitle>
            <T.MenuIcon>
              <FcMoneyTransfer size={40} />
            </T.MenuIcon>
          </T.Menu>

          <T.Menu>
            <T.MenuTitle>장소</T.MenuTitle>
            <T.MenuIcon>
              <FcRating size={40} />
            </T.MenuIcon>
          </T.Menu>

          <T.Menu>
            <T.MenuTitle>준비물</T.MenuTitle>
            <T.MenuIcon>
              <FcBriefcase size={40} />
            </T.MenuIcon>
          </T.Menu>

          <T.Menu>
            <T.MenuTitle>메모</T.MenuTitle>
            <T.MenuIcon>
              <FcSurvey size={40} />
            </T.MenuIcon>
          </T.Menu>
        </T.Menus>
      </T.Container>
    </>
  );
};

export default TripHome;
