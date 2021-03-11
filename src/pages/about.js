import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const about=() => {
  return (
    <div className={styles.container}>
        <div>
        <h1>about</h1>
        </div>
      
    </div>
  );
};

export const getServerSideProps = async pageContext => {
    
};
