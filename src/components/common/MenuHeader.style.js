import styled from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiMore2Fill } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  height: 43px;
  padding: 12px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
`;

export const GoBack = styled(HiOutlineChevronLeft)`
  width: 24px;
  font-size: 24px;
  color: var(--white);
`;

export const Menu = styled(RiMore2Fill)`
  width: 24px;
  font-size: 20px;
  color: var(--white);
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
