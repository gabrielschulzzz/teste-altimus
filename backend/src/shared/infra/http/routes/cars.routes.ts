import { AddCarController } from '@modules/Cars/useCases/addCar/AddCarController';
import { DeleteCarController } from '@modules/Cars/useCases/deleteCar/DeleteCarController';
import { EditCarController } from '@modules/Cars/useCases/editCar/EditCarController';
import { ListAllCarsController } from '@modules/Cars/useCases/listAllCars/ListAllCarsController';
import { Router } from 'express';

const carRoutes = Router();

const addCarController = new AddCarController();
const listAllCarsController = new ListAllCarsController();
const editCarController = new EditCarController()
const deleteCarController = new DeleteCarController()

carRoutes.get("/", listAllCarsController.handle)
carRoutes.post("/", addCarController.handle)
carRoutes.patch("/:id", editCarController.handle)
carRoutes.delete("/:id", deleteCarController.handle)

export { carRoutes };