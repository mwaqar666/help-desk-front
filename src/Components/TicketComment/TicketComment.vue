<template>
	<v-card class="mb-3">
		<v-list-item>
			<v-card-title>Comments</v-card-title>
		</v-list-item>

		<v-card-text>
			<v-row>
				<v-col v-for="(ticketComment, index) in existingTicketComments" :key="index" cols="12">
					<p v-html="ticketComment.ticket_comment_text"></p>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script lang="ts" src="./TicketComment.ts"></script>
