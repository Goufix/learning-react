import React, { useEffect, useState } from 'react';
import image from '../../1561000075401-image.jpg';
import comment from '../../assets/comment.svg';
import like from '../../assets/like.svg';
import more from '../../assets/more.svg';
import send from '../../assets/send.svg';
import api from '../../services/api';
import { Article, Description, Footer, FooterImg, Hashtags, Header, HeaderContent, Images, Img, Likes, More, Name, Place, PostImg, Section } from './syles';

export default function Feed() {
  const [feed, setFeed] = useState('')
  useEffect(() => {
    async function getFeed() {
      const response = await api.get('posts');

      setFeed(response.data);
    }
    getFeed();
  }
  ) 
  return (
    <Section>
      <Article>
        <Header>
          <HeaderContent>
            <Name> Alifer Quevedo </Name>
            <Place> Piraquara/PR </Place>
          </HeaderContent>
          <More>
            <Img src={more} alt="" />
          </More>
        </Header>
          <PostImg src={image} alt="Uma foto" />
        <Footer>
          <Images>
            <FooterImg src={like} alt="" />
            <FooterImg src={comment} alt="" />
            <FooterImg src={send} alt="" />
          </Images>
          
          <Likes>300 Curtidas</Likes>
          <Description>
            Um foto massa!
            <Hashtags>#Massa #LearnReactJS</Hashtags>
          </Description>
        </Footer>
      </Article>
    </Section>
  );
}
