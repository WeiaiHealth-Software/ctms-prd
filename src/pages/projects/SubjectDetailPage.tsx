import { ArrowLeft, CheckCircle2, Save } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import SectionCard from '../../components/common/SectionCard'
import TabButton from '../../components/common/TabButton'
import { projectSubjects } from '../../data/subjects'
import { subjectVisits } from '../../data/visits'
import { defaultTemplateFields } from '../../data/mockTemplateSchema'
import SubjectInfoCard from '../../modules/projects/components/SubjectInfoCard'
import VisitTimeline from '../../modules/projects/components/VisitTimelines'
import DynamicFormRenderer from '../../modules/form-engine/DynamicFormRenderer'
import { buildInitialFormData } from '../../modules/form-engine/utils/buildInitialFormData'
import EmptyState from '../../components/common/EmptyState'

type SubjectFormTabKey = 'overview' | 'dynamic'

export default function SubjectDetailPage() {
  const { projectId, subjectId } = useParams()
  const [tab, setTab] = useState<SubjectFormTabKey>('overview')
  const [selectedVisitId, setSelectedVisitId] = useState('v2')
  const [readOnly, setReadOnly] = useState(false)

  const subjects = projectId ? projectSubjects[projectId] || [] : []
  const subject = useMemo(() => subjects.find((s) => s.id === subjectId) || null, [subjects, subjectId])

  const [formData, setFormData] = useState(() => buildInitialFormData(defaultTemplateFields))

  const currentVisit = subjectVisits.find((item) => item.id === selectedVisitId)

  if (!subject) {
    return <EmptyState title="未找到受试者" description="请检查路由参数或受试者数据是否存在" />
  }

  return (
    <div className="space-y-6">
      <Link
        to={`/projects/${projectId}`}
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700"
      >
        <ArrowLeft className="w-4 h-4" />
        返回受试者列表
      </Link>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-4">
          <SubjectInfoCard subject={subject} />

          <SectionCard title="基本信息">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">随机号</span>
                <span className="font-medium text-slate-800">{subject.randomNo}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">来源</span>
                <span className="font-medium text-slate-800">{subject.source}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">中心</span>
                <span className="font-medium text-slate-800">{subject.center}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">入组日期</span>
                <span className="font-medium text-slate-800">{subject.enrollDate}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">下次访视</span>
                <span className="font-medium text-slate-800">{subject.nextVisitDate}</span>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="访视时间线">
            <VisitTimeline
              visits={subjectVisits}
              selectedVisitId={selectedVisitId}
              onSelect={setSelectedVisitId}
            />
          </SectionCard>
        </div>

        <div className="col-span-9 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">当前访视</div>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {currentVisit?.name || '访视'}
                </h2>
                <div className="mt-2 text-sm text-slate-500">
                  当前受试者访视页面已接入动态表单引擎，可直接根据 schema 自动渲染。
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setReadOnly((prev) => !prev)}
                  className="h-10 px-4 rounded-xl border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {readOnly ? '切换编辑' : '切换只读'}
                </button>
                <button className="h-10 px-4 rounded-xl border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  暂存
                </button>
                <button className="h-10 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  保存表单
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">表单状态</div>
                <div className="mt-2 font-semibold text-indigo-700">填写中</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">检查日期</div>
                <div className="mt-2 font-semibold text-slate-800">2026-08-30</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">检查者</div>
                <div className="mt-2 font-semibold text-slate-800">张骏婕</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">记录者</div>
                <div className="mt-2 font-semibold text-slate-800">Admin</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TabButton active={tab === 'overview'} onClick={() => setTab('overview')}>
              概览
            </TabButton>
            <TabButton active={tab === 'dynamic'} onClick={() => setTab('dynamic')}>
              动态表单
            </TabButton>
          </div>

          {tab === 'overview' && (
            <div className="grid grid-cols-3 gap-4">
              <SectionCard title="记录信息">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">检查日期</span>
                    <span className="font-medium text-slate-800">2026-08-30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">研究者</span>
                    <span className="font-medium text-slate-800">徐蔚</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">检查者</span>
                    <span className="font-medium text-slate-800">张骏婕</span>
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="视力检查">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">裸眼视力 OD</span>
                    <span className="font-medium text-slate-800">4.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">裸眼视力 OS</span>
                    <span className="font-medium text-slate-800">4.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">最佳矫正视力 OD</span>
                    <span className="font-medium text-slate-800">5.0</span>
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="眼轴与眼压">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">眼轴长度 OD</span>
                    <span className="font-medium text-slate-800">24.36 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">眼轴长度 OS</span>
                    <span className="font-medium text-slate-800">24.28 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">眼压 OD</span>
                    <span className="font-medium text-slate-800">15.2 mmHg</span>
                  </div>
                </div>
              </SectionCard>
            </div>
          )}

          {tab === 'dynamic' && (
            <div className="space-y-6">
              <SectionCard title="动态表单运行器">
                <DynamicFormRenderer
                  fields={defaultTemplateFields}
                  formData={formData}
                  readOnly={readOnly}
                  onChange={(key: any, value: any) => setFormData((prev) => ({ ...prev, [key]: value }))}
                />
              </SectionCard>

              <SectionCard title="表单数据快照">
                <pre className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-4 overflow-auto max-h-96">
                  {JSON.stringify(formData, null, 2)}
                </pre>
              </SectionCard>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
