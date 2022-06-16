let amigo = {nome:'Jose', 
sexo:'Masculino', 
peso:'85.4',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome}, do sexo ${amigo.sexo} pesa ${amigo.peso}kg`)
