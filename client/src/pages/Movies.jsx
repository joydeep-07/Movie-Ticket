import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle';

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="my-30 relative mb-60 px-6 md:px-16 lg:px40 xl:px44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" right="100px" />
      <BlurCircle bottom="100px" left="50px" />
      <h1 className="text-lg font-medium my-4">Now Showing</h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No Movies Available</h1>
    </div>
  );
}

export default Movies