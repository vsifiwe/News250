import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const titlewidth = width * 0.7;

export const NewsCard = (props) => (
    <Container style={{ elevation: 5 }}>
        <Text>{props.text}</Text>
        <Image source={{ uri: props.image }} resizeMode='contain' />
    </Container>
);

const Container = styled.View`
    flex-direction: row;
    background: white;
    height: 100px;
    /* padding: 12px 16px 12px; */
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    align-items: center;
    margin: 0px 5px 12px 5px;
`;

const Image = styled.Image`
    height: 100px;
    width: 90px;
    border-radius: 8px;
`;

const Text = styled.Text`
    font-weight: 600;
    width: ${titlewidth}px;
    /* font-size: 17px; */
    margin-left: 8px;
    text-transform: capitalize;
`;
