import React from "react";
import styled, { css } from "styled-components";
import { TextField as MaterialTextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { keyFramesShine } from "./KeyFrames";
import { device } from "./Styles";

const SplitScreen = styled.div`
  flex: 1;
`;

const FlexDirection = styled.div`
  display: flex;
  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
    `}
`;

export const SplitContent = ({ children, horizontal }) => {
  return (
    <FlexDirection horizontal={horizontal}>
      {children.map(child => (
        <SplitScreen count={children.length}>{child}</SplitScreen>
      ))}
    </FlexDirection>
  );
};

export const RedBar = styled.div`
  padding: 5px;
  background-color: rgba(239, 0, 0, 0.5);
  disaply: flex !important;
  color: white;
  flex-direction: row;
  padding-left: 50px;
  width: 100vw;
  padding-right: 50px;
  z-index: 9;
`;

export const Page = styled.div`
  flex-direction: column;
  display: flex;
  min-height: 720px;
  flex: 1;
  width: 100%;
`;

export const TextField = styled(MaterialTextField)`
  margin: 10px;
`;

export const StyledIconButton = styled.div`
  background-color: gainsboro;
  border-radius: 12px;
  padding: 6px;
  display: inline-flex;
  &:hover {
    cursor: pointer;
    background-color: gray;
  }
  ${({ style }) => style}
`;
export const LogoutButton = styled(Button)`
  justify-self: center;
  align-self: center;
  position: relative;
  bottom: 35px;
`;

export const Spacer = styled.div`
  margin: 15px;
  ${props => {
    return css`
      ${Object.keys(props)
        .filter(propsKey => typeof props[propsKey] !== "object")
        .map(key => `${key}:${props[key]}`)
        .join(";")};
    `;
  }}
`;

export const ListImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const Horizontal = styled.div`
  flex-direction: row;
  disaply: flex;
`;

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  flex-wrap: wrap;
  height: 200px;
  text-align: center;
`;

export const FriendContainer = styled.div`
  height: 120px;
  width: 100px;

  padding: 3px;
  transition: transform 300ms ease-in-out;

  &:hover {
    animation: ${keyFramesShine} 30ms ease-in-out;
    animation-iteration-count: 1;
    filter: brightness(1.5);
  }
`;

export const VerticalCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledEventListItem = styled.div`
  flex: 1 1 0%;
  width: 100%;
  padding-top: 20px;
  background-color: ${({ isSelected }) =>
    isSelected ? `rgba(244, 24, 0, 0.2)` : `rgba(244, 24, 0, 0.1)`};
  padding-bottom: 20px;
  &:hover {
    background-color: rgba(244, 24, 0, 0.2);
    cursor: pointer;
  }
`;

export const StyledEventParam = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
`;
