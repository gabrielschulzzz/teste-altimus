interface ICreateCarDTO {
    placa: string
    marca: string
    modelo: string
    ano: string
    quilometragem: number
    opcionais: string[] | undefined
}

export { ICreateCarDTO }
