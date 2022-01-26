<template>
	<v-container>
		<v-card class="mb-3">
			<v-list-item>
				<v-card-title>Edit Ticket</v-card-title>
			</v-list-item>

			<v-card-text>
				<v-form @submit.prevent="updateTicket">
					<v-row>
						<v-col cols="12">
							<v-text-field v-model="updateTicketDTO.ticket_title" dense label="Ticket Title" outlined></v-text-field>
						</v-col>

						<v-col cols="6">
							<v-select v-model="updateTicketDTO.ticket_complaint_type" :items="selectMenus.ticketComplaintType" dense label="Escalation" outlined></v-select>
						</v-col>

						<v-col cols="6">
							<v-text-field v-model="updateTicketDTO.ticket_customer_name" dense label="Customer Name" outlined></v-text-field>
						</v-col>

						<v-col cols="6">
							<v-select v-model="updateTicketDTO.ticket_contact_method" :items="selectMenus.ticketContactMethod" dense label="Customer Contact Method" outlined></v-select>
						</v-col>

						<v-col cols="6">
							<v-text-field v-model="updateTicketDTO.ticket_contact_details" dense label="Customer Contact Details" outlined></v-text-field>
						</v-col>

						<v-col cols="4">
							<v-select v-model="updateTicketDTO.ticket_status" :items="selectMenus.ticketStatus" dense label="Status" outlined></v-select>
						</v-col>

						<v-col cols="4">
							<v-select v-model="updateTicketDTO.ticket_priority" :items="selectMenus.ticketPriority" dense label="Priority" outlined></v-select>
						</v-col>

						<v-col cols="4">
							<v-select v-model="updateTicketDTO.ticket_validity" :items="selectMenus.ticketValidity" dense label="Validity" outlined></v-select>
						</v-col>

						<v-col cols="12">
							<label>Ticket Description</label>
							<vue-editor v-model="updateTicketDTO.ticket_description" />
						</v-col>

						<v-col cols="12">
							<v-btn block type="submit">Create</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-card-text>
		</v-card>

		<v-card class="mb-3">
			<v-list-item>
				<v-card-title>Add Comment</v-card-title>
			</v-list-item>

			<v-card-text>
				<v-form @submit.prevent="addComment">
					<v-row>
						<v-col cols="12">
							<label>Ticket Description</label>
							<vue-editor v-model="createTicketCommentDTO.ticket_comment_text" />
						</v-col>

						<v-col cols="12">
							<v-btn block type="submit">Add Comment</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-card-text>
		</v-card>

		<ticket-comment :existing-ticket-comments="existingTicketComments"></ticket-comment>
	</v-container>
</template>

<script lang="ts" src="./TicketEdit.ts"></script>
