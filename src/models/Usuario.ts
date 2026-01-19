import type Postagem from "./Postagem";

export default  interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto?: string;
  postagem?: Postagem[] | null;
}   

// ?) junto do atributo postagem sinaliza que o preenchimento deste campo é opcional.