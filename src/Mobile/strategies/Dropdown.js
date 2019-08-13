const style = {
  "display": "block",
  "margin": "10px 0 !important",
  "padding": "8px",
  "border": "1px solid #ccc"
}


export default React.memo(
  (({ dataset, value, onChange }) => {
    const target = dataset.find(_ => _.id === value);
    const label = target && target.label;
    // const menu = (
    //   <Menu
    //     onClick={({ key }) => {
    //       onChange(key);
    //     }}
    //   >
    //     {dataset.map(({ label: _label, id }) => {
    //       return <Menu.Item key={id}>{_label}</Menu.Item>;
    //     })}
    //   </Menu>
    // );

    return (
      // <Dropdown overlay={menu}>
      //   <div style={style}>
      //     <div style={{ overflow: 'hidden' }}>
      //       {label}

      //       <Icon type="down" style={{ float: 'right', paddingTop: '6px' }} />
      //     </div>
      //   </div>
      // </Dropdown>
      123
    );
  })
);
