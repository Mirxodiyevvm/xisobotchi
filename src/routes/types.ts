import type { LazyExoticComponent } from "react";

export type RouteType = {
  element:LazyExoticComponent<() => React.ReactElement>;
  path: string;
  id: number;
};
