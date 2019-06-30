import React, { useEffect, useState } from 'react';
import comment from '../../assets/comment.svg';
import like from '../../assets/like.svg';
import send from '../../assets/send.svg';
import api, { baseURL } from '../../services/api';
import { Article, Description, Footer, FooterImg, Hashtags, Header, HeaderContent, Images, Img, Likes, More, Name, Place, Section } from './syles';

export default function Feed() {
  const [feed, setFeed] = useState([])
  useEffect(() => {
    async function getFeed() {
      const response = await api.get('post');

      setFeed(response.data);
      console.log(feed)
    }
    getFeed();
  }
  ) 
  return (
    <Section>
      {feed.map((value) => (
        <Article>
          <Header>
            <HeaderContent>
              <Name>{value.author}</Name>
              <Place>{value.place}</Place>
            </HeaderContent>
            <More>
              <Img src={`${baseURL}/images/${value.image}`} />
            </More>
          </Header>
          <Footer>
          <Images>
            <FooterImg src={like} alt="" />
            <FooterImg src={comment} alt="" />
            <FooterImg src={send} alt="" />
          </Images>

          <Likes>{`${value.likes} Curtidas`}</Likes>
          <Description>
            {value.description}
            <Hashtags>{value.hashtags}</Hashtags>
          </Description>
          </Footer>
        </Article>
      ))}
      {/* <Article>
        <Header>
          <HeaderContent>
            <Name> {feed.author} </Name>
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
      </Article> */}
    </Section>
  );
}
