import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FormEvent } from 'react'

interface VeiculosHeader {
  veiculo: string
  setVeiculo: (value: React.SetStateAction<string>) => void
  handlePlateSearch: (e: FormEvent) => void
}

export function VeiculosHeader({
  handlePlateSearch,
  setVeiculo,
  veiculo
}: VeiculosHeader) {
  return (
    <>
      <h1>Veiculos</h1>
      <div className="p-formgroup-inline">
        <form>
          <span className="p-input-icon-left p-mr-3 p-mt-3">
            <i className="pi pi-search" />
            <InputText
              value={veiculo}
              onChange={(e) => setVeiculo(e.target.value)}
              placeholder="Placa do veiculo"
            />
          </span>
          <Button label="Procurar" onClick={(e) => handlePlateSearch(e)} />
        </form>
      </div>
    </>
  )
}
