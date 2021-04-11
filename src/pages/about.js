import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';



 const about = ({about}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        {/* <div className={styles.image_container}>
          <Image
              src="/img/profile.jpg" // Route of the image file
              className={styles.borderCircle}
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="devmuangi"/>
        </div>  */}
        container-left
      </div>
      <div className={styles.container_right}>
        container right
      </div>
   
    </div>
  );
};
export default about;
