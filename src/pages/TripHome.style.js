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
  background-color: var(--normal);
  border-radius: 10px 10px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  
`;

export const BoxContainer = styled.div`
  width: 100%;
  /* height: 90px; */
  display: flex;
  flex-wrap: wrap;

  border-bottom: 1px dashed var(--light2);
`;

export const Location = styled.div`
  width: 40%;
  height: 90px;

  h2 {
    text-align: center;
    margin-top: 4px;
    font-size: 32px;
    color: var(--peach);
    font-weight: 500;
  }
`;

export const SmallTitle = styled.p`
  font-size: 12px;
  color: var(--light3);
`;

export const IconContainer = styled.div`
  width: 20%;
  /* height: 90px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flight = styled(MdFlight)`
  width: 32px;
  height: 32px;
  rotate: 90deg;
  /* position: absolute; */
  /* left: calc(50% - 16px); */
  /* top: calc(50%-16px); */
`;

export const Date = styled.div`
  width: 40%;
  height: 74px;

  h3 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 16px;
  }

  p {
    font-size: 14px;
    text-align: center;
  }
`;

export const PassengersContainer = styled.div`
  width: 100%;
  height: 75px;
  padding-top: 16px;
  box-sizing: border-box;
  position: relative;
`;

export const PassengersList = styled.p`
  width: 100%;
  font-size: 16px;
  color: var(--white);
  margin-top: 8px;
`;

export const MemoContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  box-sizing: border-box;
`;

export const Memo = styled.p`
  width: 100%;
  height: 120px;
  margin-top: 8px;
  font-size: 16px;
  color: var(--white);
`;


export const EditButton = styled.div`
  width: 100%;
  height: 48px;
  background-color: var(--peach);
  border-radius: 0 0 10px 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    text-align: center;
    color: var(--dark);
    font-size: 14px;
  }
`

export const Circle = styled.span`
border-radius: 100px;
width: 32px;
height: 32px;
background-color: var(--dark);
position: absolute;
left:${(props)=>(props.left)};
right:${(props)=>(props.right)};
`

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
