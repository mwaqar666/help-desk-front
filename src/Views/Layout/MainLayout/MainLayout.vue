<template>
	<v-app>
		<v-navigation-drawer app height="100%" width="17%">
			<v-list shaped>
				<v-list-group no-action prepend-icon="mdi-clipboard-alert-outline">
					<v-list-item slot="activator">
						<v-list-item-title>Tickets</v-list-item-title>
					</v-list-item>
					<v-list-item link @click="$router.push({ name: 'ticket.index' })">
						<v-list-item-title>View Tickets</v-list-item-title>
						<v-list-item-action>
							<v-icon>mdi-clipboard-search-outline</v-icon>
						</v-list-item-action>
					</v-list-item>
					<v-list-item link @click="$router.push({ name: 'ticket.create' })">
						<v-list-item-title>Create Ticket</v-list-item-title>
						<v-list-item-action>
							<v-icon>mdi-clipboard-edit-outline</v-icon>
						</v-list-item-action>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
