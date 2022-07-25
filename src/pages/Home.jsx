import React, { useContext, useState } from 'react'
import Card from '../components/Card'
import { AnimeContext } from '../lib/AnimeContext'

const Home = () => {

    const data = useContext(AnimeContext)
    const [search, setSearch] = useState("")

    const searchAnimeList = data?.Page.media.filter((e) => {
        if (search) return e.title.romaji.toLowerCase().includes(search.toLowerCase())
        else return data
    })

    return (
        <div className="">
            <div className="relative m-10">
                <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" onChange={(e) => { setSearch(e.target.value) }} className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300" placeholder="Search" required />
            </div>

            {searchAnimeList ? <div className="flex flex-wrap items-center justify-center">{
                searchAnimeList.map((anime, i) => {
                    return (
                        <div className="m-10" key={anime.id}>
                            <Card data={anime} />
                        </div>
                    )

                })
            }</div> : null}
        </div>
    )
}

export default Home