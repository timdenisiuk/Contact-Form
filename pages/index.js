import Head from 'next/head'
import { Inter } from '@next/font/google';
import Form from '@/components/Form';
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  //State to check whether form should display or not
  const [isTriggered, setIsTriggered] = useState(false);

  //Router object to be used in the form
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="box-border w-screen h-screen p-0 m-0 overflow-hidden font-sans font-bold bg-blue-200">
        <main className="flex flex-col items-center min-h-screen p-8">
          <h1 className="pb-4 text-2xl text-center sm:text-center lg:text-5xl lg:pb-5">Contact us!</h1>
          <p className="pb-2 lg:text-xl">Questions? Comments? Concerns?</p>
          <p className="text-sm sm: lg:text-xl">Send us an email, and we will get back to you</p>
          <p className="pb-24 text-sm lg:text-xl lg:pb-28">as soon as possible!</p>
          <button className = "px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700"
          onClick={() => setIsTriggered(true) }>Contact Us</button>
          <Form trigger={isTriggered} setTrigger={setIsTriggered} route={router}/>
        </main>
      </div>
    </>
  )
}
