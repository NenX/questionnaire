import TextArea from 'antd/lib/input/TextArea';

export default React.memo(
  connect(null)(({ value, onChange }) => {
    return (
      <TextArea
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    );
  })
);
