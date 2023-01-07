import styled from "styled-components";

export const ProfileCard = styled.div`
    border: 2px solid black;
margin: auto;
    width: 400px;
    background-color: azure;
    border-radius: 5px;
`
export const Description = styled.div`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
`
export const UserAvatar = styled.img`
    border: 3px solid #365959;
    width: 250px;
    border-radius: 50%;
    background-color: cadetblue;
`
export const UserName = styled.p`
margin-top: 20px;
margin-bottom: 20px;
font-size: 28px;
font-weight: 700;
`
export const UserTag = styled.p`
font-size: 20px;
font-weight: 500;
`
export const UserLocation = styled.p`
font-size: 20px;
font-weight: 400;
`
export const StatsList = styled.ul`
border-top: 2px solid black;
    display: flex;
    justify-content: center;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width:100%;
    :not(:last-child) {
        border-right: 2px solid black;
    }
`
export const Label = styled.span`
margin-bottom:10px;
    font-size: 20px;
`
export const Quantity = styled.span`
    font-size: 24px;
    font-weight:500;
`
