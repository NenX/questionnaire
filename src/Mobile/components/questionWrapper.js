import styles from './questionWrapper.module.less'
export default props => {
    return (


        <section className="question" tabindex="-1" id="question_q-2-O8kw">
            <div className="question-head ">
                <div className="question-title">
                    <span class="question-seq"><b>01</b>
                    </span>
                    <span class="text">我是题目标题</span>
                    <span className="question-required">*</span>
                </div>
                <div className="question-desc s-ques-desc">我是题目备注</div>
            </div>
            <div className="question-body">
                <div class="cell inputs-select-cell">
                    <div class="cell-m">请选择</div>
                    <div class="cell-ft">
                        <svg viewBox="0 0 48 48" fillRule="evenodd" class="icon icon-arrow-down">
                            <path d="M21.2,30.4L8.4,17.6l2.8-2.8L24,27.5l12.7-12.7l2.8,2.8L24,33.2L21.2,30.4z"></path>
                        </svg>
                    </div>
                    <select class="inputs-select"><option value="o-101-EFGH">选项</option>
                        <option value="o-100-ABCD">选项</option>
                        <option value="98">其他____</option>
                    </select>
                </div>
            </div>
        </section>
    )
}