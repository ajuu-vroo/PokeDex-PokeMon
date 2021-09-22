import Link from 'next/link'

function Id({ data }) {
    function iconTypeFinder(item) {
        if (item.type.name === "fire") {
            return '   🔥'
        } else if (item.type.name === 'grass') {
            return '   🍀'
        } else if (item.type.name === 'poison') {
            return '   ☠️'
        } else if (item.type.name === 'flying') {
            return '   🌫️'
        } else if (item.type.name === 'water') {
            return '   💦'
        } else if (item.type.name === 'bug') {
            return '   🐛'
        } else if (item.type.name === 'normal') {
            return '   ♦️'
        } else if (item.type.name === 'electric') {
            return '   ⚡'
        }else if (item.type.name === 'fairy') {
            return '   🧚'
        }
        else if (item.type.name === 'ghost') {
            return '   👻'
        }
        else if (item.type.name === 'ground') {
            return '   🛣️'
        }
        else if (item.type.name === 'steel') {
            return '   ⛓️'
        }
        else if (item.type.name === 'dragon') {
            return '   🐲'
        }
        else if (item.type.name === 'ice') {
            return '   ❄️'
        }
        else if (item.type.name === 'dark') {
            return '   🖤'
        }
        else if (item.type.name === 'fighting') {
            return '   💢'
        }
        else if (item.type.name === 'psychic') {
            return '   🔮'
        }else if (item.type.name === 'rock') {
            return '   🗿'
        }
    }
    return (
        <div className='w-96 flex-col justify-center mx-auto border-4 border-gray-100 shadow-2xl' >
            <img src={data.img} height={300} width={300} className="ml-10" />
            <h1 className='text-center text-4xl font-extrabold text-gray-800'>{data.forms[0].name.toUpperCase()}</h1><hr />
            <div className='mt-3 flex pl-10'>
                <h2>Pokemon Type ➣ </h2>
                <div>

                    {data.types.map((item, index) => {
                        let icon = iconTypeFinder(item)
                        return <h4 key={index}>{index + 1 + ". "}{item.type.name.toUpperCase() + icon}</h4>

                    })}

                </div>
            </div>
            <div className='mt-2 flex pl-10'>
                <h2>Top Moves ➣ </h2>
                <div>
                    <h4>{"1. "}{data?.moves[0]?.move.name.toUpperCase()}</h4>
                    <h4>{"2. "}{data?.moves[1]?.move.name.toUpperCase()}</h4>
                </div>
            </div>
            <div className='mt-2 flex pl-10'>
                <h2>Weight ➣   </h2>
                <h4>{data.weight}</h4>

            </div>
            <div className='mt-10 pl-32 mb-14' ><Link href='/pokemon' >
                <a className='text-blue-500'>
                    <h2 className='underline hover:font-semibold'>Go Back 🡬</h2>
                </a>
            </Link>
            </div>
        </div>
    )
}
export async function getStaticProps({ params }) {
    let id = params.id;
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await rawData.json();
    let corrrectedIndex = ('00' + (id)).slice(-3)
    let img = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${corrrectedIndex}.png`

    data.img = img
    return {
        props: {
            data,
        }
    }
}

export async function getStaticPaths() {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=384`)
    const data = await rawData.json()
    const paths = data.results.map((id,index) =>({
        params: {id: (index+1).toString()},
    }))
    return {
      paths,
      fallback: false ,
    };
  }

export default Id;