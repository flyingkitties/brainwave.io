'use client';

import { usePathname } from 'next/navigation';

const routes = [
  {
    name: 'Demos',
    path: '/demos',
  },
  {
    name: 'Pages',
    path: '/pages',
  },
  {
    name: 'Support',
    path: '/support',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

function useNavigation() {
  const pathname = usePathname();

  const links = routes.map((route) => {
    return { ...route, isActive: route.path === pathname };
  });

  return { links };
}

export default useNavigation;
