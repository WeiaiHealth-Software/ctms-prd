import { Bell, ChevronRight, Settings } from 'lucide-react'
import { useLocation, useParams } from 'react-router'

function getBreadcrumbs(pathname: string, params: Record<string, string | undefined>) {
  if (pathname.startsWith('/projects/') && pathname.includes('/subjects/')) {
    return ['项目管理', params.projectId || '项目详情', params.subjectId || '受试者详情']
  }
  if (pathname.startsWith('/projects/')) {
    return ['项目管理', params.projectId || '项目详情']
  }
  if (pathname.startsWith('/appointments')) {
    return ['预约复查管理']
  }
  if (pathname.startsWith('/templates/builder')) {
    return ['表单样板间', '动态表单引擎']
  }
  if (pathname.startsWith('/templates')) {
    return ['表单样板间']
  }
  return ['项目管理']
}

function getTitle(pathname: string) {
  if (pathname.startsWith('/projects/') && pathname.includes('/subjects/')) return '受试者详情'
  if (pathname.startsWith('/projects/')) return '项目详情'
  if (pathname.startsWith('/projects')) return '项目管理'
  if (pathname.startsWith('/appointments')) return '预约复查管理'
  if (pathname.startsWith('/templates/builder')) return '表单样板间 / 动态表单引擎'
  if (pathname.startsWith('/templates')) return '表单样板间'
  return '惟翎 · EDC'
}

export default function AppHeader() {
  const location = useLocation()
  const params = useParams()

  const breadcrumbs = getBreadcrumbs(location.pathname, params)
  const title = getTitle(location.pathname)

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          {breadcrumbs.map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="w-3 h-3" />}
              <span>{item}</span>
            </div>
          ))}
        </div>
        <h1 className="text-lg font-bold text-slate-900 mt-1">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
