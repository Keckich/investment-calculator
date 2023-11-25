export default function InputData({ title, titleKey, onChange, ...props }) {
  return (
    <div key={titleKey}>
      <label>{title}</label>
      <input type="number" onChange={(event) => onChange(titleKey, event.target.value)} {...props} />
    </div>
  );
}