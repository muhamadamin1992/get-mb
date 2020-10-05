import React from 'react';
import { Container, Header, Content, List, Body, Title } from 'native-base';
import Item from './components/Item';
import IItem from "./models/item";

const urlStart:string = 'tel:*147*';
const urlEnd:string = '*39722%23';

const items: Array<IItem> = [
  {
    title: "500 MB",
    price: "10 000 so'm",
    url: `${urlStart}10072${urlEnd}`,
  },
  {
    title: "1500 MB",
    price: "15 000 so'm",
    url: `${urlStart}10073${urlEnd}`,
  },
  {
    title: "3000 MB",
    price: "24 000 so'm",
    url: `${urlStart}10074${urlEnd}`,
  },
  {
    title: "5000 MB",
    price: "32 000 so'm",
    url: `${urlStart}10075${urlEnd}`,
  },
  {
    title: "8000 MB",
    price: "41 000 so'm",
    url: `${urlStart}10076${urlEnd}`,
  },
  {
    title: "12 000 MB",
    price: "50 000 so'm",
    url: `${urlStart}10077${urlEnd}`,
  },
  {
    title: "20 000 MB",
    price: "65 000 so'm",
    url: `${urlStart}10078${urlEnd}`,
  },
  {
    title: "30 000 MB",
    price: "75 000 so'm",
    url: `${urlStart}10079${urlEnd}`,
  },
  {
    title: "50 000 MB",
    price: "85 000 so'm",
    url: `${urlStart}10080${urlEnd}`,
  },
  {
    title: "75 000 MB",
    price: "110 000 so'm",
    url: `${urlStart}10150${urlEnd}`,
  },
]

export default function App (props: Array<IItem>) {
  return (
    <Container>
      <Header>
        <Body style={{justifyContent: "center"}}>
          <Title>Megabayt</Title>
        </Body>
      </Header>
      <Content>
        <List>
          {items.map((item) => {
            return <Item {...item} />
          })}
        </List>
      </Content>
    </Container>
  );
}