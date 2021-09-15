import Pokeman from '../../components/Pokeman'
import Head from 'next/head'

function Pokemon({ result }) {
    return (
        <div className='bg-gray-50 flex-row mx-auto w-96'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bellota&display=swap" rel="stylesheet" />
            </Head>
            <h1 className='text-center mb-10 pt-5 font-extrabold text-3xl font-lol' >Top 100 Pokemon</h1>

            {result.map((item, index) => {
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

