import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <h1>
      <Link href={"/posts/first-post"}> Click to go my first post! </Link>
    </h1>
  )
}
