import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AnimeContext } from '../lib/AnimeContext';
import { useLocalStorage } from '../lib/LocalStorage';

const Detail = () => {


  const animeData = useContext(AnimeContext);

  const { id } = useParams();

  const currAnime = animeData.Page.media.find(e => e.id.toString() === id)
  const [clicked, setClicked] = useState(false)
  const [fav, setFav] = useLocalStorage("fav", [])

  function setFavButton() {
    if (fav.filter(e => e.id == id).length > 0) {
      const newArr = fav.filter(e => {
        return e.id != id;
      })
      setFav(newArr)
    } else {
      setClicked(true)
      fav.push(currAnime)
      setFav(fav)
    }
  }

  useEffect(() => {
    if (fav.filter(e => e.id == id).length > 0) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }, [fav])

  return (
    <div className=''>
      <div className='flex flex-col items-center content-center'>
        <h1 className='font-bold text-2xl w-96 text-center m-10'>{currAnime.title.romaji}</h1>
        <img src={currAnime.coverImage.large} />
        <p className='text-xl text-justify p-10 drop-shadow-lg'>{currAnime.description}</p>
      </div>
    </div>
  )
}

export default Detail