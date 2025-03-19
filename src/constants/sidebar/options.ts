import { RiFileHistoryLine, RiGroup2Fill } from 'react-icons/ri';
import { PiChalkboardTeacher, PiPersonArmsSpreadLight, PiStudent } from 'react-icons/pi';
import { FiHome, FiUsers } from 'react-icons/fi';
export const MAIN_SIDEBAR_OPTIONS = [
  {
    Icon: FiHome,
    title: 'Dashboard',
    path: '/',
    subpaths: [
      { title: 'Overview', path: '/dashboard/overview' },
      { title: 'Analytics', path: '/dashboard/analytics' },
    ],
  },
  {
    Icon: RiFileHistoryLine,
    title: 'History',
    path: '/history',
    subpaths: [
      { title: 'Transaction History', path: '/history/transactions' },
      { title: 'Login History', path: '/history/logins' },
    ],
  },
  {
    Icon: FiUsers,
    title: 'Employees',
    path: '/employees',
    subpaths: [
      { title: 'All Employees', path: '/employees/all' },
      { title: 'Departments', path: '/employees/departments' },
    ],
  },
  {
    Icon: PiStudent,
    title: 'Visitors',
    path: '/visitors',
    subpaths: [
      { title: 'Visitor Logs', path: '/visitors/logs' },
      { title: 'New Visitors', path: '/visitors/new' },
    ],
  },
  {
    Icon: PiPersonArmsSpreadLight,
    title: 'Students',
    path: '/students',
    subpaths: [
      { title: 'All Students', path: '/students/all' },
      { title: 'Enrollments', path: '/students/enrollments' },
    ],
  },
  {
    Icon: PiChalkboardTeacher,
    title: 'Professors',
    path: '/professors',
    subpaths: [
      { title: 'All Professors', path: '/professors/all' },
      { title: 'Departments', path: '/professors/departments' },
    ],
  },
  {
    Icon: RiGroup2Fill,
    title: 'Groups',
    path: '/groups',
  },
];
