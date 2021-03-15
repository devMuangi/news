import Link from 'next/link'
import styles from "../styles/HomeItem.module.css";


const HomeItem = ({article}) => {

    return(
        <>
         <Link href="/article/[id]" as={`/article/${article.id}`}>
             <div>
             <a className={styles.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
             </div>
            
        </Link>
        </>
 
        
      
    )
}
export default HomeItem;