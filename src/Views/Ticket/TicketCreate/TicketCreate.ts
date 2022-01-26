import Vue from "vue";
import Component from "vue-class-component";
import { VueEditor } from "vue2-editor";
import { ticketComplaintType, ticketContactMethod, ticketPriority, ticketStatus } from "@/Types/TicketTypes";
import { TicketModule } from "@/Store/Modules/TicketModule";
import { ICreateTicketRequest } from "@/Models/Request";

@Component({
	components: {
		VueEditor,
	},
})
export default class TicketCreate extends Vue {
	public createTicketDTO: ICreateTicketRequest = {
		ticket_contact_details: "",
		ticket_contact_method: ticketContactMethod[0],
		ticket_customer_name: "",
		ticket_request_follow_up: false,
		ticket_description: "",
		ticket_complaint_type: ticketComplaintType[0],
		ticket_priority: ticketPriority[0],
		ticket_status: ticketStatus[0],
		ticket_title: "",
		user_identifier: "",
	};

	public selectMenus = { ticketComplaintType, ticketPriority, ticketStatus, ticketContactMethod };

	public async createTicket(): Promise<void> {
		const createdTicket = await TicketModule.createTicket(this.createTicketDTO);
		alert(createdTicket.ticket.ticket_uuid);

		// noinspection ES6MissingAwait
		this.$router.push({ name: "ticket.index" });
	}
}
