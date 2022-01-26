import { Action, RegisterOptions, VuexModule } from "vuex-class-modules";
import { ApiGateway } from "@/ApiGateway/ApiGateway";
import { AxiosResponse } from "axios";

export class BaseModule extends VuexModule {
	constructor(options: RegisterOptions) {
		super(options);
	}

	protected instantiateApiGateway<T, R>(): ApiGateway<T, R> {
		return new ApiGateway<T, R>();
	}

	@Action
	protected throwIfResponseHasError<R>(response: AxiosResponse<R>): boolean {
		if (response.status > 199 && response.status < 300) {
			return true;
		}

		throw new Error("blah blah blah");
	}
}
