import Head from 'next/head'

export default function Meta(props) { 
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content={`placeholder`}
            />
        </Head>
        
     )
 }