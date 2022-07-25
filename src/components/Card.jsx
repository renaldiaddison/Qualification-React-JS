import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../lib/LocalStorage'

const Card = ({ data }) => {

    const [fav, setFav] = useLocalStorage("fav", [])
    const [clicked, setClicked] = useState(false)


    function setFavButton() {
        if (fav.filter(e => e.id == data.id).length > 0) {
            const newArr = fav.filter(e => {
                return e.id != data.id;
            })
            setFav(newArr)
        } else {
            setClicked(true)
            fav.push(data)
            setFav(fav)
        }
    }

    useEffect(() => {
        if (fav.filter(e => e.id == data.id).length > 0) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }, [fav])

    return (
        <div className=" relative">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={setFavButton} className="w-7 h-7 absolute cursor-pointer bottom-1 right-1" fill={`${clicked ? "red" : "none"}`} viewBox="0 0 24 24" stroke={`${clicked ? "red" : "black"}`} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <Link to={"/anime/" + data.id}>
                <div className="px-6 py-4 h-[34rem] rounded-lg overflow-hidden shadow-md bg-white">

                    <img src={data.coverImage.large} className="w-64 h-96 mb-2 m-2 mt-4 rounded-lg"></img>
                    <div className="w-64">
                        <span className="font-bold flex flex-wrap ml-2">{data.title.romaji}</span>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Card