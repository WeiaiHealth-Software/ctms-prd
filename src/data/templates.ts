import type { Template } from '../types/template'

export const templates: Template[] = [
  {
    id: 'T001',
    name: '基线期采集表',
    type: '基线访视',
    version: 'v1.0.0',
    fields: 86,
    updatedAt: '2026-03-18',
    status: '启用中',
    sections: [
      { title: '记录信息', items: ['检查日期', '研究者', '检查者', '记录日期', '记录者'] },
      { title: '基本信息', items: ['姓名缩写', '性别', '出生日期', '身高', '体重', '家族近视史'] },
      { title: '视力检查', items: ['裸眼视力（OD/OS）', '最佳矫正视力（OD/OS）'] },
      { title: '屈光度检查', items: ['主觉球镜', '主觉柱镜', '客观球镜', '客观柱镜'] },
    ],
  },
  {
    id: 'T002',
    name: '3M 随访表',
    type: '随访访视',
    version: 'v1.0.0',
    fields: 42,
    updatedAt: '2026-03-16',
    status: '启用中',
    sections: [
      { title: '访视记录', items: ['检查日期', '研究者', '检查者'] },
      { title: '离焦镜评估', items: ['是否有破损、划痕', '其他异常情况描述'] },
      { title: '视力检查', items: ['裸眼视力', '戴镜视力', '最佳矫正视力'] },
    ],
  },
  {
    id: 'T003',
    name: '异常事件记录表',
    type: '安全性表单',
    version: 'v0.9.2',
    fields: 18,
    updatedAt: '2026-03-10',
    status: '草稿',
    sections: [
      { title: '异常情况', items: ['方案偏离', '器械缺陷', 'AE', 'SAE', '合并用药'] },
    ],
  },
]
