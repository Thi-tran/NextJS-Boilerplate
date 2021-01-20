import Head from 'next/head'
import Image from 'next/image'

export default function Hello() {
    return (
        <>
            <Head>
                <title>Hello there :: My Blog</title>
                <meta property="og::title" content="Hello there :: My Blog" />
            </Head>

            <div>
                <h1>Hello There</h1>
                <Image
                    src="/post/hello-there/people-eat.jpg"
                    width={640}
                    height={427}
                />
            </div>
        </>
    )
}
