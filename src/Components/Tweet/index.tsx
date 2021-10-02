import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikesIcon
} from './style';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Voce retuitou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Luan</strong>
            <span>@Luan.o.c.s</span>
            <Dot />
            <time>
              {new Date().toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'short',
              })}
            </time>
          </Header>
          <Description>Foguete não tem ré!!!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikesIcon />
              18
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
