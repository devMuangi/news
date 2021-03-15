import Head from 'next/head';
import HomeList from '../components/HomeList.js'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
 
  return (
    <div>
      <Head>
        <title>devmuangi</title>
        <meta name='keywords' content='web development '/>
      </Head>
      
      {/* <div>
        {articles.map((article) => (
          <h3>{article.title}</h3>
        ))}
      </div> */}
     <HomeList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
