import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const navLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <InboxIcon />,
    dropdown: [
      { label: 'Dashboard 1', href: '/dashboard-1' },
      { label: 'Dashboard 2', href: '/dashboard-2' }
    ]
  },
  { label: 'in Stock', href: '/instock', icon: <MailIcon />, dropdown: [] },
  { label: 'Products', href: '/products', icon: <InboxIcon />, dropdown: [] },
  { label: 'Sales', href: '/sales', icon: <InboxIcon />, dropdown: [] },
  { label: 'Orders', href: '/orders', icon: <InboxIcon />, dropdown: [] },
  { label: 'Users', href: '/users', icon: <InboxIcon />, dropdown: [] }
];
