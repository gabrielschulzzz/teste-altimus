import { Car } from "../../../../modules/Cars/infra/typeorm/entities/Car"
import { define } from 'typeorm-seeding'
import { v4 } from 'uuid'
import Faker from 'faker'

define(Car, (faker: typeof Faker) => {
    const letras = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
    const numeros = Math.floor(1000 + Math.random() * 9000);
    const placa = `${letras}-${numeros}`.toUpperCase()
    const marca = Faker.vehicle.manufacturer()
    const modelo = Faker.vehicle.model()
    const quilometragem = Faker.datatype.number()
    const ano = String(Math.floor(Math.random() * (2021 - 1960 + 1)) + 1960);
   
    const car = new Car()
    car.id = v4()
    car.placa = placa
    car.marca = marca
    car.modelo = modelo
    car.quilometragem = quilometragem
    car.ano = ano

    return car
  })