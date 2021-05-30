import { Column } from 'primereact/components/column/Column'
import { DataTable } from 'primereact/datatable'
import { CarData } from '../../interfaces/CarData'

interface TabelaProps {
  veiculosLista: CarData[]
  filtrarVeiculo: string
  actionBodyTemplate(rowData: CarData): JSX.Element
}

export function Tabela({
  veiculosLista,
  filtrarVeiculo,
  actionBodyTemplate
}: TabelaProps) {
  return (
    <DataTable
      className="p-mt-3 p-datatable-striped p-shadow-3"
      value={veiculosLista}
      globalFilter={filtrarVeiculo}
      emptyMessage="Nenhum carro encontrado."
    >
      <Column field="placa" header="Placa" sortable></Column>
      <Column
        field="marca"
        header="Marca"
        excludeGlobalFilter
        sortable
      ></Column>
      <Column
        field="modelo"
        header="Modelo"
        excludeGlobalFilter
        sortable
      ></Column>
      <Column field="ano" header="Ano" excludeGlobalFilter sortable></Column>
      <Column
        field="quilometragem"
        header="Quilometragem"
        excludeGlobalFilter
        sortable
      ></Column>
      <Column
        header="Ações"
        body={actionBodyTemplate}
        excludeGlobalFilter
      ></Column>
    </DataTable>
  )
}
