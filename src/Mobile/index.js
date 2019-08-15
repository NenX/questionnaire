import { inject, observer } from 'mobx-react';
// import { QUESTION_SYMBOL } from '../types';
import data from '../data.json';
import Strategies from './strategies';
import renderApp from '..';
import PageOver from './PageOver';
import './index.less';
import './skin.less';

const App = inject('store')(
  observer(props => {
    const { store } = props;
    const { questionList = [] } = data;
    const [state, setState] = useState({
      formData: {},
    });
    const setFormData = (key, value) => {
      setState({ ...state, formData: { ...state.formData, [key]: value } });
    };
    const { formData } = state;
    return (
      <div
        className="wj_preview survey-mobile skin"
        style={{ touchAction: store.coverClose ? 'manipulation' : 'none' }}
      >
        <div className="root-container">
          <div className="skin normal">
            <PageOver />

            <div className="page-survey " style={{ minHeight: '100vh' }}>
              <div className="progress">
                <div className="progress-bar">
                  <div className="progress-done  s-prog-done" style={{ width: '37.5%' }} />
                </div>
              </div>
              <div className="survey-container" style={{ overflow: 'visible', height: '100%' }}>
                <div className="question-list">
                  {questionList.map(question => {
                    const { id } = question;
                    return (
                      <Strategies
                        {...question}
                        onChange={value => setFormData(id, value)}
                        value={formData[id]}
                      />
                    );
                  })}
                </div>

                <div className="page-control">
                  <div className="page-control-btn-group">
                    <button className="btn btn-submit ">
                      <span>提交</span>
                    </button>
                  </div>
                </div>
                <div className="page-footer  copyright">
                  <div>Copyright © 1998-2019 Tencent</div>
                  <div>
                    <span>系统由</span>
                    <a href="https://wj.qq.com/">
                      <svg className="footer-logo" x="0px" y="0px" viewBox="0 0 29 30">
                        <polygon
                          className="logo-border"
                          points="0.3,16 0.3,18.1 10.7,29.3 28.7,18.1 28.7,15.6 18.4,12.9 17.5,14.3 25.8,16.7 10.4,24.6 2.8,17.4 6.4,16.2 4.9,14.5"
                        />
                        <path
                          className="logo-ok"
                          d="M2.8,9.5L4.3,8l7,6.4c0,0,4.3-5.4,7.1-8.5c3.7-4.1,5.7-5.6,5.7-5.6l1,1.7c0,0-3.1,3.3-6.8,8.6c-3.5,5.1-5.9,9.7-5.9,9.7h-1.5L2.8,9.5z"
                        />
                      </svg>
                      <span>腾讯问卷</span>
                    </a>
                    <span>提供</span>
                  </div>
                  <div>
                    <a href="/xy/agreement.html">
                      <span>用户协议</span>
                    </a>
                    <span />
                    <a href="http://www.qq.com/contract.shtml">
                      <span>服务协议</span>
                    </a>
                    <span />
                    <a href="https://privacy.qq.com/yszc-m.htm">
                      <span>隐私政策</span>
                    </a>
                    <span />
                    <a>
                      <span>举报该问卷</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tap-event-frame" style={{ display: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    );
  })
);
renderApp(App);
