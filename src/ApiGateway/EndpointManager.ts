import { IApiEndpoint, IKeyValue, QueryParam, RouteParams } from "@/ApiGateway/ApiGatewayTypes";
import { endpoints } from "@/ApiGateway/Endpoints";

class EndpointEngine {
	private static instance?: EndpointEngine;
	private _apiEndpoints: IApiEndpoint[];

	private constructor() {
		this._apiEndpoints = endpoints;
	}

	public static getInstance(): EndpointEngine {
		if (EndpointEngine.instance) {
			return EndpointEngine.instance;
		}

		EndpointEngine.instance = new EndpointEngine();
		return EndpointEngine.instance;
	}

	public applyParameters(path: string, routeParams: RouteParams, queryParams: QueryParam): string {
		// Apply URL Required Parameters
		if (Object.keys(routeParams).length !== 0) {
			for (const [param, value] of Object.entries(routeParams)) {
				if (path.search(`:${param}`) === -1) {
					throw new Error(`Route parameter '${param}' not found in route "${path}"`);
				}
				path = path.replace(`:${param}`, value);
			}
		}

		// Check If Required Route Parameter Remains Unfilled
		const notMatchedParameter = path.substring(path.indexOf(":") + 1, path.indexOf("/", path.indexOf(":")) === -1 ? path.length : path.indexOf("/", path.indexOf(":")));

		if (notMatchedParameter) {
			throw new Error(`Route parameter ':${notMatchedParameter}' is undefined`);
		}

		// Apply URL Query Parameters
		const queryParamsFirstIndexParam = Object.keys(queryParams)[0];
		for (const [param, value] of Object.entries(queryParams)) {
			path += `${param === queryParamsFirstIndexParam ? "?" : "&"}${param}=${value}`;
		}

		return path;
	}

	public getEndpointByName(name: string, routeParams: IKeyValue = {}, queryParams: IKeyValue = {}): IApiEndpoint {
		const requiredRoute = this._apiEndpoints.find((inspectedRoute: IApiEndpoint): boolean => inspectedRoute.name === name);
		if (requiredRoute) {
			const foundRoute = { ...requiredRoute };
			foundRoute.endpoint = this.applyParameters(foundRoute.endpoint, routeParams, queryParams);

			return foundRoute;
		}

		throw new Error(`Route with name '${name}' is not found`);
	}
}

export const EndpointManager = EndpointEngine.getInstance();
