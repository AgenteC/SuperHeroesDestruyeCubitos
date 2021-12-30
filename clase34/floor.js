class floor{ 
//En el constructor guardamos las propiedades del objeto
    constructor(x,y,weight,height){
var options = { isStatic:true}
    this.body = Bodies.rectangle(x,y,weight,height,options)// Agregamos options paara que sepa que se va a quedar statico
    this.weight = weight
    this.height = height
World.add(world,this.body)//Lo ponemos porque queremos agregar al mundo(programa) el rectangulo
    }
    display(){//El display muestra las funciones,indicas como quieres que lo muestre

var pos = this.body.position//Aquí le indicamos que queremos saber la posición del cuerpo,pos es la variable que guarda las posiciones
 rectMode(CENTER)//Indicamos donde queremos que este,en este caso lo pone al centro
rect(pos.x,pos.y,this.weight,this.height)

    }
}



