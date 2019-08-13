import { QUESTION_SYMBOL } from '../types';
import data from '../data.json'
import Strategies from './strategies';
import renderApp from '..'
import { inject, observer } from "mobx-react";

const { remark } = QUESTION_SYMBOL;



const App = (
    observer(
        props => {
            const { store } = props
            const { questionnaireTitle = '', questionnaireSubTitle = '', questionList = [] } = data;
            const [state, setState] = useState({
                formData: {},
            });
            const setFormData = (key, value) => {
                setState({ ...state, formData: { ...state.formData, [key]: value } });
            };
            const { formData } = state;
            return (
                <div style={{ background: 'white' }}>
                    <div style={{ fontSize: '18px', padding: '20px 0' }}>{questionnaireTitle}</div>
                    <div style={{ fontSize: '14px', paddingBottom: '20px', color: '#999' }}>
                        {questionnaireSubTitle}
                    </div>

                    <div >
                        {questionList.map((question, index) => {
                            const { title, compulsory, id, type } = question;
                            return (
                                <div
                                    key={id}
                                    label={
                                        type !== remark && (
                                            <span>
                                                {index + 1}.{title}{' '}
                                                {compulsory ? <span style={{ color: 'red' }}>*</span> : null}
                                            </span>
                                        )
                                    }
                                >
                                    <Strategies
                                        {...question}
                                        onChange={value => setFormData(id, value)}
                                        value={formData[id]}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={() => console.log(formData)}>提交</button>
                </div>
            );
        }
    ))
renderApp(App)