const style = {
  "display": "block",
  "margin": "10px 0 !important",
  "padding": "8px",
  "border": "1px solid #ccc"
}

export default React.memo(
  (({ value, onChange }) => {
    return (
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        style={style}
      />
    );
  })
);
