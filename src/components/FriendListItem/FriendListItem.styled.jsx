import styled from "styled-components";

export const FriendItem = styled.li `
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #365959;
    height: 70px;
    box-shadow: 7px 9px 17px -4px rgba(0,0,0,0.75);
    :not(:last-child) {
        margin-bottom: 15px;
    }
`
export const Status = styled.span`
    margin-left: 10px;
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.status ? 'green' : 'red'};
`
export const Avatar = styled.img`
    width: 60px;
`
export const Name = styled.p`
    font-size: 24px;
    font-weight: 500;
`