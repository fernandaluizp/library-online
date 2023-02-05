import './input.scss';

function Input({ label, type, placeholder = "" }) {
  return (
    <div className="input-group">
        <label className="input-group__label" htmlFor={label}>{label}</label>
        <input className="input-group__input" type={type} placeholder={placeholder} id={label}/>
    </div>

  );
}

export default Input;