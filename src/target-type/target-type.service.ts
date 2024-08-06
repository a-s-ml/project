import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TargetTypeService {
    constructor(private dbService: DbService) {}

    async findAll() {
		return await this.dbService.target_type.findMany({
			orderBy: {
				name: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.target_type.findUnique({
			where: {
				id: id
			}
		})
	}
}
