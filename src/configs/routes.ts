import type { ComponentType } from "react";

import { HomePage } from "../pages/HomePage";

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    description: string;
  }>
>;

export interface Route {
  id: number;
  path: string;
  name: string;
  metaInfo: MetaInfoProps;
  Component: ComponentType;
}

export const routes: Route[] = [
  {
    id: 1,
    path: "/",
    name: "Home",
    Component: HomePage,
    metaInfo: {
      title: "Home",
      description: `Home`,
    },
  },
  {
    id: 2,
    path: "/tags/:name",
    name: "Home",
    Component: HomePage,
    metaInfo: {
      title: "Home",
      description: `Home - Tags`,
    },
  },
];

export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((x) => x.name === name);
  return route?.metaInfo ?? {};
};
