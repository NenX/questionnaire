import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';

// function useUncover(params) {
//     const ref = useRef(null)
//     useEffect(() => {
//         // ref

//     })
//     return [bind(),]
// }

const initY = 300;

export default inject('store')(({ store }) => {
  const myRef = useRef(null);

  const [{ y }, set] = useSpring(() => ({ y: ~initY + 1 }));

  const bind = useDrag(
    ({ down, delta, memo = y.getValue(), distance }) => {
      if (down) {
        set({ y: delta[1] + memo, immediate: down, config: { velocity: 2, decay: true } });
      } else if (distance > initY) {
        set({ y: -999, immediate: down, config: { velocity: 2 } });
        store.updateState('coverClose', true);
      } else {
        set({ y: ~initY + 1, immediate: down, config: { velocity: 200 } });
      }
      return memo;
    },
    {
      domTarget: myRef,
      event: { passive: true },
    }
  );
  const height = window.innerHeight + initY;
  const style = {
    transform: interpolate(y, y => `translate3d(0,${y}px,0) `),
    height: `calc(${height}px)`,
  };

  useEffect(bind, [bind]);
  return (
    <animated.div ref={myRef} className="page page-cover  animated" style={style}>
      <div className="page-cover-screen-wrap" style={{ top: 'calc(300px)', height: 'calc(570px)' }}>
        <div className="skin-mobile-top-img-wrap" style={{ height: '0' }} />
        <div className="page-cover-content-wrap">
          <div className="page-cover-content">
            <div className="page-cover-pic">
              <div className="page-cover-pic-laptop">
                <div className="page-cover-pic-laptop-t" />
                <div className="page-cover-pic-laptop-b" />
              </div>
              <div className="page-cover-pic-hook">
                <div className="page-cover-pic-paper">
                  <span className="page-cover-pic-paper-line l1" />
                  <span className="page-cover-pic-paper-line l2" />
                  <span className="page-cover-pic-paper-line l3" />
                  <span className="page-cover-pic-paper-line l4" />
                  <span className="page-cover-pic-paper-line l5" />
                  <span className="page-cover-pic-paper-line l6" />
                  <span className="page-cover-pic-paper-line l7" />
                  <span className="page-cover-pic-paper-block" />
                </div>
                <div className="page-cover-pic-pen">
                  <svg viewBox="0 0 20 114" className="icon-pen" fillRule="evenodd">
                    <path className="icon-pen-body " d="M0,20h20v95H0V20z" />
                    <path className="icon-pen-head" d="M0,20h20L10,1L0,20z" />
                    <path className="icon-pen-point" d="M5,10.5h10L10,1L0,20z" />
                  </svg>
                </div>
              </div>
              <div className="page-cover-pic-quote-l">
                <span className="page-cover-pic-quote-l-bg">
                  <svg viewBox="0 0 82 60" className="icon-bubble " fillRule="evenodd">
                    <path d="M4,0h74c2.209,0,4,1.791,4,4v40c0,2.209-1.791,4-4,4H4c-2.209,0-4-1.791-4-4V4C0,1.791,1.791,0,4,0z" />
                    <path d="M12,46v14l14-14H12z" />
                  </svg>
                </span>
                <span className="page-cover-pic-quote-l-line l1" />
                <span className="page-cover-pic-quote-l-line l2" />
                <span className="page-cover-pic-quote-l-line l3" />
              </div>
              <div className="page-cover-pic-quote-r">
                <span className="page-cover-pic-quote-r-bg" />
                <span className="page-cover-pic-quote-r-dot  d1" />
                <span className="page-cover-pic-quote-r-dot  d2" />
                <span className="page-cover-pic-quote-r-dot  d3" />
              </div>
            </div>
            <h2 className="page-cover-title">问卷标题</h2>
            <p className="page-cover-instro">
              <strong>
                为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！
              </strong>
            </p>
            <a className="page-cover-icon " style={{ visibility: 'visible' }}>
              <svg className="page-cover-icon-arr " x="0px" y="0px" viewBox="0 0 40 42">
                <path d="M18,0h4v36h-4V0z M1.6,23l2.8-2.8l18.4,18.4L20,41.4L1.6,23z M17.1,38.6l18.4-18.4l2.8,2.8L20,41.4L17.1,38.6z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="skin-mobile-bottom-img-wrap" style={{ height: 0 }} />
      </div>
    </animated.div>
  );
});
