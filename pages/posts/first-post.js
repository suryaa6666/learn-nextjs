import Head from "next/head"
import Link from "next/link"
import Script from "next/script"

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post!</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => {
                        console.log("script finish to load!")
                    }}
                />
            </Head>
            <h1>
                Serah lu dah hehe
            </h1>
            <h1>
                <Link href={"/"}> Click to go home! </Link>
            </h1>
        </>
    )
}