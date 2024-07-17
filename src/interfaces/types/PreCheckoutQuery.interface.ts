import { OrderInfoInterface } from "./OrderInfo.interface"
import { UserInterface } from "./User.interface"

export class PreCheckoutQueryInterface {
	id: string
	from: UserInterface
	currency: string
	total_amount: number
	invoice_payload: string
	shipping_option_id?: string
	order_info?: OrderInfoInterface
}
