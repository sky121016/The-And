import React from "react";
import * as T from "./TripHome.style";
import Header from "../components/common/Header";
import { FcRules, FcMoneyTransfer } from "react-icons/fc";
import { MdCalendarToday } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TripHome = () => {
  const navigate = useNavigate();
  const tripList = {
    title: "프랑스 여행",
    startDate: "2024-06-24",
    startDateParts:["2024", "06", "24"],
    endDate: "2024-07-12",
    endDateParts:["2024", "07", "12"],
    passengers: ["홍수민", "홍가경"],
    origin: "서울",
    destination: "프랑스",
    memo: "가족여행",
  };

  return (
    <>
      <Header TitleColor="peach" Text={tripList.title} />

      <T.Container>
        <T.TripInfo>
          <T.BoxContainer>
            <T.Location>
              <T.SmallTitle>From</T.SmallTitle>
              <h2>{tripList.origin}</h2>
            </T.Location>
            <T.IconContainer>
              <T.Flight />
            </T.IconContainer>
            <T.Location>
              <T.SmallTitle>To</T.SmallTitle>
              <h2>{tripList.destination}</h2>
            </T.Location>
          </T.BoxContainer>

          <T.BoxContainer>
            <T.Date>
              <h3>
                {tripList.startDateParts[1]}/{tripList.startDateParts[2]}
              </h3>
              <p>{tripList.startDateParts[0]}</p>
            </T.Date>

            <T.IconContainer>
              <MdCalendarToday size={24} />
            </T.IconContainer>

            <T.Date>
              <h3>
                {tripList.endDateParts[1]}/{tripList.endDateParts[2]}
              </h3>
              <p>{tripList.endDateParts[0]}</p>
            </T.Date>
          </T.BoxContainer>

          <T.BoxContainer>
            <T.PassengersContainer>
              <T.SmallTitle>Passengers</T.SmallTitle>

              <T.PassengersList>
                {tripList.passengers.map((name, index) => {
                  return index + 1 === tripList.passengers.length
                    ? `${name}`
                    : `${name}, `;
                })}
              </T.PassengersList>

              <T.Circle left="-32px"></T.Circle>
              <T.Circle right="-32px"></T.Circle>
            </T.PassengersContainer>
          </T.BoxContainer>

          <T.MemoContainer>
            <T.SmallTitle>Memo</T.SmallTitle>
            <T.Memo>{tripList.memo}</T.Memo>
          </T.MemoContainer>
        </T.TripInfo>

        <T.EditButton>
          <p>여행 수정하기</p>
        </T.EditButton>

        <T.Menus>
          <T.Menu onClick={() => navigate("/rules")}>
            <T.MenuTitle>규칙</T.MenuTitle>
            <T.MenuIcon>
              <FcRules size={40} />
            </T.MenuIcon>
          </T.Menu>

          <T.Menu onClick={() => navigate("/budget")}>
            <T.MenuTitle>예산</T.MenuTitle>
            <T.MenuIcon>
              <FcMoneyTransfer size={40} />
            </T.MenuIcon>
          </T.Menu>
        </T.Menus>
      </T.Container>
    </>
  );
};

export default TripHome;
