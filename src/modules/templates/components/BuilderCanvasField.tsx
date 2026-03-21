import { Copy, GripVertical, Trash2 } from 'lucide-react'
import type { BuilderField } from '../../form-engine/types'

type BuilderCanvasFieldProps = {
  field: BuilderField
  active?: boolean
  onSelect: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onDuplicate: () => void
  onDelete: () => void
}

export default function BuilderCanvasField({
  field,
  active,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
}: BuilderCanvasFieldProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left rounded-xl border p-4 transition ${
        active ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <GripVertical className="w-4 h-4 text-slate-400 mt-1" />
          <div>
            <div className="font-medium text-slate-900">{field.label}</div>
            <div className="mt-1 text-xs text-slate-400">字段 Key：{field.key}</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs">
          {field.type}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onMoveUp()
          }}
          className="px-2 py-1 rounded-lg text-xs border border-slate-200 hover:bg-slate-50"
        >
          上移
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onMoveDown()
          }}
          className="px-2 py-1 rounded-lg text-xs border border-slate-200 hover:bg-slate-50"
        >
          下移
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDuplicate()
          }}
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
        >
          <Copy className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="p-2 rounded-lg text-rose-500 hover:bg-rose-50"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </button>
  )
}
