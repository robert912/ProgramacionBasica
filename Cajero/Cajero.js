//alert("quieres Plata!!!");
class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.catidad = c;
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero = 80;
entregarDinero(dinero);
descuentoCantidad()
var dinero = 130;
entregarDinero(dinero);
descuentoCantidad()

function descuentoCantidad() {
    for (var bi of caja)
    {
        console.log("tiene " + bi.catidad);
        for (var bie of entregado)
        {
            if (bi.valor == bie.valor) {
                bi.catidad = bi.catidad - bie.catidad;
            }
        }
        console.log("queda " + bi.catidad);
    }
}



function entregarDinero(retiro)
{
    var saldoCa = 0
    for (var bi of caja)
    {
        saldoCa = saldoCa + (bi.catidad * bi.valor);
    }
    if (saldoCa >= retiro) {
        for (var bi of caja) {
            var cantidadBi = 0;
            if (retiro >= bi.valor) {
                cantidadBi = Math.floor(retiro / bi.valor);

                if (cantidadBi <= bi.catidad) {
                    entregado.push(new Billete(bi.valor, cantidadBi));
                    //console.log(cantidadBi);
                }
                else {
                    cantidadBi = bi.catidad;
                    entregado.push(new Billete(bi.valor, cantidadBi));
                    //console.log(cantidadBi);
                }
            }
            else
                entregado.push(new Billete(bi.valor, cantidadBi));
            retiro = retiro - (cantidadBi * bi.valor);
            cantidadBi = 0;
            //console.log(entregado[i]);
        }
    }
    else
        console.log("Saldo Insuficiente en el Cajero");
    
}