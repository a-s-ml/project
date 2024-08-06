import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class PrivateTypeService {
    constructor(private dbService: DbService) {}

    async findAll() {
		return await this.dbService.privat_type.findMany({
			orderBy: {
				id: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.privat_type.findUnique({
			where: {
				id: id
			}
		})
	}
}
