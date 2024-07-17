import { PhotoSizeInterface } from "./PhotoSize.interface"

export class UserProfilePhotosInterface {
	total_count: number
	photos: Array<Array<PhotoSizeInterface>>
}
