import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>
        <Link href={"/posts/first-post"}> Click to go my first post! </Link>
        <Image src={"/profile.jpg"} width={144} height={144} alt="profile.jpg" />
      </h1>
    </>
  )
}
