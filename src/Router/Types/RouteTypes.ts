import { RouteConfig } from "vue-router";

export interface IPrefixRoute {
	prefixName: string;
	prefixPath: string;
	routes: IDefinedRoute[];
}

export type IDefinedRoute = RouteConfig | IPrefixRoute;

export type NestedRouteConfig = Array<NestedRouteConfig | RouteConfig>;
