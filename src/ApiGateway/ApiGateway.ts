import { Axios, AxiosRequestConfig, AxiosResponse, Method } from "axios";

export class ApiGateway<TRequest = unknown, TResponse = unknown> {
	private _api: Axios;
	private _requestConfig: AxiosRequestConfig<TRequest>;
	private _response: AxiosResponse<TResponse, TRequest>;

	constructor(baseUrl?: string) {
		this._api = new Axios({
			baseURL: baseUrl ?? "http://localhost:3000",
			timeout: 30 * 1000,
		});

		this._requestConfig = {
			transformResponse: (data) => JSON.parse(data),
			headers: {
				Accept: "application/json",
			},
		};
		this._attachRequestInterceptors();
		this._attachResponseInterceptors();
	}

	public body(requestBody: TRequest): this {
		const formData = new FormData();
		for (const [key, value] of Object.entries(requestBody)) {
			formData.append(key, value);
		}

		this._requestConfig.data = formData as unknown as TRequest;
		return this;
	}

	public addConfig(requestConfig: AxiosRequestConfig<TRequest>): this {
		this._requestConfig = { ...this._requestConfig, ...requestConfig };

		return this;
	}

	public method(requestMethod: Method): this {
		this._requestConfig.method = requestMethod;

		return this;
	}

	public async send(endpoint: string): Promise<AxiosResponse<TResponse, TRequest>> {
		this._requestConfig.url = endpoint;
		this._runPreRequestChecks();
		const response = await this._api.request<TResponse, AxiosResponse<TResponse, TRequest>, TRequest>(this._requestConfig);
		this._response = response;
		return response;
	}

	private _runPreRequestChecks(): void {
		if (!this._requestConfig.method || !this._requestConfig.url) {
			throw new Error("Request Url or Method not set");
		}
	}

	private _attachRequestInterceptors(): void {
		this._api.interceptors.request.use();
		return;
	}

	private _attachResponseInterceptors(): void {
		this._api.interceptors.response.use();
		return;
	}
}
