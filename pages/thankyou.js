import Link from 'next/link'
import Head from 'next/head'

const ThankYou = () => {

    //Simple thank you page to redirect the user after sending the email
    return ( 
        <>
            <Head>
                <title>Thank You</title>
            </Head>
            <div className="m-0 p-0 box-border font-sans font-bold bg-blue-200">
                <main className="p-8 flex flex-col items-center min-h-screen">
                    <h1 className="text-4xl">Thank you, you should hear from us soon</h1>
                    <Link href="/" className="pt-16 text-2xl underline text-blue-600">Home</Link>
                </main>
            </div>
        </>
     );
}
 
export default ThankYou;