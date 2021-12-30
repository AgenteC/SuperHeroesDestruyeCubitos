class Box{
constructor(x,y,width,height){
var options = {"restitution":0.8,"friction":0.1,"density":0.04}

this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height//con el this inidcas que es el width,height,etc....
World.add(world,this.body)//World es agregar algo al programa(mundo)


}
display(){//display va fuera del constructor
var pos = this.body.position
var angle = this.body.angle;//aquí haces que se puedan

push()//Push agrega cosas
rotate(angle)//Rota el angulo
translate(pos.x,pos.y)//se va a transladar en las posiciones que se le indique
rectMode(RIGHT)
rect(0,0,this.width,this.height)
fill("orange")
pop()//pop las va quitando,cuando se termina de hacer la función pop quita las cosas
}
}