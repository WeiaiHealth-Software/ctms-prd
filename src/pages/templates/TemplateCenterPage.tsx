import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import SectionCard from '../../components/common/SectionCard'
import StatCard from '../../modules/dashboard/StatCard'
import TemplateDetail from '../../modules/templates/components/TemplateDetail'
import TemplateList from '../../modules/templates/components/TemplateList'
import { templates } from '../../data/templates'
import { classNames } from '../../lib/classNames'

type TemplateStatusFilter = 'all' | 'enabled' | 'draft'

export default function TemplateCenterPage() {
  const navigate = useNavigate()
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<TemplateStatusFilter>('all')

  const getFilteredTemplates = (filter: TemplateStatusFilter) => {
    if (filter === 'all') return templates
    if (filter === 'enabled') return templates.filter((tpl) => tpl.status === '启用中')
    return templates.filter((tpl) => tpl.status === '草稿')
  }

  const filteredTemplates = useMemo(() => {
    return getFilteredTemplates(statusFilter)
  }, [statusFilter])

  const selectedTemplate = useMemo(
    () => templates.find((item) => item.id === selectedTemplateId) || null,
    [selectedTemplateId]
  )

  return (
    <div className="flex gap-6">
      <div className="w-[380px] shrink-0 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          <StatCard 
            title="启用中" 
            value="2" 
            hint="可绑定" 
            className="!p-3" 
            titleClassName="text-xs !mb-1" 
            valueClassName="text-xl" 
            hintClassName="text-[10px] mt-1 truncate" 
          />
          <StatCard 
            title="草稿" 
            value="1" 
            hint="待确认" 
            className="!p-3" 
            titleClassName="text-xs !mb-1" 
            valueClassName="text-xl" 
            hintClassName="text-[10px] mt-1 truncate" 
          />
          <StatCard 
            title="总数" 
            value="3" 
            hint="可复用" 
            className="!p-3" 
            titleClassName="text-xs !mb-1" 
            valueClassName="text-xl" 
            hintClassName="text-[10px] mt-1 truncate" 
          />
        </div>

        <SectionCard
          title="模板列表"
            extra={
              <button
                onClick={() => navigate('/templates/builder')}
                className="h-9 px-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                新建模板
              </button>
            }
          >
            <div
              role="radiogroup"
              aria-label="模板状态筛选"
              className="mb-4 inline-flex rounded-xl bg-slate-50 p-1"
            >
              {[
                { label: '全部', value: 'all' as const },
                { label: '已启用', value: 'enabled' as const },
                { label: '草稿', value: 'draft' as const },
              ].map((option) => {
                const active = statusFilter === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => {
                      const nextFilter = option.value
                      const nextTemplates = getFilteredTemplates(nextFilter)
                      setSelectedTemplateId((prev) => {
                        if (!prev) return prev
                        return nextTemplates.some((tpl) => tpl.id === prev) ? prev : null
                      })
                      setStatusFilter(nextFilter)
                    }}
                    className={classNames(
                      'h-9 px-4 rounded-lg text-sm font-medium transition',
                      active
                        ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    )}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
            <TemplateList
              templates={filteredTemplates}
              selectedTemplateId={selectedTemplateId}
              onSelect={setSelectedTemplateId}
            />
          </SectionCard>
        </div>

        <div className="flex-1 min-w-0">
          <TemplateDetail template={selectedTemplate} />
        </div>
      </div>
  )
}
