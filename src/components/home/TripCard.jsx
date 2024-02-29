import React from "react";
import * as T from "./TripCard.style";
import coverImg from "../../assets/coverImg.png";
import { useNavigate } from "react-router-dom";

const TripCard = ({ trip }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/trip");
    console.log("click");
  };

  return (
    <T.Border onClick={handleClick}>
      <T.Content>
        <T.CoverImg coverImg={coverImg}></T.CoverImg>
        <T.Dim></T.Dim>

        <T.Text>
          <T.Title>{trip.title}</T.Title>
          <T.Date>DATE</T.Date>
          <div className="TripDate">
            <T.Start>{trip.startDate}</T.Start>
            <T.Flight />
            <T.End>{trip.endDate}</T.End>
          </div>
        </T.Text>
      </T.Content>
    </T.Border>
  );
};

export default TripCard;
