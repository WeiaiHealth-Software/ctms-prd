type NumberFieldProps = {
  label: string
  value: string
  placeholder?: string
  required?: boolean
  readOnly?: boolean
  onChange: (value: string) => void
}

export default function NumberField({
  label,
  value,
  placeholder,
  required,
  readOnly,
  onChange,
}: NumberFieldProps) {
  return (
    <div>
      <label className="block text-sm text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-rose-500 ml-1">*</span>}
      </label>
      <input
        type="number"
        value={value || ''}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 bg-white read-only:bg-slate-50 read-only:text-slate-500"
      />
    </div>
  )
}
