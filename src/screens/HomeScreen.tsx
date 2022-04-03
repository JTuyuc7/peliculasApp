import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBack';
import getImageColors from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('screen');

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { nowPlaying, topRated, upcoming, popular, isLoading, } = useMovies();
    const { setMainColors } = useContext(GradientContext)

    const getPostColor = async (index: number) => {
        const poster = nowPlaying[index].poster_path;
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster}`;
        
        const [primary = 'white', secondary = 'white' ] = await getImageColors(imgUrl);
        setMainColors({ primary, secondary})
    }

    useEffect(() => {
        if(nowPlaying.length > 0){
            getPostColor(0)
        }
    },[ nowPlaying ])

    if( isLoading ){
        return(
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator color="red" size={70} />
            </View>
        )
    }

    return(
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top, flex: 1, }}>
                    {/*<MovieCard movie={movies[0]} />*/}

                    <View style={{ height: 420, paddingVertical: 5}}>
                        <Carousel 
                            data={ nowPlaying }
                            renderItem={ ({item}) => <MovieCard movie={item} heightCard={400} widthCard={270} />}
                            sliderWidth={ windowWidth }
                            itemWidth={280}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ (index) => getPostColor(index) }
                        />
                    </View>

                    <View>
                        <HorizontalSlider movies={popular} title="Popular" />
                    </View>
                    <View>
                        <HorizontalSlider movies={upcoming} title="Upcoming" />
                    </View>
                    <View>
                        <HorizontalSlider movies={topRated} title="Top Rated" />
                    </View>
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen;