// import phone_bg from '@/assets/phone_bg.png';
import MobileLayout from './MobileLayout';
import styles from './Mobile.module.less';
import Strategies from '../Mobile/strategies';



export default (() => {

  return (

    <div className={styles.contentWrap}>
      <MobileLayout Strategies={Strategies} isMobile />
    </div>
  );
});
