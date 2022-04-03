import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { RouteStackParams } from '../navigation/Navigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props {
    movie: Movie;
    heightCard?: number;
    widthCard?: number;
    paddingCard?: number;
}

const MovieCard = ( {movie, heightCard = 350, widthCard = 270, paddingCard = 0}: Props ) => {

    const { original_title, backdrop_path, overview, title, video, vote_average, vote_count, poster_path } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={ () => navigation.navigate('DetailScreen' as never, movie as never )}
            style={{
                height: heightCard,
                width: widthCard,
                paddingHorizontal: paddingCard,
                paddingBottom: 10
            }}
        >
            <View style={styles.imgContainer}>
                <Image
                    //source={require('../assets/calculadora-ios.jpeg')}
                    source={{
                        uri: imgUrl
                    }}
                    style={ styles.imgCard }
                />
            </View>
        </TouchableOpacity>
    )
};

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        width: 270,
        height: 370,
        padding: 10,
    },
    imgContainer: {
        flex: 1,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 30,
    },
    imgCard: {
        flex: 1,
        borderRadius: 17,
        
    }
})

//https://training.linuxfoundation.org/training/implementing-devsecops-lfs262/