import type { BuilderField, DynamicFormValue } from './types'
import DynamicFieldRenderer from './DynamicFieldRenderer'

type DynamicFormRendererProps = {
  fields: BuilderField[]
  formData: DynamicFormValue
  readOnly?: boolean
  onChange: (key: string, value: any) => void
}

export default function DynamicFormRenderer({
  fields,
  formData,
  readOnly,
  onChange,
}: DynamicFormRendererProps) {
  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <DynamicFieldRenderer
          key={field.id}
          field={field}
          value={formData[field.key]}
          readOnly={readOnly}
          onChange={(value) => onChange(field.key, value)}
        />
      ))}
    </div>
  )
}
