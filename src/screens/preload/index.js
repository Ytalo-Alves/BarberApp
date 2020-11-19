import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import Barberlogo from '../../assets/barber.svg';
import asyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await asyncStorage.getItem('token');
      if (token) {
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Barberlogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
