import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Car } from '../../../../modules/Cars/infra/typeorm/entities/Car'

export default class CreateCars implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
      await factory(Car)().createMany(10)
    }
  }