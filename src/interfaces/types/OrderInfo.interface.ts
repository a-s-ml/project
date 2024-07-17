import { ShippingAddressInterface } from "./ShippingAddressInterface.interface"

export class OrderInfoInterface {
	name?: string
	phone_number?: string
	email?: string
	shipping_address?: ShippingAddressInterface
}
