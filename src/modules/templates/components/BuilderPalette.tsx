import {
  Calendar,
  FileText,
  Hash,
  ListChecks,
  PanelTop,
  Rows3,
  Table,
  Type,
} from 'lucide-react'
import SectionCard from '../../../components/common/SectionCard'
import type { BuilderFieldType } from '../../form-engine/types'

const fieldItems: { type: BuilderFieldType; label: string; icon: React.ReactNode }[] = [
  { type: 'section', label: '区块标题', icon: <PanelTop className="w-4 h-4" /> },
  { type: 'text', label: '单行文本', icon: <Type className="w-4 h-4" /> },
  { type: 'number', label: '数字输入', icon: <Hash className="w-4 h-4" /> },
  { type: 'date', label: '日期', icon: <Calendar className="w-4 h-4" /> },
  { type: 'select', label: '下拉选择', icon: <ListChecks className="w-4 h-4" /> },
  { type: 'radio', label: '单选', icon: <Rows3 className="w-4 h-4" /> },
  { type: 'textarea', label: '多行文本', icon: <FileText className="w-4 h-4" /> },
  { type: 'eyeGrid', label: '左右眼表格', icon: <Table className="w-4 h-4" /> },
  { type: 'matrix', label: '矩阵表格', icon: <Table className="w-4 h-4" /> },
  { type: 'dynamicList', label: '动态列表', icon: <FileText className="w-4 h-4" /> },
]

type BuilderPaletteProps = {
  onAdd: (type: BuilderFieldType) => void
}

export default function BuilderPalette({ onAdd }: BuilderPaletteProps) {
  return (
    <SectionCard title="组件库">
      <div className="space-y-3">
        {fieldItems.map((item) => (
          <button
            key={item.type}
            onClick={() => onAdd(item.type)}
            className="w-full rounded-xl border border-slate-200 p-3 text-left hover:border-blue-300 hover:bg-blue-50 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800">{item.label}</div>
                <div className="text-xs text-slate-400 mt-1">点击加入 schema</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </SectionCard>
  )
}
