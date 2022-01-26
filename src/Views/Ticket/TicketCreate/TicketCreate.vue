<template>
	<v-container>
		<v-card>
			<v-list-item>
				<v-card-title>Create Ticket</v-card-title>
			</v-list-item>

			<v-card-text>
				<v-form @submit.prevent="createTicket">
					<v-row>
						<v-col cols="12">
							<v-text-field v-model="createTicketDTO.ticket_title" dense label="Ticket Title" outlined></v-text-field>
						</v-col>

						<v-col cols="6">
							<v-select v-model="createTicketDTO.ticket_complaint_type" :items="selectMenus.ticketComplaintType" dense label="Escalation" outlined></v-select>
						</v-col>

						<v-col cols="6">
							<v-text-field v-model="createTicketDTO.ticket_customer_name" dense label="Customer Name" outlined></v-text-field>
						</v-col>

						<v-col cols="6">
							<v-select v-model="createTicketDTO.ticket_contact_method" :items="selectMenus.ticketContactMethod" dense label="Customer Contact Method" outlined></v-select>
						</v-col>

						<v-col cols="6">
							<v-text-field v-model="createTicketDTO.ticket_contact_details" dense label="Customer Contact Details" outlined></v-text-field>
						</v-col>

						<v-col cols="4">
							<v-select v-model="createTicketDTO.ticket_status" :items="selectMenus.ticketStatus" dense label="Status" outlined></v-select>
						</v-col>

						<v-col cols="4">
							<v-select v-model="createTicketDTO.ticket_priority" :items="selectMenus.ticketPriority" dense label="Priority" outlined></v-select>
						</v-col>

						<v-col cols="4">
							<v-text-field v-model="createTicketDTO.user_identifier" dense label="Agent Id" outlined></v-text-field>
						</v-col>

						<v-col cols="12">
							<label>Ticket Description</label>
							<vue-editor v-model="createTicketDTO.ticket_description" />
						</v-col>

						<v-col cols="12">
							<v-btn block type="submit">Create</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script lang="ts" src="./TicketCreate.ts"></script>
