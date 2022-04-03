import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MovieDetail } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditInterface';
import Icon from 'react-native-vector-icons/AntDesign';
import currencyFormater from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
    movieDetail: MovieDetail
    cast: Cast[]
}


const MovieDetailsCard = ( {movieDetail, cast}: Props ) => {

    return(
        <>
            <View style={styles.container}>
                <Icon size={30} color='gray' name='star' />
                <Text style={styles.textRating}>{movieDetail.vote_average}</Text>
            </View>
            <View>
                <Text style={styles.genres}>
                    - { movieDetail.genres.map(g => g.name).join(', ')}
                </Text>
            </View>
            <View style={styles.contentInfo}>
                <Text style={styles.historyText}>- Sinopsis</Text>
                <Text style={{ fontSize: 16}}>{movieDetail.overview}</Text>
            </View>
            <View>
                <Text>- Presupuesto</Text>
                <Text>{currencyFormater.format(movieDetail.budget, {code: 'USD'})}</Text>
            </View>

            <View style={styles.contentInfo}>
                <Text style={styles.historyText}>- Actores</Text>
                
                <FlatList 
                    style={{ height: 70}}
                    horizontal={true}
                    data={cast}
                    renderItem={ ({item}) => <CastItem actor={item} />}
                    keyExtractor={ (item) => item.id.toString()}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //backgroundColor: 'green'
        alignItems: 'center'
    },
    textRating: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 5
    },
    genres: {
        fontSize: 15,
        fontWeight: '700',
        marginTop: 5
    },
    contentInfo: {
        marginVertical: 10
    },
    historyText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default MovieDetailsCard;