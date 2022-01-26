import { Method } from "axios";

export interface IApiEndpoint {
	endpoint: string;
	method: Method;
	name: string;
}

export interface IKeyValue {
	[param: string]: any;
}

export type RouteParams = IKeyValue;

export type QueryParam = IKeyValue;
