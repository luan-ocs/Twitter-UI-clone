import React from 'react';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  ExitIcon,
  ProfileData,
  Avatar
} from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon/>
          <span>Perfil</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
          <Avatar/>
          <ProfileData>
              <strong>Luan Otávio</strong>
              <strong>@Luan.o.c.s</strong>
          </ProfileData>
          <ExitIcon/>
      </Botside>
    </Container>
  );
};

export default MenuBar;
