import { Button } from 'primereact/button'
import { CarData } from '../../interfaces/CarData'

interface ModalFooterProps {
  close: () => void
  action?: () => void
  actionDelete?: (currentCar: CarData) => void
  currentCar?: CarData
}

export function ModalFooter({
  close,
  action,
  actionDelete,
  currentCar
}: ModalFooterProps) {
  return (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={close}
      />
      {action && (
        <Button
          label="Adicionar"
          icon="pi pi-check"
          className="p-button-text"
          onClick={action}
        />
      )}
      {currentCar && actionDelete && (
        <Button
          label="Remover"
          icon="pi pi-check"
          className="p-button-text"
          onClick={() => actionDelete(currentCar)}
        />
      )}
    </>
  )
}
