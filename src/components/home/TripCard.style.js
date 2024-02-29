import styled from "styled-components";
import { MdFlight } from "react-icons/md";

export const Border = styled.div`
  width: 342px;
  height: 478px;
  background: linear-gradient(
    to bottom,
    rgba(41, 41, 89, 1),
    rgba(243, 183, 169, 0.6)
  );
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 294px;
  height: 430px;

  border-radius: 126px;
  /* background-image: url(https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  color: var(--white);

  position: relative;

  .TripDate {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

export const CoverImg = styled.div`
  width: 294px;
  height: 430px;
  border-radius: 126px;
  background-image: ${(props) =>
    props.coverImg ? `url(${props.coverImg})` : "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const Dim = styled.div`
  width: 294px;
  height: 430px;
  border-radius: 126px;
  position: absolute;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
`;

export const Text = styled.div`
  width: 294px;
  height: 430px;
  padding: 96px 20px;
  box-sizing: border-box;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 12px;
`;

export const Date = styled.h1`
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  margin-bottom: 4px;
`;

export const Start = styled.h1`
  font-size: 14px;
  font-weight: 400;
`;

export const End = styled.h1`
  font-size: 14px;
  font-weight: 400;
`;

export const Flight = styled(MdFlight)`
  width: 32px;
  height: 32px;
  rotate: 90deg;
  position: absolute;
  left: calc(50% - 16px);
  top: -6px;
`;
