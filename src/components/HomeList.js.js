import HomeItem from "./HomeItem"
import styles from "../styles/HomeList.module.css";



const HomeList = ({articles}) => {

    return(
        
        <div>
        {articles.map((article) => (
          <HomeItem article={article}/>
        ))}
          
        </div>
        
      
    )
}
export default HomeList;