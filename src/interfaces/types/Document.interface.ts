import { PhotoSizeInterface } from "./PhotoSize.interface"

export class DocumentInterface {
	file_id: string
	file_unique_id: string
	thumbnail?: PhotoSizeInterface
	file_name?: string
	mime_type?: string
	file_size?: number
}
