import styles from "../styles/Layout.module.css"
import News from "./News";
import Toolbar from "./Toolbar";

const Layout = ({children}) => {

    return(
        <>
        <Toolbar/>
            <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
      
    )
}
export default Layout;