import { Outlet } from 'react-router'
import AppSidebar from './AppSidebar'
import AppHeader from './AppHeader'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-800">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
