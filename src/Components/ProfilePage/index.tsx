import React from 'react';

import Feed from "../Feed"

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Luan Otávio</h1>
        <h2>@luan.o.c.s</h2>

        <p>
          Estudante de Sistemas da Informação na{' '}
          <a href="https://pucminas.br">@PUC minas</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 8 de dezembro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>1234</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
