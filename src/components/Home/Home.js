import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieListing from '../MovieListing/MovieListing'
import MovieApi from '../../common/apis/movieApi'
import { APIKEY } from '../../common/apis/movieApiKey'
import { addMovies } from '../../features/movieSlice'
import  './Home.scss'


const Home = () => {
  const movieText = 'Harry'
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("Err :", error)
        })

      dispatch(addMovies(response.data))
    }

    fetchMovies();
  }, [])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home
