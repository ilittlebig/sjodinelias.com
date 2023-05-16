interface textAreaProps {
  placeholder?: string,
  error?: boolean,
  onChange?: () => void,
  name: string,
  value: string,
}

const TextArea = ({ placeholder, error, onChange, name, value }: textAreaProps) => {
  return (
    <div>
      <textarea className="
        bg-gray-50
        border
        border-gray-300
        text-gray-900
        text-sm
        rounded-lg
        w-full
        p-2.5
        resize-none"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        rows={7}
      />
      {error && <p className="font-regular text-sm text-red-500 mt-1">*{error}</p>}
	</div>
  )
}

export default TextArea
