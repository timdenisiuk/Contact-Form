import Link from 'next/link'
import Head from 'next/head'

const ThankYou = () => {

    //Simple thank you page to redirect the user after sending the email
    return ( 
        <>
            <Head>
                <title>Thank You</title>
            </Head>
            <div className="box-border p-0 m-0 font-sans font-bold bg-blue-200">
                <main className="flex flex-col items-center min-h-screen p-8 font-merriweather">
                    <h1 className="pb-4 text-2xl lg:text-6xl">Thank You!</h1>
                    <h1 className="text-lg lg:text-4xl">You should hear from us soon.</h1>
                    <Link href="/" className="pt-12 text-2xl text-blue-600 underline">Home</Link>
                </main>
            </div>
        </>
     );
}
 
export default ThankYou;