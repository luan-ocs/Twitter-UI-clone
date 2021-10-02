import styled, { css } from 'styled-components';
import {
  ExitToApp,
  Notifications,
  Person,
  Home,
  Email,
  FavoriteBorder,
  Rocketseat,
} from '../../Styles/icons';
export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    left: 0;
    top: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--white);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  > span {
    display: none;

    @media (min-width: 1280px) {
      display: inline;
      margin-left: 19px;
      color: var(--gray);
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;
  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }
    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background-color: var(--outline);
  }

  &:hover, &.active {
    svg, span {
        color: var(--white);
        fill: var(--white);
    } 
  } 
  &.active {
    font-weight: bolder;
  }
`;

export const Botside = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: center;
`;
export const Avatar = styled.div`
    width: 39px;
    height: 39px;

    border-radius: 50%;

    flex-shrink: 0;
    background-color: var(--gray);
`;

export const ProfileData = styled.div`
    display: none;

    @media(min-width: 1280px) {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 14px;
        
        > span {
            color: var(--gray);
        }
    }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;
export const ExitIcon = styled(ExitToApp)`
    display: none;

    @media (min-width:1280px) {
        display: inline-block;
        width: 25px;
        height: 25px;
        color: var(--white);
        margin-left: 30px;
    }
    &:hover {
        > path {
            color: var(--like);
        }
    }
`