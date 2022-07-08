import Link from "next/link"

const NewsPage = () => {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li><Link href="/news/nextjs-is-good">Nextjs is good</Link></li>
                <li>Something else</li>
            </ul>
        </>
    )
}

export default NewsPage