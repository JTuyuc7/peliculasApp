import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditInterface';

interface Props {
    actor: Cast
}

const CastItem = ( {actor}: Props) => {

    const imgData = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return(
        <>
            <View style={ styles.container}>
                {
                    actor.profile_path && (
                        <View>
                            <Image 
                                source={{ uri: imgData }}
                                style={{ width: 50, height: 50, borderRadius: 5}}
                            />
                        </View>
                    )
                }
                <View style={{ marginLeft: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{actor.name}</Text>
                    <Text style={{fontSize: 14, opacity: 0.7}}>{actor.character}</Text>
                </View>

            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingRight: 20,
        paddingVertical: 6,
        width: 'auto',
        flex: 1,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.70,
        shadowRadius: 10.20,
        height: 60,
        elevation: 1,
        //borderBottomEndRadius: 40,
        //borderBottomStartRadius: 40,
    }
})

export default CastItem;