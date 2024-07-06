
export default function gerarSenhaAleatoria(): string {
    const tamanhoSenha = 8;
    const caracteresPossiveis = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceCaracter = Math.floor(Math.random() * caracteresPossiveis.length);
        senha += caracteresPossiveis[indiceCaracter];
    }

    return senha;
}
