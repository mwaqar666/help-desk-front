import { TicketComplaintType, TicketContactMethod, TicketPriority, TicketStatus } from "@/Types/TicketTypes";

export interface ICreateTicketRequest {
	user_identifier: string;
	ticket_title: string;
	ticket_description: string;
	ticket_complaint_type: TicketComplaintType;
	ticket_priority: TicketPriority;
	ticket_status: TicketStatus;
	ticket_customer_name: string;
	ticket_request_follow_up: boolean;
	ticket_contact_method: TicketContactMethod;
	ticket_contact_details: string;
}

export interface IUpdateTicketRequest extends Omit<ICreateTicketRequest, "user_identifier"> {
	ticket_validity: boolean;
}

export interface ICreateTicketCommentRequest {
	ticket_comment_text: string;
}
