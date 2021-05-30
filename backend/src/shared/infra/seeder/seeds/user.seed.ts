import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from '../../../../modules/Users/infra/typeorm/entities/User'
import { hash } from 'bcryptjs';
import { v4 } from 'uuid';
 
export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const passwordHash = await hash('123456', 8);
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { id: v4(), email: 'admin@admin.com', password: passwordHash },
      ])
      .execute()
  }
}