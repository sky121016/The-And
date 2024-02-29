import styled from "styled-components";
import { GoHome, GoCalendar, GoPerson } from "react-icons/go";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  background-color: var(--normal);
`;

export const Menu = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Calendar = styled(GoCalendar)`
  fill: var(--peach);
`;
export const Home = styled(GoHome)`
  fill: var(--peach);
`;
export const MyPage = styled(GoPerson)`
  fill: var(--peach);
`;
