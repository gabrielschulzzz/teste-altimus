interface IUpdateCarDTO {
    id: string
    placa: string
    marca: string
    modelo: string
    ano: string
    quilometragem: number
    opcionais: string[]
}

export { IUpdateCarDTO }
