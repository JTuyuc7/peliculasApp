import React, { useRef } from 'react';
import { View, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();
/*     const opacity = useRef( new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    } */

    return(
        <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
            <Animated.View 
                style={{ 
                    backgroundColor: '#084f6a', 
                    width: 150, 
                    height: 150, 
                    borderWidth: 5, 
                    borderColor:'white',
                    opacity: opacity
                }}
            />

            <Button
                title='Fade in'
                onPress={() => fadeIn() }
            />

            <Button
                title='Fade Out'
                onPress={() => fadeOut() }
            />
        </View>
    )
}

export default FadeScreen;