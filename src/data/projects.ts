import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'P001',
    code: 'XW09',
    name: '光刻微结构近视管理镜片在儿童青少年近视防控中的随机对照临床研究',
    pi: '徐蔚',
    sponsor: '南通诺瞳奕目医疗科技有限公司',
    centers: ['上海市眼病防治中心'],
    status: '进行中',
    enrolled: 26,
    desc: '评估新型近视管理镜片在儿童青少年近视防控中的有效性、安全性与佩戴舒适性。',
  },
  {
    id: 'P002',
    code: 'XW07',
    name: '某新型角膜塑形镜多中心随机对照临床试验',
    pi: '李教授',
    sponsor: '南通诺瞳奕目医疗科技有限公司',
    centers: ['上海市眼病防治中心', '广东中山医院'],
    status: '已结束',
    enrolled: 54,
    desc: '评估夜戴型角膜塑形镜对低中度近视患者的视力矫正效果及角膜安全性。',
  },
  {
    id: 'P003',
    code: 'XW06',
    name: '低浓度阿托品滴眼液联合光学干预的真实世界研究',
    pi: '王主任',
    sponsor: '南通诺瞳奕目医疗科技有限公司',
    centers: ['上海市眼病防治中心'],
    status: '筹备中',
    enrolled: 0,
    desc: '观察低浓度阿托品联合离焦眼镜在真实世界中的长期控制效果。',
  },
]
