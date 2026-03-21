type StatCardProps = {
  title: string
  value: string
  hint: string
}

export default function StatCard({ title, value, hint }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="text-sm text-slate-500 mb-2">{title}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-400 mt-2">{hint}</div>
    </div>
  )
}
