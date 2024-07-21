import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class GendersTypeService {
    constructor(private dbService: DbService) {}

    async findAll() {
		return await this.dbService.genders_type.findMany({
			orderBy: {
				name: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.genders_type.findUnique({
			where: {
				id: id
			}
		})
	}
}
