import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDetail } from '../interfaces/movieInterface';
import { Credits, Cast  } from '../interfaces/creditInterface';

interface MovieDetails {
    isLoading: boolean;
    movieDetails?: MovieDetail;
    cast?: Cast[];
}

const useMovieDetails = ( movieId: number ) => {

    const [ movieState, setMovieState ] = useState<MovieDetails>({
        isLoading: true,
        movieDetails: undefined,
        cast: []
    });

    useEffect(() => {
        getMovieDetails()
    },[]);

    const getMovieDetails = async () => {
        const resultMovieDetails = movieDB.get<MovieDetail>(`/${movieId}`);
        const creditsDetails =     movieDB.get<Credits>(`/${movieId}/credits`)
        
        const [ detailsResponse, castResponse ] = await Promise.all([resultMovieDetails, creditsDetails ])
        setMovieState({
            isLoading: false,
            movieDetails: detailsResponse.data,
            cast: castResponse.data.cast
        })
    }

    return{
        ...movieState
    }
}

export default useMovieDetails;