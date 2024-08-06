import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class InterestsService {
    constructor(private dbService: DbService) {}

    async findAll() {
		return await this.dbService.interests.findMany({
			orderBy: {
				name: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.interests.findUnique({
			where: {
				id: id
			}
		})
	}

	async findByType(type: number) {
		return await this.dbService.interests.findMany({
			where: {
				type: type
			}
		})
	}
}
