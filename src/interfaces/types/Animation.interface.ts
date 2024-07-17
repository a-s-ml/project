import { PhotoSizeInterface } from "./PhotoSize.interface"

export class AnimationInterface {
	file_id: string
	file_unique_id: string
	width: number
	height: number
	duration: number
	thumbnail?: PhotoSizeInterface
	file_name?: string
	mime_type?: string
	file_size?: number
}
