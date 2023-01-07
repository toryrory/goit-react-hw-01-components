import styled from "styled-components";
import { getRandomHexColor } from "utils/getRandomColor";

export const Section = styled.section`
margin: auto;
border-radius: 5px;
border: 2px solid black;
width: 400px;
text-align: center;
background-color: white;
margin-bottom: 30px;
box-shadow: 7px 9px 17px -4px rgba(0,0,0,0.75);
`
export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 500;
`
export const StatList = styled.ul`
    display: flex;
`
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: ${getRandomHexColor};
  border-radius: 20px 70px;
`
export const Label = styled.span`
    font-size: 18px;
`
export const Percentage = styled.span`
    font-size: 22px;
`