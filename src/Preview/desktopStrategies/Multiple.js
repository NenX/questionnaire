import { Checkbox } from 'antd';

export default React.memo(
  connect(null)(({ dataset, value, onChange }) => {
    return (
      <Checkbox.Group
        onChange={_value => {
          onChange(_value);
        }}
        value={value}
      >
        {dataset.map(({ label, id }) => {
          return (
            <Checkbox value={id} key={id}>
              {label}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    );
  })
);
