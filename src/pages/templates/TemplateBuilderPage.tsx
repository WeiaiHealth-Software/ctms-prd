import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import SectionCard from '../../components/common/SectionCard'
import JsonPreview from '../../components/common/JsonPreview'
import DynamicFormRenderer from '../../modules/form-engine/DynamicFormRenderer'
import { useBuilderFields } from '../../modules/form-engine/hooks/useBuilderFields'
import { useDynamicForm } from '../../modules/form-engine/hooks/useDynamicForm'
import BuilderPropertyPanel from '../../modules/templates/components/BuilderPropertyPanel'
import BuilderPalette from '../../modules/templates/components/BuilderPalette'
import BuilderCanvas from '../../modules/templates/components/BuilderCanvas'
import TemplateMetaForm from '../../modules/templates/components/TemplateMetaForm'
import { defaultTemplateFields } from '../../data/mockTemplateSchema'

export default function TemplateBuilderPage() {
  const [readOnly, setReadOnly] = useState(false)
  const [meta, setMeta] = useState({
    name: '新建基线表',
    type: '基线访视',
    visit: 'V0 基线期',
    version: 'v0.1.0',
    status: '草稿',
  })

  const {
    fields,
    selectedField,
    selectedFieldId,
    setSelectedFieldId,
    addField,
    updateField,
    deleteField,
    duplicateField,
    moveField,
  } = useBuilderFields(defaultTemplateFields)

  const { formData, setFormData, resetForm, syncWithFields } = useDynamicForm(fields)

  useEffect(() => {
    syncWithFields()
  }, [fields])

  return (
    <div className="space-y-6">
      <Link to="/templates" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700">
        <ArrowLeft className="w-4 h-4" />
        返回模板中心
      </Link>

      <TemplateMetaForm value={meta} onChange={setMeta} />

      <SectionCard
        title="模板设计器"
        extra={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setReadOnly((prev) => !prev)}
              className="h-10 px-4 rounded-xl border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
            >
              {readOnly ? '切换编辑' : '切换只读'}
            </button>
            <button className="h-10 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
              保存草稿
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <BuilderPalette onAdd={addField} />
          </div>

          <div className="col-span-4">
            <BuilderCanvas
              fields={fields}
              selectedFieldId={selectedFieldId}
              onSelect={setSelectedFieldId}
              onMoveField={moveField}
              onDuplicateField={duplicateField}
              onDeleteField={deleteField}
            />
          </div>

          <div className="col-span-5">
            <BuilderPropertyPanel field={selectedField} onChange={updateField} />
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="动态表单运行器"
        extra={
          <button
            onClick={resetForm}
            className="h-9 px-3 rounded-xl border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
          >
            重置数据
          </button>
        }
      >
        <DynamicFormRenderer
          fields={fields}
          formData={formData}
          readOnly={readOnly}
          onChange={(key, value) => setFormData((prev) => ({ ...prev, [key]: value }))}
        />
      </SectionCard>

      <div className="grid grid-cols-2 gap-6">
        <SectionCard title="Schema 快照">
          <JsonPreview data={fields} />
        </SectionCard>
        <SectionCard title="运行数据快照">
          <JsonPreview data={formData} />
        </SectionCard>
      </div>
    </div>
  )
}
