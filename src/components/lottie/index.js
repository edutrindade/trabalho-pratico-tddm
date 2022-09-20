import React from 'react';
import Football from '../../assets/animations/football-animation-orange-background.json';
import Lottie from 'lottie-react-native';

export default function LogoAnimation() {

    return (

        <Lottie
            style={{ width: 200 }}
            source={Football}
            autoPlay
            loop={false}
        />
    );
}