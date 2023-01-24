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
      <div className="m-0 p-0 box-border font-sans font-bold bg-blue-200">
        <main className="p-8 flex flex-col items-center min-h-screen">
          <h1 className="text-5xl mr-80 mb-14 pr-96 ">Contact us!</h1>
          <p className="text-xl pb-28">Questions? Comments? Concerns? Send us an email, and we will get back to you as soon as possible!</p>
          <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setIsTriggered(true) }>Contact Us</button>
          <Form trigger={isTriggered} setTrigger={setIsTriggered} route={router}/>
        </main>
      </div>
    </>
  )
}
