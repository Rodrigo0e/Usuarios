const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

const [{ nome, cidade }] = usuarios;

console.log("O nome é: ", nome);
console.log("A cidade é: ", cidade);

const novoUsuario = [
  {
    nome: "Rebeca",
    idade: 22,
    email: "rebeca@exemplo.com",
    cidade: "Camamu",
    interesses: ["Estudos", "Leitura","Series"]
  }
]

const usuariosDoNorte = [ ...usuarios, ...novoUsuario ];
console.log(usuariosDoNorte);

const beatriz = usuarios[1];
const beatrizAtualizado = {
  ...beatriz,
  email: "bia@exemplo.com"
};

console.log(beatrizAtualizado);

function mostrarInteresse({nome, interesses}) {
  console.log(`${nome} Tem interesse em: ${interesses.join(', ')}`);
};

mostrarInteresse(usuarios[0]);
mostrarInteresse(usuarios[1]);
mostrarInteresse(usuariosDoNorte[2]);