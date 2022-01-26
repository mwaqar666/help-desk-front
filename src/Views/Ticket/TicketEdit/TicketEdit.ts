import Vue from "vue";
import Component from "vue-class-component";
import { ICreateTicketCommentRequest, IUpdateTicketRequest } from "@/Models/Request";
import { ticketComplaintType, ticketContactMethod, ticketPriority, ticketStatus, ticketValidity } from "@/Types/TicketTypes";
import { TicketModule } from "@/Store/Modules/TicketModule";
import { VueEditor } from "vue2-editor";
import { TicketCommentModule } from "@/Store/Modules/TicketCommentModule";
import { ITicketComment } from "@/Models/Models";
import TicketComment from "@/Components/TicketComment/TicketComment.vue";

// noinspection ES6MissingAwait, JSIgnoredPromiseFromCall
@Component({
	components: {
		TicketComment,
		VueEditor,
	},
})
export default class TicketEdit extends Vue {
	public readonly currentTicketUuid: string = this.$route.params.ticket;

	public updateTicketDTO: IUpdateTicketRequest = {
		ticket_title: "",
		ticket_description: "",
		ticket_contact_method: ticketContactMethod[0],
		ticket_customer_name: "",
		ticket_complaint_type: ticketComplaintType[0],
		ticket_priority: ticketPriority[0],
		ticket_status: ticketStatus[0],
		ticket_contact_details: "",
		ticket_request_follow_up: false,
		ticket_validity: true,
	};

	public createTicketCommentDTO: ICreateTicketCommentRequest = {
		ticket_comment_text: "",
	};

	public existingTicketComments: Array<Pick<ITicketComment, "ticket_comment_uuid" | "ticket_comment_text" | "ticket_comment_created_at">> = [];

	public selectMenus = { ticketComplaintType, ticketPriority, ticketStatus, ticketContactMethod, ticketValidity };

	public async fillExistingFieldsToEdit(): Promise<void> {
		const ticket = await TicketModule.getTicket(this.currentTicketUuid);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { ticket_history, ticket_created_at, ticket_uuid, ...remainingData } = ticket.ticket;
		this.updateTicketDTO = { ...remainingData };
	}

	public async getTicketExistingComments(): Promise<void> {
		const ticketComments = await TicketCommentModule.getTicketComments(this.currentTicketUuid);
		this.existingTicketComments = ticketComments.comments;
	}

	public async updateTicket(): Promise<void> {
		const ticket = await TicketModule.updateTicket({
			ticketUuid: this.currentTicketUuid,
			updateTicket: this.updateTicketDTO,
		});

		alert(ticket.ticket.ticket_uuid);
		this.$router.push({ name: "ticket.index" });
	}

	public async addComment(): Promise<void> {
		await TicketCommentModule.createTicketComment({
			ticketUuid: this.currentTicketUuid,
			createTicketComment: this.createTicketCommentDTO,
		});

		this.createTicketCommentDTO.ticket_comment_text = "";

		this.getTicketExistingComments();
	}

	public created(): void {
		this.fillExistingFieldsToEdit();
		this.getTicketExistingComments();
	}
}
