import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';


 const about = ({about}) => {
  return (
    <div className={styles.container}>
       <Head>
        <title>about me </title>
      </Head>
      
        <div>
        <h1>about me</h1>
        <Image
    src="/img/profile.jpg" // Route of the image file
    className={utilStyles.borderCircle}
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="devmuangi"
  />
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



const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)
