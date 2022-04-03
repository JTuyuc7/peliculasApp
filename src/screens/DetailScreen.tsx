import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { RouteStackParams } from '../navigation/Navigator';
import { useNavigation } from '@react-navigation/native';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetailsCard from '../components/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('screen');
interface Proos extends StackScreenProps<RouteStackParams, 'DetailScreen'>{};

const DetailScreen = ({route}: Proos) => {
    const navigation = useNavigation();
    const movie = route.params;
    const { original_title, backdrop_path, overview, title, video, vote_average, vote_count, poster_path } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const { isLoading, movieDetails, cast } = useMovieDetails(movie.id);

    return(
        <>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: imgUrl
                        }}
                        style={ styles.imagePoster}
                    />
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{original_title}</Text>
                    <Text style={styles.subTitle}>{title}</Text>

                    <View style={{ marginTop: 10, marginBottom: 20}}>
                            {
                                isLoading ? (
                                    <View>
                                        <ActivityIndicator size={35} color='blue' />
                                    </View>
                                ) : (
                                    <MovieDetailsCard movieDetail={movieDetails!} cast={cast!} />
                                )
                            }

                    </View>
                </View>
                <Icon  
                    onPress={() => navigation.goBack()}
                    name='arrow-back-outline'
                    color="white"
                    size={50}
                    style={styles.backButton}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: height * 0.75,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 30,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        overflow: 'hidden'
    },
    imagePoster: {
        flex: 1,
        resizeMode: 'stretch',
    },
    contentContainer: {
        marginHorizontal: 20,
        marginTop: 10
    },
    title: {
        fontSize: 16,
        opacity: 0.8
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 100,
        marginTop: 15,
        marginLeft: 10
    }
})

export default DetailScreen;