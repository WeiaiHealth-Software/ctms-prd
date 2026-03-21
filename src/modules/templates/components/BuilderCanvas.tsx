import SectionCard from '../../../components/common/SectionCard'
import EmptyState from '../../../components/common/EmptyState'
import type { BuilderField } from '../../form-engine/types'
import BuilderCanvasField from './BuilderCanvasField'

type BuilderCanvasProps = {
  fields: BuilderField[]
  selectedFieldId: string | null
  onSelect: (fieldId: string) => void
  onMoveField: (fieldId: string, direction: 'up' | 'down') => void
  onDuplicateField: (fieldId: string) => void
  onDeleteField: (fieldId: string) => void
}

export default function BuilderCanvas({
  fields,
  selectedFieldId,
  onSelect,
  onMoveField,
  onDuplicateField,
  onDeleteField,
}: BuilderCanvasProps) {
  return (
    <SectionCard title="Schema 字段列表">
      {fields.length === 0 ? (
        <EmptyState title="暂无字段" description="请先从左侧组件库添加字段" />
      ) : (
        <div className="space-y-3">
          {fields.map((field) => (
            <BuilderCanvasField
              key={field.id}
              field={field}
              active={selectedFieldId === field.id}
              onSelect={() => onSelect(field.id)}
              onMoveUp={() => onMoveField(field.id, 'up')}
              onMoveDown={() => onMoveField(field.id, 'down')}
              onDuplicate={() => onDuplicateField(field.id)}
              onDelete={() => onDeleteField(field.id)}
            />
          ))}
        </div>
      )}
    </SectionCard>
  )
}
