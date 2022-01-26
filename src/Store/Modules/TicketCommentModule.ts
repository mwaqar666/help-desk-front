import { Action, Module } from "vuex-class-modules";
import { BaseModule } from "@/Store/Modules/BaseModule";
import { ICreateTicketCommentRequest } from "@/Models/Request";
import { ICreateTicketCommentResponse, IListTicketCommentResponse } from "@/Models/Response";
import { EndpointManager } from "@/ApiGateway/EndpointManager";
import store from "@/Store/Store";

@Module
class TicketCommentStore extends BaseModule {
	@Action
	public async createTicketComment({ ticketUuid, createTicketComment }: { ticketUuid: string; createTicketComment: ICreateTicketCommentRequest }): Promise<ICreateTicketCommentResponse> {
		const apiGateway = this.instantiateApiGateway<ICreateTicketCommentRequest, ICreateTicketCommentResponse>();
		const endpoint = EndpointManager.getEndpointByName("ticket.comment.create", { ticket: ticketUuid });
		const response = await apiGateway.method(endpoint.method).body(createTicketComment).send(endpoint.endpoint);
		this.throwIfResponseHasError(response);
		return response.data;
	}

	@Action
	public async getTicketComments(ticketUuid: string) {
		const apiGateway = this.instantiateApiGateway<never, IListTicketCommentResponse>();
		const endpoint = EndpointManager.getEndpointByName("ticket.comment.list", { ticket: ticketUuid });
		const response = await apiGateway.method(endpoint.method).send(endpoint.endpoint);
		this.throwIfResponseHasError(response);
		return response.data;
	}
}

export const TicketCommentModule = new TicketCommentStore({ store, name: "TicketComment" });
