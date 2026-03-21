import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import SectionCard from '../../components/common/SectionCard'
import StatCard from '../../modules/dashboard/StatCard'
import TemplateDetail from '../../modules/templates/components/TemplateDetail'
import TemplateList from '../../modules/templates/components/TemplateList'
import { templates } from '../../data/templates'

export default function TemplateCenterPage() {
  const navigate = useNavigate()
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(templates[0]?.id || null)

  const selectedTemplate = useMemo(
    () => templates.find((item) => item.id === selectedTemplateId) || null,
    [selectedTemplateId]
  )

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="启用中模板" value="2" hint="当前可绑定项目和访视" />
        <StatCard title="草稿模板" value="1" hint="待确认字段与显示逻辑" />
        <StatCard title="模板总数" value="3" hint="支持按访视类型复用" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
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
            <TemplateList
              templates={templates}
              selectedTemplateId={selectedTemplateId}
              onSelect={setSelectedTemplateId}
            />
          </SectionCard>
        </div>

        <div className="col-span-8">
          <TemplateDetail template={selectedTemplate} />
        </div>
      </div>
    </div>
  )
}
