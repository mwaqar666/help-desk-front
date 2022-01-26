import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { ITicketComment } from "@/Models/Models";

@Component
export default class TicketComment extends Vue {
	@Prop({ required: true, type: Array })
	existingTicketComments: Array<Pick<ITicketComment, "ticket_comment_uuid" | "ticket_comment_text" | "ticket_comment_created_at">>;
}
