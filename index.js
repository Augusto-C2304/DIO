class superHeroi{
  constructor(nome, poder, tipo){
    this.nome = nome
    this.poder = poder
    this.tipo = tipo
  }

  atacar(){
    console.log(`O ${this.tipo} usou ${this.poder}`)
  }
}

let personagem1 = new superHeroi('lucas', 'super cajado', 'mago')
let personagem2 = new superHeroi('felipe', 'espada katana', 'samurai')

personagem1.atacar()
personagem2.atacar()