import Vue from "vue";
import Component from "vue-class-component";
import { DataOptions, DataTableHeader } from "vuetify";
import { TicketModule } from "@/Store/Modules/TicketModule";
import { IListTicketResponse } from "@/Models/Response";
import { DefaultPaginatedResult, DefaultPaginationDataQuery, PaginatedResultWithButtons } from "@/Types/PaginationInterface";
import CustomDataTable from "@/Components/CustomDataTable/CustomDataTable.vue";
import { Watch } from "vue-property-decorator";

// noinspection JSIgnoredPromiseFromCall
@Component({
	components: {
		CustomDataTable,
	},
})
export default class TicketList extends Vue {
	public headers: DataTableHeader[] = [
		{ text: "Ticket Uuid", value: "ticket_uuid", filterable: true },
		{ text: "Ticket Title", value: "ticket_title", filterable: true },
		{ text: "Ticket Complaint", value: "ticket_complaint_type", filterable: true },
		{ text: "Ticket Priority", value: "ticket_priority", filterable: true },
		{ text: "Ticket Status", value: "ticket_status", filterable: true },
		{ text: "Ticket Created At", value: "ticket_created_at", filterable: false },
		{ text: "User Identifier", value: "user.user_identifier", filterable: true },
	];
	public searchQuery = "";
	public paginatedTickets: PaginatedResultWithButtons<IListTicketResponse> = DefaultPaginatedResult;

	@Watch("searchQuery")
	public getSearchedResults(): void {
		this.getTickets();
	}

	public async getTickets(paginationQuery: DataOptions = DefaultPaginationDataQuery): Promise<void> {
		this.paginatedTickets = await TicketModule.getTickets({
			page: paginationQuery.page,
			items: paginationQuery.itemsPerPage,
			search: this.searchQuery,
		});
	}

	public created(): void {
		this.getTickets();
	}
}
