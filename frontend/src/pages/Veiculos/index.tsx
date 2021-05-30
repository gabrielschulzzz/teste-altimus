import { Toolbar } from 'primereact/toolbar'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { DeleteCarModal } from '../../components/DeleteCarModal'
import { AddCarModal } from '../../components/AddCarModal'
import { EditCarModal } from '../../components/EditCarModal'
import { ToolbarContent } from '../../components/ToolbarContent'
import { Tabela } from '../../components/Tabela'
import { VeiculosHeader } from '../../components/VeiculosHeader'
import { CarData } from '../../interfaces/CarData'
import { ActionButtons } from '../../components/ActionButtons'
import { Toast } from 'primereact/toast'

import axios from 'axios'

export function Veiculos() {
  const [addCarModalIsOpen, setAddCarModalIsOpen] = useState(false)
  const [deleteCarModalIsOpen, setDeleteCarModalIsOpen] = useState(false)
  const [editCarModalIsOpen, setEditCarModalIsOpen] = useState(false)
  const [currentCar, setCurrentCar] = useState({} as CarData)
  const [veiculo, setVeiculo] = useState('')
  const [veiculosLista, setVeiculosLista] = useState([] as CarData[])
  const [filtrarVeiculo, setFiltrarVeiculo] = useState('')
  const [displayTable, setDisplayTable] = useState(false)
  const [newCar, setNewCar] = useState({
    id: '',
    placa: '',
    marca: '',
    modelo: '',
    ano: '',
    quilometragem: 0,
    opcionais: []
  } as CarData)
  const toastRef = useRef<any>()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3333/cars')

      setVeiculosLista(data)
    }
    fetchData()
  }, [])

  function handleOpenEditCarModal(rowData: CarData) {
    setEditCarModalIsOpen(true)
    setCurrentCar(rowData)
  }

  async function handleAddNewCar() {
    try {
      const { data } = await axios.post('http://localhost:3333/cars', {
        placa: newCar.placa.toUpperCase(),
        ano: newCar.ano,
        marca: newCar.marca,
        modelo: newCar.modelo,
        quilometragem: newCar.quilometragem,
        opcionais: newCar.opcionais
      })
      setVeiculosLista([
        {
          id: data.id,
          placa: newCar.placa.toUpperCase(),
          ano: newCar.ano,
          marca: newCar.marca,
          modelo: newCar.modelo,
          quilometragem: newCar.quilometragem,
          opcionais: newCar.opcionais
        },
        ...veiculosLista
      ])
      setNewCar({
        id: '',
        placa: '',
        marca: '',
        modelo: '',
        ano: '',
        quilometragem: 0,
        opcionais: []
      } as CarData)
      setAddCarModalIsOpen(false)
    } catch (error) {
      toastRef.current.show({
        severity: 'error',
        summary: 'Erro!',
        detail: error.response.data.message
      })
    }
  }

  function handlePlateSearch(e: FormEvent) {
    e.preventDefault()
    setDisplayTable(true)
    setFiltrarVeiculo(veiculo)
  }

  async function handleDeleteCar(rowData: CarData) {
    await axios.delete(`http://localhost:3333/cars/${rowData.id}`)
    const newCarList = veiculosLista.filter(
      (veiculo) => veiculo.id !== rowData.id
    )
    setVeiculosLista(newCarList)
    setDeleteCarModalIsOpen(false)
    setCurrentCar({} as CarData)
  }

  function handleConfirmDeleteProduct(rowData: CarData) {
    setDeleteCarModalIsOpen(true)
    setCurrentCar(rowData)
  }

  function actionBodyTemplate(rowData: CarData) {
    return (
      <ActionButtons
        handleConfirmDeleteProduct={handleConfirmDeleteProduct}
        handleOpenEditCarModal={handleOpenEditCarModal}
        rowData={rowData}
      />
    )
  }

  return (
    <>
      <VeiculosHeader
        handlePlateSearch={handlePlateSearch}
        setVeiculo={setVeiculo}
        veiculo={veiculo}
      />
      <Toast ref={toastRef} />

      {displayTable && (
        <>
          <Toolbar
            left={
              <ToolbarContent
                openAddCarModal={() => setAddCarModalIsOpen(true)}
              />
            }
            className="p-mt-3"
          />
          <Tabela
            actionBodyTemplate={actionBodyTemplate}
            filtrarVeiculo={filtrarVeiculo}
            veiculosLista={veiculosLista}
          />
        </>
      )}

      <AddCarModal
        addCarDialogIsOpen={addCarModalIsOpen}
        closeAddCar={() => setAddCarModalIsOpen(false)}
        handleAddNewCar={handleAddNewCar}
        newCar={newCar}
        setNewCar={setNewCar}
      />

      <DeleteCarModal
        deleteCarDialogIsOpen={deleteCarModalIsOpen}
        closeDeleteCar={() => setDeleteCarModalIsOpen(false)}
        handleDeleteCar={handleDeleteCar}
        currentCar={currentCar}
      />

      <EditCarModal
        editCarDialogIsOpen={editCarModalIsOpen}
        closeEditCar={() => setEditCarModalIsOpen(false)}
        currentCar={currentCar}
        setCurrentCar={setCurrentCar}
        setVeiculosLista={setVeiculosLista}
        veiculosLista={veiculosLista}
      />
    </>
  )
}
