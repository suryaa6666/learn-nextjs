import Link from "next/link"

export default function FirstPost() {
    return (
        <h1>
            <Link href={"/"}> Click to go home! </Link>
        </h1>
    )
}