<template>
	<v-row>
		<v-col cols="4" offset="8">
			<v-text-field :value="value" append-icon="mdi-magnify" hide-details label="Search" single-line @change="emitSearchQuery"></v-text-field>
		</v-col>
		<v-col cols="12">
			<v-data-table :headers="headers" :items="paginatedData.rows" :loading="dataLoading" :options="paginationQuery" :search="'qq'" :server-items-length="paginatedData.count" class="elevation-1" hide-default-header @pagination="updatePagination">
				<template v-slot:header="headerInfo">
					<thead class="grey text--darken-1 darken-3">
						<tr>
							<th v-for="(eachHeader, index) in headerInfo.props.headers" :key="index" class="grey--text text--lighten-1">
								<span>{{ eachHeader.text }}</span>
							</th>
							<th class="grey--text text--lighten-1">
								<span>Actions</span>
							</th>
						</tr>
					</thead>
				</template>
				<!--		<template v-slot:body.prepend="dataTableInfo">-->
				<!--			<tr>-->
				<!--				<td v-for="(eachHeader, index) in dataTableInfo.headers" :key="index">-->
				<!--					<v-text-field v-if="eachHeader.filterable" :label="`Filter ${eachHeader.text}`" class="mt-6" dense outlined></v-text-field>-->
				<!--				</td>-->
				<!--				<td></td>-->
				<!--			</tr>-->
				<!--		</template>-->
				<template v-slot:item="itemInfo">
					<tr>
						<td v-for="(columnInfo, index) in itemInfo.headers" :key="index">{{ extractValueFromObject(itemInfo.item, columnInfo.value) }}</td>
						<td>
							<v-btn class="mx-2" color="primary" dark fab small @click="$router.push({ name: 'ticket.edit', params: { ticket: itemInfo.item.ticket_uuid } })">
								<v-icon dark>mdi-pencil</v-icon>
							</v-btn>
						</td>
					</tr>
				</template>
				<template slot="foot">
					<tfoot class="grey darken-3">
						<tr>
							<th v-for="(eachFooter, index) in headers" :key="index" class="grey--text text--lighten-1">
								<span>{{ eachFooter.text }}</span>
							</th>
							<th class="grey--text text--lighten-1">
								<span>Actions</span>
							</th>
						</tr>
					</tfoot>
				</template>
			</v-data-table>
		</v-col>
	</v-row>
</template>

<script lang="ts" src="./CustomDataTable.ts"></script>
