import { Plus, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import SectionCard from '../../components/common/SectionCard'
import StatCard from '../../modules/dashboard/StatCard'
import ProjectCard from '../../modules/projects/components/ProjectCard'
import { projects } from '../../data/projects'

export default function ProjectListPage() {
  const [search, setSearch] = useState('')

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return projects
    return projects.filter(
      (p) =>
        p.name.includes(search) ||
        p.code.toLowerCase().includes(search.toLowerCase()) ||
        p.pi.includes(search)
    )
  }, [search])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="进行中项目" value="1" hint="当前核心执行项目" />
        <StatCard title="筹备中项目" value="1" hint="待配置表单与访视" />
        <StatCard title="已结束项目" value="1" hint="已停止入组与随访" />
        <StatCard title="累计受试者" value="80" hint="当前系统内所有项目合计" />
      </div>

      <SectionCard
        title="项目列表"
        extra={
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索项目名称 / 编号 / PI"
                className="h-10 w-72 rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <button className="h-10 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              新建项目
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
