import React from 'react';
import { Linking } from "react-native";
import { Text, ListItem, Button, Body } from 'native-base';
import IItem from '../models/item';

export default function Item (props: IItem) {
  function handePress() {
    Linking.openURL(props.url);
  }
  return (
    <ListItem >
      <Body>
        <Button block onPress={handePress}><Text>{ props.title }: { props.price }</Text></Button>
      </Body>
    </ListItem>
  );
}