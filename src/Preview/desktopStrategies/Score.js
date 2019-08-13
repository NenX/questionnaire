import { Rate } from 'antd';

export default React.memo(
  connect(null)(({ value, onChange }) => {
    return <Rate value={value} onChange={onChange} />;
  })
);
