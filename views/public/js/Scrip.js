function Persona(Nombre,Edad,Estatura,Color) {
  this.Nombre = Nombre
  this.Edad = Edad
  this.Estatura = Estatura
  this.Color = Color

this.Moverse = function (Nombre){
console.log(this.Nombre=Nombre +'Se movio....')
}
this.Expresarse = function () {
    console.log('Se expreso.....')
}


let Personauno = new Persona('laura',18,1.55,'blanco')
let Personados = new Persona('lUISA',18,1.59,'blanco')
let Personatres = new Persona('ANA',18,1.85,'AMARILLO')

console.log(Personauno,Personados,Personatres)
Personauno.Moverse()
Personados.Moverse()
Personatres.Moverse()