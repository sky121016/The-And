import styled from "styled-components";
import { MdFlight } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const TripInfo = styled.div`
  width: 358px;
  height: 248px;
  background-color: var(--normal);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 12px;
  box-sizing: border-box;
  margin-bottom: 24px;
`;

export const Location = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 30px;
  box-sizing: border-box;

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: var(--peach);
  }
`;

export const Flight = styled(MdFlight)`
  width: 32px;
  height: 32px;
  rotate: 90deg;
  position: absolute;
  left: calc(50% - 16px);
  top: calc(50%-16px);
`;

export const Box = styled.div`
  width: 100%;
  height: 59px;
  background-color: var(--light1);
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;

  h3 {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 8px;
    color: var(--light3);
  }

  p {
    font-size: 14px;
    font-weight: 400;

    color: var(--white);
  }
`;

export const Menus = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const Menu = styled.div`
  width: 171px;
  height: 110px;
  background-color: var(--normal);
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`;

export const MenuTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: var(--white);
  position: relative;
`;

export const MenuIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: var(--light1);
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
