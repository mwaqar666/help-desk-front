<template>
	<v-container>
		<v-card>
			<v-list-item>
				<v-card-title>Ticket List</v-card-title>
			</v-list-item>

			<v-card-text>
				<custom-data-table v-model="searchQuery" :headers="headers" :paginated-data="paginatedTickets" @fetch-data="getTickets"></custom-data-table>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script lang="ts" src="./TicketList.ts"></script>
