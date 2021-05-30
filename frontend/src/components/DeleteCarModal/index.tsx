import { Dialog } from 'primereact/dialog'
import { CarData } from '../../interfaces/CarData'
import { ModalFooter } from '../ModalFooter'

interface DeleteCarModal {
  deleteCarDialogIsOpen: boolean
  closeDeleteCar: () => void
  handleDeleteCar: (rowData: CarData) => void
  currentCar: CarData
}

export function DeleteCarModal({
  deleteCarDialogIsOpen,
  closeDeleteCar,
  handleDeleteCar,
  currentCar
}: DeleteCarModal) {
  return (
    <Dialog
      visible={deleteCarDialogIsOpen}
      style={{ width: '450px' }}
      header="Confirmar exclusao"
      modal
      footer={
        <ModalFooter
          actionDelete={handleDeleteCar}
          close={closeDeleteCar}
          currentCar={currentCar}
        />
      }
      onHide={closeDeleteCar}
    >
      <div className="confirmation-content">
        <i
          className="pi pi-exclamation-triangle p-mr-3"
          style={{ fontSize: '2rem' }}
        />
        <span>Deseja excluir o carro de placa {currentCar.placa}?</span>
      </div>
    </Dialog>
  )
}
