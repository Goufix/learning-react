import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Article = styled.article`
  background: #fff;
  border: #ddd;
  margin-top: 30px;
`;

export const Header = styled.header`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 13px;
`;

export const Place = styled.span`
  font-size: 11px;
  color: #666;
  margin-top: 3px;
`;

export const Images = styled.div`
  margin-bottom: 10px;
`;

export const PostImg = styled.img`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const FooterImg = styled.img`
  height: 20px;
  margin-right: 10px;
`;

export const More = styled.div`

`;

export const Footer = styled.footer`
  padding: 20px;
`;

export const Likes = styled.strong`

`;

export const Description = styled.p`
  font-size: 13px;
  margin-top: 2px;
  line-height: 18px;
`;

export const Hashtags = styled.span`
  color: #7159c1;
  display: block;
`;
