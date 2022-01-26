import { Action, Module } from "vuex-class-modules";
import store from "@/Store/Store";
import { BaseModule } from "@/Store/Modules/BaseModule";
import { EndpointManager } from "@/ApiGateway/EndpointManager";
import { ICreateTicketRequest, IUpdateTicketRequest } from "@/Models/Request";
import { ICreateTicketResponse, IGetTicketResponse, IListTicketResponse, IUpdateTicketResponse } from "@/Models/Response";
import { PaginatedResultWithButtons, PaginationDataQuery } from "@/Types/PaginationInterface";

@Module()
class TicketStore extends BaseModule {
	@Action
	public async getTicket(ticketUuid: string) {
		const apiGateway = this.instantiateApiGateway<never, IGetTicketResponse>();
		const endpoint = EndpointManager.getEndpointByName("ticket.get", { ticket: ticketUuid });
		const response = await apiGateway.method(endpoint.method).send(endpoint.endpoint);
		this.throwIfResponseHasError(response);
		return response.data;
	}

	@Action
	public async getTickets(paginationQuery: PaginationDataQuery): Promise<PaginatedResultWithButtons<IListTicketResponse>> {
		const apiGateway = this.instantiateApiGateway<never, PaginatedResultWithButtons<IListTicketResponse>>();
		const endpoint = EndpointManager.getEndpointByName("ticket.list", {}, paginationQuery);
		const response = await apiGateway.method(endpoint.method).send(endpoint.endpoint);
		this.throwIfResponseHasError(response);
		return response.data;
	}

	@Action
	public async createTicket(createTicket: ICreateTicketRequest): Promise<ICreateTicketResponse> {
		const apiGateway = this.instantiateApiGateway<ICreateTicketRequest, ICreateTicketResponse>();
		const endpoint = EndpointManager.getEndpointByName("ticket.create");
		const response = await apiGateway.method(endpoint.method).body(createTicket).send(endpoint.endpoint);
		this.throwIfResponseHasError(response);
		return response.data;
	}

	@Action
	public async updateTicket({ ticketUuid, updateTicket }: { ticketUuid: string; updateTicket: IUpdateTicketRequest }): Promise<IUpdateTicketResponse> {
		const apiGateway = this.instantiateApiGateway<IUpdateTicketRequest, IUpdateTicketResponse>();
		const endpoint = EndpointManager.getEndpointByName("ticket.update", { ticket: ticketUuid });
		const response = await apiGateway.method(endpoint.method).body(updateTicket).send(endpoint.endpoint);
		this.throwIfResponseHasError(response);
		return response.data;
	}
}

export const TicketModule = new TicketStore({ store, name: "Ticket" });
