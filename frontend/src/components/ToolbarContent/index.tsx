import { Button } from 'primereact/button'

interface ToolbarContentProps {
  openAddCarModal: () => void
}

export function ToolbarContent({ openAddCarModal }: ToolbarContentProps) {
  return (
    <>
      <Button
        label="Adicionar novo veiculo"
        icon="pi pi-plus"
        className="p-button-success p-mr-2"
        onClick={openAddCarModal}
      />
    </>
  )
}
