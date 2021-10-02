import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  Body,
  SearchIcon,
} from './styles';

import List from '../List';
import News from "../News"
import FollowSuggestion from '../FollowSuggestions';
import StickyBox from 'react-sticky-box';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox> 
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Rocketseat" nickname="@Rocketseat" />,
            <FollowSuggestion name="Udemy" nickname="@Udemy" />,
            <FollowSuggestion name="Guilherme Rodz" nickname="@Guilherme Rodz" />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News /> ]}
        />

        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News /> ]}
        />

        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News /> ]}
        />
      </Body>

      </StickyBox>
    </Container>
  );
};

export default SideBar;
