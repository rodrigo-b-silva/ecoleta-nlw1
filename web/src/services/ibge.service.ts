import axios from 'axios';

const allUFs = async () => {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    return response.data;
}

const citiesByUF = async (uf: String) => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    return response.data;
}

export {
    allUFs,
    citiesByUF
}