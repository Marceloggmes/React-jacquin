import type { Produto, ProdutoRequest } from "../types/Produto";
import { api } from "./api"

const produtoservice = {
    async listar() {
        const resposta = await api.get<Produto[]>('produtos');
        return resposta.data;
    },
    async buscar(id: number) {
        const resposta = await api.get(`produtos/${id}`)
        return resposta.data;
    },
    async cadastrar(dados: ProdutoRequest, aquivo:File){
        const formulario = new FormData();
        formulario.append('nome', dados.nome);
        formulario.append('descricaoCurta',dados.descricaoCurta);
        formulario.append('descricaoLonga', dados.descricaoLonga);
        formulario.append('precoPorKg', String(dados.precoPorKg));
        formulario.append('ativo', String(dados.ativo));
        formulario.append('categoriaIds', JSON.stringify(dados.categoriaIds));
        formulario.append('imagem', aquivo);
        const resposta = await api.post<Produto>('produtos', formulario);
        return resposta.data;
    },
    async atualizar(id :number, dados : ProdutoRequest){
        const resposta = await api.put<Produto>(`produto/${id}`,dados)
    },
    async excluir(id:number){
        api.delete(`produto/${id}`)
    } 
}

export default produtoservice