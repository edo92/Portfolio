import { Icons } from '@libs/ui';

export const CONTACT_INFO = [
  {
    icon: <Icons.Mail className="size-5" />,
    label: 'Email',
    value: 'eduard.jacobs@example.com',
    link: 'mailto:eduard.jacobs@example.com',
  },
  {
    icon: <Icons.Phone className="size-5" />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: <Icons.MapPin className="size-5" />,
    label: 'Location',
    value: 'San Francisco, CA',
    link: 'https://maps.google.com/?q=San+Francisco,+CA',
  },
];
