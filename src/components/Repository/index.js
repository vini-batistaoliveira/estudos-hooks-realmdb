import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText } from './styles';

export default function Repository({ data, onRefresh }){
    return(
        <Container>
            <Name>{data.name}</Name>
            <Description>{data.description}</Description>

            <Stat>
                <Stats>
                    <Icon name="star" size={16} color="#333"/>
                    <StatCount>{data.stars}</StatCount>
                </Stats>
                <Stats>
                    <Icon name="code-fork" size={16} color="#333"/>
                    <StatCount>{data.forks}</StatCount>
                </Stats>
            </Stat>

            <Refresh onPress={onRefresh}>
                <Icon name="refresh" color="#7159c1" size={16} />
                <RefreshText>Atualizar</RefreshText>
            </Refresh>
        </Container>
    );
}