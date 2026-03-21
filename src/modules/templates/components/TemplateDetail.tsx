import { useNavigate } from 'react-router'
import SectionCard from '../../../components/common/SectionCard'
import type { Template } from '../../../types/template'

type TemplateDetailProps = {
  template: Template | null
}

function PreviewBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-sm font-semibold text-slate-800">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TemplateDetail({ template }: TemplateDetailProps) {
  const navigate = useNavigate()

  if (!template) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm text-slate-400">
        请选择左侧模板查看详情
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <SectionCard
        title="模板详情"
        extra={
          <div className="flex items-center gap-2">
            <button className="h-9 px-3 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
              复制模板
            </button>
            <button
              onClick={() => navigate('/templates/builder')}
              className="h-9 px-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              编辑模板
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-400">模板名称</div>
            <div className="mt-2 font-semibold text-slate-900">{template.name}</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-400">模板类型</div>
            <div className="mt-2 font-semibold text-slate-900">{template.type}</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-400">版本</div>
            <div className="mt-2 font-semibold text-slate-900">{template.version}</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-400">字段数</div>
            <div className="mt-2 font-semibold text-slate-900">{template.fields}</div>
          </div>
        </div>
      </SectionCard>

      <div className="grid grid-cols-2 gap-6">
        <SectionCard title="结构预览">
          <div className="space-y-4">
            {template.sections.map((section) => (
              <PreviewBlock key={section.title} title={section.title} items={section.items} />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="模板设计建议">
          <ul className="space-y-3 text-sm text-slate-600 leading-6">
            <li>• 将模板拆成“区块 + 字段”结构，便于后续做动态渲染引擎。</li>
            <li>• 模板与访视绑定时，应固定版本，避免研究中途模板漂移。</li>
            <li>• 左右眼字段建议统一为 Eye Grid 类型，减少重复配置。</li>
            <li>• 异常情况类字段优先抽成子表，提高 AE / SAE 复用性。</li>
            <li>• 字段级别建议增加必填、单位、校验规则、显示逻辑配置。</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  )
}
