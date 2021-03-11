import Head from 'next/head'
import styles from '../styles/Home.module.css'

 const about = ({about}) => {
    console.log("about")
  return (
    <div className={styles.container}>
        <div>
        <h1>about</h1>
        </div>
      
    </div>
  );
};
export default about;

// export const getServerSideProps = async pageContext => {
//     const apiResponse = await fetch(
//         "https://my-json-server.typicode.com/devMuangi/news/about"
//     );
//         const about = await apiResponse.json();
//     return {
//         props: {
//             about: about
//         }
//     }
// };
