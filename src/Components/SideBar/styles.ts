import styled from 'styled-components';
import { Search } from '../../Styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`;
export const SearchWrapper = styled.div`
    padding: 5px 24px 0 10px;
    width: min(399px, 100%);
    position: fixed;
    top: 0;
    z-index: 2;
    background: var(--primary);
    max-height: 57px;
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 46px;
    font-size: 14px;
    padding: 0 12px 0 52px;
    border-radius: 25px;
    background: var(--search);
    &::placeholder {
        
        color: var(--gray);
    }
    ~ svg {
        position: relative;
        top: -36px;
        left: 15px;
        z-index: 1;
    }
    outline: 0;

    &:focus {
        background: var(--primary);
        border: solid 1px var(--twitter);
        ~ svg {
            fill: var(--twitter);
        }
    }
`;
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 57px 24px 200px;
    margin-top: 3px;
    > div + div {
        margin-top: 15px;
    }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: var(--gray);
`;
