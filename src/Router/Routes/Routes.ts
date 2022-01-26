import { IDefinedRoute } from "@/Router/Types/RouteTypes";
import { RouteEngine } from "@/Router/Routes/RouteEngine";
import TicketList from "@/Views/Ticket/TicketList/TicketList.vue";
import TicketEdit from "@/Views/Ticket/TicketEdit/TicketEdit.vue";
import TicketCreate from "@/Views/Ticket/TicketCreate/TicketCreate.vue";

const routes: IDefinedRoute[] = [
	{
		path: "/",
		name: "home",
		component: TicketList,
	},
	{
		prefixName: "ticket",
		prefixPath: "ticket",
		routes: [
			{ path: "/", name: "index", component: TicketList },
			{ path: "/edit/:ticket", name: "edit", component: TicketEdit },
			{ path: "/create", name: "create", component: TicketCreate },
		],
	},
];

export default RouteEngine.getInstance(routes).getParsedRoutes();
