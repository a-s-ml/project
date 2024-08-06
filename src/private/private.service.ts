import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class PrivateService {
    constructor(private dbService: DbService) {}

    async findAll() {
		return await this.dbService.privatePr.findMany({
			orderBy: {
				name: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.privatePr.findUnique({
			where: {
				id: id
			}
		})
	}

	async findByType(type: number) {
		return await this.dbService.privatePr.findMany({
			where: {
				type: type
			}
		})
	}
}
