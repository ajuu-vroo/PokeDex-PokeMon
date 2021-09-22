import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router';

export default function Home() {

  const router = useRouter(); 

  return ( 
    <div className='bg-img h-screen'>
    <div className="mx-auto w-96 flex-column h-96 pt-10" >

      <h1 className='text-center text-4xl pt-10 font-extrabold text-red-800'>Welcome to Pokedex.</h1>
      <div className="ml-10 ">
      <Image src="/images/pokeball-pokemon-ball-png-images-4.png" alt=""
      width={300}
      height={300}
      className="animate-spin"/>
      </div>
    </div>
    <div className="mx-auto w-96 pt-10">
      <button className='focus:outline-none p-2 px-6 ml-28 pr-5 text-2xl mt-12 border-4 border-red-800 rounded-2xl shadow-xl font-bold bg-red-800 text-white active:bg-gray-900 duration-300 outline-none active:outline-none' onClick={()=>router.push('/pokemon')}>Explore</button>
    </div>
    </div>
  )
}
