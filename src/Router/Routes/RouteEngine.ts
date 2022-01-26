import { RouteConfig } from "vue-router";
import { GeneralUtilities } from "@/Utilities/GeneralUtilities";
import { IDefinedRoute, NestedRouteConfig } from "@/Router/Types/RouteTypes";

export class RouteEngine {
	private static _singleInstance?: RouteEngine;

	private constructor(private _definedRoutes: IDefinedRoute[] = [], private _parsedRoutes: RouteConfig[] = []) {}

	public static getInstance(definedRoutes: IDefinedRoute[]): RouteEngine {
		if (RouteEngine._singleInstance) {
			return RouteEngine._singleInstance;
		}

		RouteEngine._singleInstance = new RouteEngine(definedRoutes);
		return RouteEngine._singleInstance;
	}

	public getParsedRoutes(): RouteConfig[] {
		this._createParsedRoutes();

		return this._parsedRoutes;
	}

	private _createParsedRoutes(): this {
		this._parsedRoutes = this._definedRoutes
			.map((route: IDefinedRoute) => {
				if ("prefixName" in route) {
					return this._parsePrefixedRoutes(route.routes, [GeneralUtilities.trim(route.prefixPath, "/")], [GeneralUtilities.trim(route.prefixName, ".")]);
				}

				return route;
			})
			.flat(Infinity);

		return this;
	}

	private _parsePrefixedRoutes(routesToPrefix: IDefinedRoute[], pathToPrefixArray: string[], nameToPrefixArray: string[]): NestedRouteConfig {
		return routesToPrefix.map((routeToPrefix: IDefinedRoute): RouteConfig | NestedRouteConfig => {
			if ("prefixName" in routeToPrefix) {
				return this._parsePrefixedRoutes(routeToPrefix.routes, [...pathToPrefixArray, GeneralUtilities.trim(routeToPrefix.prefixPath, "/")], [...nameToPrefixArray, GeneralUtilities.trim(routeToPrefix.prefixName, ".")]);
			}

			const pathToPrefix = pathToPrefixArray.join("/");
			const nameToPrefix = nameToPrefixArray.join(".");

			routeToPrefix.path = `/${pathToPrefix ? `${pathToPrefix}/` : ""}${GeneralUtilities.trim(routeToPrefix.path, "/")}`;
			routeToPrefix.name = `${nameToPrefix ? `${nameToPrefix}.` : ""}${GeneralUtilities.trim(routeToPrefix.name as string, ".")}`;

			return routeToPrefix;
		});
	}
}
