import imageSrc from  "./wuxing.png";
// import "./"
// import "./a.css"
import styles from './A.module.scss';


function Wuxing() {
    // return <p>Wuxing</p>
    return <img src={imageSrc} className={styles.img} alt="" />;
    // <img src={imageSrc} alt="Image" />
}
  
export { Wuxing };
  