import styles from "../styles/Layout.module.css"
import Toolbar from "./Toolbar";

const Layout = ({Children}) => {

    return(
        <>
        <Toolbar/>
            <div className={styles.container}>
            <main className={styles.main}>
                <Toolbar/>
                {Children}
            </main>
        </div>
        </>
      
    )
}
export default Layout;