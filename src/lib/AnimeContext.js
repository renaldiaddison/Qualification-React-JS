import { useQuery } from '@apollo/client';
import React, { Children, createContext } from 'react'
import { ALL_ANIME } from './AllAnime';

export const AnimeContext = createContext();

export default function AnimeListProvider({ children }) {

  const { loading, error, data } = useQuery(ALL_ANIME, {
    variables: {
      page: 1,
      perPage: 60,
    }
  })

  if (loading) return <h1 className="m-10 font-bold">Loading...</h1>

  if (error) return <h1 className="m-10 font-bold">Error...</h1>

  return (
    <AnimeContext.Provider value={data}>
      {children}
    </AnimeContext.Provider>
  )
}
