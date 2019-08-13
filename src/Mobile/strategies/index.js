import { QUESTION_SYMBOL } from '@/types';
import Single from './Single';
import Multiple from './Multiple';
import DropdownType from './Dropdown';
import Blank from './Blank';
import Score from './Score';
import Remark from './Remark';
import styles from './index.module.less'
import useScroll from '@/utils/useScroll';

const { single, multiple, dropdown, blank, score, remark } = QUESTION_SYMBOL;

const RenderType = {
  [single]: Single,
  [multiple]: Multiple,
  [dropdown]: DropdownType,
  [score]: Score,
  [blank]: Blank,
  [remark]: Remark,
};


export default inject("store")(props => {

  const [ref, scroll] = useScroll();
  const { type, store, id } = props;


  const { questionToScroll, setQuestionToScroll } = store
  useEffect(() => {
    if (questionToScroll === id) {
      scroll();
      setQuestionToScroll(null)
    }
  }, [questionToScroll]);

  const Type = RenderType[type];
  return (
    <div ref={ref} className={styles.question}>
      <Type {...props} />
    </div>
  );
});
