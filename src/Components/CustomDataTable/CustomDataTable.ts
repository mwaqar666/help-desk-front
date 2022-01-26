import Component from "vue-class-component";
import Vue from "vue";
import { Emit, Prop } from "vue-property-decorator";
import { DataOptions, DataPagination, DataTableHeader } from "vuetify";
import { DefaultPaginationDataQuery, PaginatedResultWithButtons } from "@/Types/PaginationInterface";
import { VDataTable, VTextField } from "vuetify/lib/components";

@Component({
	components: {
		VDataTable,
		VTextField,
	},
})
export default class CustomDataTable extends Vue {
	@Prop({ type: Array, required: true })
	public headers: DataTableHeader[];

	@Prop({ type: String, required: false })
	public value = "";

	@Prop({ type: Object, required: true })
	public paginatedData: PaginatedResultWithButtons<unknown>;
	public dataLoading = false;
	public paginationQuery: DataOptions = DefaultPaginationDataQuery;

	@Emit("input")
	public emitSearchQuery(updatedSearchQuery: string): string {
		return updatedSearchQuery;
	}

	@Emit("fetchData")
	public updatePagination(paginationInfo: DataPagination): DataOptions {
		this.paginationQuery.page = paginationInfo.page;
		this.paginationQuery.itemsPerPage = paginationInfo.itemsPerPage;
		return this.paginationQuery;
	}

	public extractValueFromObject(item: unknown, itemValuePath: string): unknown {
		/* eslint-disable */
		return itemValuePath.split(".").reduce((accumulator: any, nextPathString: string): unknown => {
			return accumulator[nextPathString];
		}, item);
	}
}
