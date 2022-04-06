class Billete
{
    constructor (n, v, c)
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.nombre = n;

        this.imagen.src = imagenes[this.nombre];
    }

    mostrar(elemento)
    {     
        elemento.appendChild(this.imagen); 
        const br = document.createElement('br');

        elemento.appendChild(br); 
    }
}

 
this.imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";

function entregarDinero()
{   
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(bi of caja)
    {

      if(dinero >0)
      {
        div = Math.floor(dinero /bi.valor);
        
        if(div > bi.cantidad)
        {
            papeles = bi.cantidad;
        }
        else 
        {
            papeles = div;
        }

        entregado.push( new Billete(bi.nombre, bi.valor, papeles) );
        dinero -= (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "No podemos dar ese monto." + "<br />";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
            resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            e.mostrar(resultado);
            }
        }
    }
}
  
var caja = [];
var entregado = [];
caja.push( new Billete("100", 100, 5) );
caja.push( new Billete("50", 50, 10) );
caja.push( new Billete("20", 20, 30) );
caja.push( new Billete("10", 10, 20) );
caja.push( new Billete("5", 5, 5) );
var dinero = dinero;
var div = 0; 
var papeles = 0; 

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
