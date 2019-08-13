const style = {
  "display": "block",
  "margin": "10px 0 !important",
  "padding": "8px",
  "border": "1px solid #ccc"
}


export default
  inject("store")(({ dataset, value, onChange, store, jumps = [] }) => {
    const { questionToScroll, setQuestionToScroll } = store

    return (222
      // <Radio.Group
      //   onChange={e => {
      //     const { value: selectedValue } = e.target;
      //     const jumpData = jumps.find(_ => _.condition === selectedValue);
      //     if (jumpData) {
      //       setQuestionToScroll(jumpData.target);
      //     }
      //     onChange(selectedValue);
      //   }}
      //   value={value}
      //   style={{ display: 'block' }}
      // >
      //   {dataset.map(({ label, id }) => {
      //     return (
      //       <Radio style={style} value={id} key={id}>
      //         {label}
      //       </Radio>
      //     );
      //   })}
      // </Radio.Group>
    );
  })
