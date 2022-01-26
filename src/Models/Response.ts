import { TicketComplaintType, TicketPriority, TicketStatus } from "@/Types/TicketTypes";
import { ITicketComment } from "@/Models/Models";

export interface ICreateTicketResponse {
	ticket: {
		ticket_uuid: string;
	};
}

export type IUpdateTicketResponse = ICreateTicketResponse;

export interface IListTicketResponse {
	ticket_uuid: string;
	ticket_title: string;
	ticket_complaint_type: TicketComplaintType;
	ticket_priority: TicketPriority;
	ticket_status: TicketStatus;
	ticket_created_at: string;
	user: {
		user_identifier: string;
	};
}

export interface IGetTicketResponse {
	ticket: {
		ticket_history: Record<string, unknown>;
		ticket_uuid: string;
		ticket_title: string;
		ticket_description: "description";
		ticket_customer_name: "Muhammad Waqar";
		ticket_request_follow_up: false;
		ticket_contact_method: "Email";
		ticket_contact_details: "a@b.c";
		ticket_complaint_type: "Did Not Receive PG&E Order Confirmation Email";
		ticket_priority: "Medium";
		ticket_status: "Open";
		ticket_validity: false;
		ticket_created_at: "2022-01-10T15:23:09.791Z";
	};
}

export interface ICreateTicketCommentResponse {
	comment: Pick<ITicketComment, "ticket_comment_uuid" | "ticket_comment_text" | "ticket_comment_created_at">;
}

export interface IListTicketCommentResponse {
	comments: Array<Pick<ITicketComment, "ticket_comment_uuid" | "ticket_comment_text" | "ticket_comment_created_at">>;
}
