import { createHashRouter, Navigate } from 'react-router'
import AppLayout from './layout/AppLayout'

import ProjectListPage from '../pages/projects/ProjectListPage'
import ProjectDetailPage from '../pages/projects/ProjectDetailPage'
import SubjectDetailPage from '../pages/projects/SubjectDetailPage'
import AppointmentPage from '../pages/appointments/AppointmentPage'
import TemplateCenterPage from '../pages/templates/TemplateCenterPage'
import TemplateBuilderPage from '../pages/templates/TemplateBuilderPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/projects" replace /> },
      { path: 'projects', element: <ProjectListPage /> },
      { path: 'projects/:projectId', element: <ProjectDetailPage /> },
      { path: 'projects/:projectId/subjects/:subjectId', element: <SubjectDetailPage /> },
      { path: 'appointments', element: <AppointmentPage /> },
      { path: 'templates', element: <TemplateCenterPage /> },
      { path: 'templates/builder', element: <TemplateBuilderPage /> },
    ],
  },
])
