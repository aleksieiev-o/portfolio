import { RouteName, RoutePath } from '@/router/Routes.enum';

export interface Rout {
  href: RoutePath;
  name: RouteName;
}

type Router = Array<Rout>;

export const router: Router = [
  { href: RoutePath.HOME, name: RouteName.HOME },
  { href: RoutePath.ABOUT, name: RouteName.ABOUT },
  { href: RoutePath.PROJECTS, name: RouteName.PROJECTS },
  { href: RoutePath.SKILLS, name: RouteName.SKILLS },
  { href: RoutePath.CONTACTS, name: RouteName.CONTACTS },
];
