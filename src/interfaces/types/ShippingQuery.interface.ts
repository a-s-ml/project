import { ShippingAddressInterface } from "./ShippingAddressInterface.interface"
import { UserInterface } from "./User.interface"

export class ShippingQueryInterface {
	id: string
	from?: UserInterface
	invoice_payload: string
	shipping_address: ShippingAddressInterface
}
