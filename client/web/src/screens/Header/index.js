import React from 'react';
import { Link } from 'react-router-dom';
import Camera from '../../assets/camera.svg';
import Logo from '../../assets/logo.svg';
import { Container, Images, Img } from './styles';


export default function Header() {
  return (
    <Container>
      <Images>
      <Link to="/">
      <Img src={Logo} alt="InstaFix" />
      </Link>
      <Link to="/new">
      <Img src={Camera} alt="Enviar foto" />
      </Link>
      </Images>
    </Container>
  );
}
