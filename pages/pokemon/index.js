import Pokeman from '../../components/Pokeman'
import Head from 'next/head'
import { useState } from 'react'

function Pokemon({ result }) {
    const [searched, setSearched] = useState()
    function handleSearch(e){
        setSearched(e.target.value);
        // console.log(searched)
    }
    return (
        <div className='bg-gray-50 flex-row mx-auto w-96'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bellota&display=swap" rel="stylesheet" />
            </Head>
            <h1 className='text-center mb-10 pt-5 font-extrabold text-3xl font-lol' >Top 100 Pokemon</h1>
            <input className='bg-gray-200 focus-within:ring-1 focus-within:ring-gray-600 rounded-xl w-full h-10 
            pl-4 text-xl placeholder-[rgb(134,141,157)] outline-none active:outline-none focus-within:outline-none' type='search' placeholder='Search for a pokemon by name.' onChange={handleSearch} />

            {searched 
            ? result.map((item, index) => {
                if(searched.includes(item.name)){
                return <Pokeman img={item.img} url={index} name={item.name} key={index} />}

            })
            : result.map((item, index) => {
                return <Pokeman img={item.img} url={index} name={item.name} key={index} />

            })}
        </div>
    )
}

export const getStaticProps = async () => {
    const rawData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const data = await rawData.json();
    const { results } = data

    const result = results.map((item, index) => {
        let corrrectedIndex = ('00' + (index + 1)).slice(-3)
        let img = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${corrrectedIndex}.png`
        return {
            ...item,
            img
        }
    })

    return {
        props: {
            result
        }
    }

}

export default Pokemon

