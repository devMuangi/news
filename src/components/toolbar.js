import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Home</div>
            <div onClick={() => router.push('/about')}>Home</div>
        </div>
    )
}
export default Toolbar;