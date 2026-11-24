export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorKg: number;
    ativo: boolean;
    imagem: string;
    categoriaIds: Number[]
}

export type ProdutoRequest = Omit<Produto, 'id'>