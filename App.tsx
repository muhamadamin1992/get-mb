import React from 'react';
import { Container, Header, Content, List, Body, Title } from 'native-base';
import Item from './components/Item';
import IItem from "./models/item";

const items: Array<IItem> = [
  {
    title: "500 MB",
    price: "10 000 so'm",
    url: "tel:*147*10072*39722%23"
  },
  {
    title: "1500 MB",
    price: "15 000 so'm",
    url: "tel:*147*10073*39722%23"
  },
  {
    title: "3000 MB",
    price: "24 000 so'm",
    url: "tel:*147*10074*39722%23"
  },
  {
    title: "5000 MB",
    price: "32 000 so'm",
    url: "tel:*147*10075*39722%23"
  },
  {
    title: "8000 MB",
    price: "41 000 so'm",
    url: "tel:*147*10076*39722%23"
  },
  {
    title: "12 000 MB",
    price: "50 000 so'm",
    url: "tel:*147*10077*39722%23"
  },
  {
    title: "20 000 MB",
    price: "65 000 so'm",
    url: "tel:*147*10078*39722%23"
  },
  {
    title: "30 000 MB",
    price: "75 000 so'm",
    url: "tel:*147*10079*39722%23"
  },
  {
    title: "50 000 MB",
    price: "85 000 so'm",
    url: "tel:*147*10080*39722%23"
  },
  {
    title: "75 000 MB",
    price: "110 000 so'm",
    url: "tel:*147*10150*39722%23"
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