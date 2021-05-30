import axios from 'axios'
import { Dialog } from 'primereact/dialog'
import { InputMask } from 'primereact/inputmask'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { CarData } from '../../interfaces/CarData'
import { ModalFooter } from '../ModalFooter'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'

interface editCarModalProps {
  editCarDialogIsOpen: boolean
  closeEditCar: () => void
  currentCar: CarData
  setCurrentCar: React.Dispatch<React.SetStateAction<CarData>>
  setVeiculosLista: React.Dispatch<React.SetStateAction<CarData[]>>
  veiculosLista: CarData[]
}

export function EditCarModal({
  editCarDialogIsOpen,
  closeEditCar,
  currentCar,
  setCurrentCar,
  setVeiculosLista,
  veiculosLista
}: editCarModalProps) {
  const toastRef = useRef<any>()
  const opcionais = [
    { label: 'Ar Condicionado', value: 'arcondicionado' },
    { label: '4x4', value: '4x4' },
    { label: 'Airbag', value: 'airbag' },
    { label: 'Direção Elétrica', value: 'direcao' },
    { label: 'Freio Abs', value: 'freioabs' }
  ]

  async function editCar() {
    try {
      setCurrentCar(currentCar)

      await axios.patch(`http://localhost:3333/cars/${currentCar.id}`, {
        ...currentCar,
        placa: currentCar.placa.toUpperCase()
      })

      const veiculosFiltrados = veiculosLista.filter(
        (veiculo) => veiculo.id !== currentCar.id
      )
      setVeiculosLista([
        ...veiculosFiltrados,
        {
          ...currentCar,
          placa: currentCar.placa.toUpperCase()
        }
      ])
      setCurrentCar({
        id: '',
        placa: '',
        marca: '',
        modelo: '',
        ano: '',
        quilometragem: 0,
        opcionais: []
      })
      closeEditCar()
    } catch (error) {
      toastRef.current.show({
        severity: 'error',
        summary: 'Erro!',
        detail: error.response.data.message
      })
    }
  }

  return (
    <Dialog
      visible={editCarDialogIsOpen}
      style={{ width: '700px' }}
      header="Detalhes do carro"
      modal
      className="p-fluid"
      onHide={closeEditCar}
      footer={<ModalFooter close={closeEditCar} action={editCar} />}
    >
      <Toast ref={toastRef} />
      <div className="p-field">
        <label htmlFor="name">Placa</label>
        <InputMask
          mask="aaa-9999"
          id="placa"
          value={currentCar.placa}
          onChange={(e) =>
            setCurrentCar({ ...currentCar, placa: e.target.value })
          }
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="description">Marca</label>
        <InputText
          id="marca"
          value={currentCar.marca}
          onChange={(e) =>
            setCurrentCar({ ...currentCar, marca: e.target.value })
          }
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="description">Modelo</label>
        <InputText
          id="modelo"
          value={currentCar.modelo}
          onChange={(e) =>
            setCurrentCar({ ...currentCar, modelo: e.target.value })
          }
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="description">Ano</label>
        <InputMask
          id="description"
          mask="9999"
          value={currentCar.ano}
          onChange={(e) =>
            setCurrentCar({ ...currentCar, ano: e.target.value })
          }
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="description">Quilometragem</label>
        <InputNumber
          id="description"
          value={currentCar.quilometragem}
          onChange={(e) =>
            setCurrentCar({ ...currentCar, quilometragem: e.value })
          }
          required
        />
      </div>
      <div className="p-field">
        <label htmlFor="opcionais">Opcionais</label>
        <MultiSelect
          display="chip"
          value={currentCar.opcionais}
          options={opcionais}
          onChange={(e) => setCurrentCar({ ...currentCar, opcionais: e.value })}
        />
      </div>
    </Dialog>
  )
}
