import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CitiesService {
	constructor(private dbService: DbService) { }

	async create(createCitiesDto: Prisma.citiesCreateInput) {
		return await this.dbService.cities.create({ data: createCitiesDto })
	}

	async findAll() {
		return await this.dbService.cities.findMany({
			orderBy: {
				name: "asc"
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.cities.findUnique({
			where: {
				id: id
			}
		})
	}

	async search(string: string) {
		return await this.dbService.cities.findMany({
			take: 10,
			where: {
				name: { search: string + '*' }
			},
			orderBy: {
				name: 'asc',
			},
		})
	}
}
