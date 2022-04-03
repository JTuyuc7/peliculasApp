import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {

    // Loading
    const [ isLoading, setIsLoading ] = useState(true);
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    useEffect(() => {
        getMovies();
    },[]);

    const getMovies = async () => {

        const nowPlaying = movieDB.get<MovieResponse>('/now_playing');
        const popular    = movieDB.get<MovieResponse>('/popular');
        const topRated   = movieDB.get<MovieResponse>('/top_rated');
        const upcoming   = movieDB.get<MovieResponse>('/upcoming');

        const response = await Promise.all([ nowPlaying, popular, topRated, upcoming ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        });
        
        setIsLoading(false);
    }

    return {
        ...moviesState,
        isLoading,
    }
}

export default useMovies;