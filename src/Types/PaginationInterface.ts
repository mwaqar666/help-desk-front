import { DataOptions } from "vuetify";

export interface PaginatedDataWithCount<M> {
	rows: M[];
	count: number;
}

export interface PaginatedResultWithButtons<M> extends PaginatedDataWithCount<M> {
	currentPage: number;
	itemsPerPage: number;
	firstPage: number;
	lastPage: number;
	previousPage: number | null;
	nextPage: number | null;
}

export interface PaginationDataQuery {
	page: number;
	items: number;
	search?: string;
}

export const DefaultPaginatedResult: PaginatedResultWithButtons<never> = {
	count: 10,
	itemsPerPage: 10,
	currentPage: 1,
	firstPage: 1,
	lastPage: 1,
	nextPage: null,
	previousPage: null,
	rows: [],
};

export const DefaultPaginationDataQuery: DataOptions = {
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 10,
	multiSort: false,
	mustSort: false,
	page: 1,
	sortBy: [],
	sortDesc: [],
};
