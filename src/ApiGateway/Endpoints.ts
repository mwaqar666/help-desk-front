import { IApiEndpoint } from "@/ApiGateway/ApiGatewayTypes";

export const endpoints: IApiEndpoint[] = [
	{
		endpoint: "/ticket",
		method: "GET",
		name: "ticket.list",
	},
	{
		endpoint: "/ticket/:ticket",
		method: "GET",
		name: "ticket.get",
	},
	{
		endpoint: "/ticket/create",
		method: "POST",
		name: "ticket.create",
	},
	{
		endpoint: "/ticket/update/:ticket",
		method: "PATCH",
		name: "ticket.update",
	},
	{
		endpoint: "/ticket/comment/:ticket",
		method: "GET",
		name: "ticket.comment.list",
	},
	{
		endpoint: "/ticket/comment/create/:ticket",
		method: "POST",
		name: "ticket.comment.create",
	},
];
