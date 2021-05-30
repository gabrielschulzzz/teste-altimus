import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { CarData } from '../../interfaces/CarData'
import { ModalFooter } from '../ModalFooter'
import { InputMask } from 'primereact/inputmask'

interface AddCarModalProps {
  addCarDialogIsOpen: boolean
  closeAddCar: () => void
  handleAddNewCar: () => void
  newCar: CarData
  setNewCar: React.Dispatch<React.SetStateAction<CarData>>
}

export function AddCarModal({
  addCarDialogIsOpen,
  closeAddCar,
  handleAddNewCar,
  newCar,
  setNewCar
}: AddCarModalProps) {
  const opcionais = [
    { label: 'Ar Condicionado', value: 'arcondicionado' },
    { label: '4x4', value: '4x4' },
    { label: 'Airbag', value: 'airbag' },
    { label: 'Direção Elétrica', value: 'direcao' },
    { label: 'Freio Abs', value: 'freioabs' }
  ]

  return (
    <Dialog
      visible={addCarDialogIsOpen}
      style={{ width: '700px' }}
      header="Detalhes do carro"
      modal
      className="p-fluid"
      onHide={closeAddCar}
      footer={<ModalFooter action={handleAddNewCar} close={closeAddCar} />}
    >
      <div className="p-field">
        <label htmlFor="placa">Placa</label>
        <InputMask
          mask="aaa-9999"
          id="placa"
          value={newCar.placa}
          onChange={(e) => setNewCar({ ...newCar, placa: e.target.value })}
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="marca">Marca</label>
        <InputText
          id="marca"
          value={newCar.marca}
          onChange={(e) => setNewCar({ ...newCar, marca: e.target.value })}
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="modelo">Modelo</label>
        <InputText
          id="modelo"
          value={newCar.modelo}
          onChange={(e) => setNewCar({ ...newCar, modelo: e.target.value })}
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="ano">Ano</label>
        <InputMask
          mask="9999"
          id="ano"
          value={newCar.ano}
          onChange={(e) => setNewCar({ ...newCar, ano: e.target.value })}
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="quilometragem">Quilometragem</label>
        <InputNumber
          id="quilometragem"
          value={newCar.quilometragem}
          onChange={(e) => setNewCar({ ...newCar, quilometragem: e.value })}
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="opcionais">Opcionais</label>
        <MultiSelect
          display="chip"
          value={newCar.opcionais}
          options={opcionais}
          onChange={(e) => setNewCar({ ...newCar, opcionais: e.value })}
        />
      </div>
    </Dialog>
  )
}
