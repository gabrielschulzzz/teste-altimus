import { Button } from 'primereact/button'
import { CarData } from '../../interfaces/CarData'

interface ActionButtonsProps {
  handleOpenEditCarModal: (rowData: CarData) => void
  handleConfirmDeleteProduct: (rowData: CarData) => void
  rowData: CarData
}

export function ActionButtons({
  handleConfirmDeleteProduct,
  handleOpenEditCarModal,
  rowData
}: ActionButtonsProps) {
  return (
    <div className="p-mx-auto">
      <Button
        style={{ color: '#fff ' }}
        icon="pi pi-pencil"
        className="p-button-rounded p-button-warning p-mr-2"
        onClick={() => handleOpenEditCarModal(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger"
        onClick={() => handleConfirmDeleteProduct(rowData)}
      />
    </div>
  )
}
