import { TicketComplaintType, TicketContactMethod, TicketPriority, TicketStatus } from "@/Types/TicketTypes";

export interface ITicketComment {
	ticket_comment_uuid: string;
	ticket_comment_text: string;
	ticket_comment_created_at: string;
}

export interface TicketCommentModel {
	ticket_comment_uuid: string;
	ticket_comment_ticket_id: number;
	ticket_comment_text: string;
	ticket_comment_status: boolean;
	ticket_comment_created_at: Date;
	ticket_comment_updated_at: Date;
	ticket_comment_deleted_at: Date;
	ticket: TicketModel;
}

export interface TicketModel {
	readonly ticket_uuid: string;
	ticket_user_id: number;
	ticket_title: string;
	ticket_description: string;
	ticket_customer_name: string;
	ticket_request_follow_up: boolean;
	ticket_contact_method: TicketContactMethod;
	ticket_contact_details: string;
	ticket_complaint_type: TicketComplaintType;
	ticket_priority: TicketPriority;
	ticket_status: TicketStatus;
	ticket_validity: boolean;
	ticket_history: string;
	ticket_is_active: boolean;
	ticket_created_at: Date;
	ticket_updated_at: Date;
	ticket_deleted_at: Date | null;
	user: UserModel;
	ticketComments: TicketCommentModel[];
}

export interface UserModel {
	readonly user_identifier: string;
	user_first_name: string;
	user_middle_name: string;
	user_last_name: string;
	user_username: string;
	user_email: string;
	user_password: string;
	user_is_active: boolean;
	user_created_at: Date;
	user_updated_at: Date;
	user_deleted_at: Date;
	tickets: TicketModel[];
}
