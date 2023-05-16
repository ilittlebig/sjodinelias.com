interface FormFieldProps {
  placeholder?: string,
  error?: boolean,
  onChange?: () => void,
  name: string,
  value: string,
}

const FormField = ({ placeholder, error, onChange, name, value }: FormFieldProps) => {
  return (
    <div>
      <input className="
	    bg-gray-50
	    border
	    border-gray-300
	    text-gray-900
	    text-sm
	    rounded-lg
	    w-full
	    p-2.5"
	    placeholder={placeholder}
		onChange={onChange}
		name={name}
		value={value}
	  />
	  {error && <p className="font-regular text-sm text-red-500 mt-1">*{error}</p>}
    </div>
  )
}

export default FormField
