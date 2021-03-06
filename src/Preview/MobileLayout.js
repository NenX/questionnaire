import { Form, Button } from 'antd';
import { QUESTION_SYMBOL } from '@/types';
import data from '@/data.json'
const FormItem = Form.Item;
const { remark } = QUESTION_SYMBOL;



export default (props => {
  const { Strategies, isMobile = false } = props;
  const { questionnaireTitle = '', questionnaireSubTitle = '', questionList = [] } = data;
  const [state, setState] = useState({
    formData: {},
  });
  const setFormData = (key, value) => {
    setState({ ...state, formData: { ...state.formData, [key]: value } });
  };
  const { formData } = state;
  const col = isMobile ? {} : { labelCol: { xs: 4 }, wrapperCol: { xs: 18 } };
  return (
    <div style={{ background: 'white', padding: '10px', textAlign: 'left', fontSize: '16px' }}>
      <div style={{ fontSize: '18px', padding: '20px 0' }}>{questionnaireTitle}</div>
      <div style={{ fontSize: '14px', paddingBottom: '20px', color: '#999' }}>
        {questionnaireSubTitle}
      </div>

      <Form {...col}>
        {questionList.map((question, index) => {
          const { title, compulsory, id, type } = question;
          return (
            <FormItem
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
            </FormItem>
          );
        })}
      </Form>
      <Button onClick={() => console.log(formData)}>提交</Button>
    </div>
  );
});
