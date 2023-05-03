interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type = "text", onChange, disabled, label }) => {
  return (
    <div className="w-full">
      {label && <p className="mb-2 text-xl font-semibold text-white">{label}</p>}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
   );
}
 
export default Input;