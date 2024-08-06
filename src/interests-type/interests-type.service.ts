import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class InterestsTypeService {
    constructor(private dbService: DbService) {}

    async findAll() {
		return await this.dbService.interests_type.findMany({
			orderBy: {
				name: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.interests_type.findUnique({
			where: {
				id: id
			}
		})
	}
}
