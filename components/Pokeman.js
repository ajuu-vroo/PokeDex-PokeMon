import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'

function Pokeman({ img, name, url }) {

    return (<>

        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap" rel="stylesheet"/>
        </Head>
        <div className=' border-2 border-gray-100 w-96 my-3 bg-gray-100 shadow-md hover:shadow-xl transform transition  duration-300 hover:scale-105 '>
            <Link href={`/pokemon/${url + 1}`}>
                <a className='flex'>
                    <div>
                        <Image src={img} alt={name} width={100} height={100} loading='eager'/>
                    </div>
                    <div>
                        <h3 className='text-2xl pt-9 ml-5 text-left font-bold hover:underline font-lmao' >{name.toUpperCase()}</h3>
                    </div>
                </a>
            </Link>
        </div>
    </>
    )
}

export default Pokeman
