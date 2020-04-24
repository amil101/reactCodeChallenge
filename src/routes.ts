// @material-ui/icons
import Person from '@material-ui/icons/Person';
import DocRecipt from './views/DocRecipt/DocRecipt';

const dashboardRoutes = [
  {
    path: '/docrecipt',
    name: 'Doctor Recipt',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: Person,
    component: DocRecipt,
    layout: '/admin'
  }
];

export default dashboardRoutes;
