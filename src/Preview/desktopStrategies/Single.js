import { Radio } from 'antd';

export default React.memo(
  inject("store")(({ dataset, value, onChange, dispatch, jumps = [] }) => {
    const { questionToScroll, setQuestionToScroll } = store
    return (
      <Radio.Group
        onChange={e => {
          const { value: selectedValue } = e.target;
          const jumpData = jumps.find(_ => _.condition === selectedValue);
          if (jumpData) {
            setQuestionToScroll(jumpData.target);
          }
          onChange(selectedValue);
        }}
        value={value}
        style={{ display: 'block' }}
      >
        {dataset.map(({ label, id }) => {
          return (
            <Radio value={id} key={id}>
              {label}
            </Radio>
          );
        })}
      </Radio.Group>
    );
  })
);
