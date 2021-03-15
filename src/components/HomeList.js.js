import HomeItem from "./HomeItem"
import styles from "../styles/HomeList.module.css";



const HomeList = ({articles}) => {

    return(
        
        <div className={ styles.grid}>
        {articles.map((article) => (
          <HomeItem article={article}/>
        ))}
          
        </div>
        
      
    )
}
export default HomeList;