import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { Movie,  } from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ( { title, movies } : Props ) => {

    return(
        <>
            <View style={{
                paddingVertical: 10,
            }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 5, paddingTop: 5, paddingBottom: 10}}>{title}</Text>

                <FlatList 
                    style={{ padding: 5}}
                    data={movies}
                    renderItem={ ({item}) => <MovieCard movie={item} heightCard={220} widthCard={150} paddingCard={5} />}
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal={ true }
                />
            </View>
        </>
    )
}

export default HorizontalSlider;