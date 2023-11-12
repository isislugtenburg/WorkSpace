// exemplo classe 
class celular {
    constructor(marca,memoria,modelo,memoriaRam, cor) {
        this.marca = marca ; // são madados de atributos
        this.modelo = modelo ;  // deve ser usado o sinal de igual
        this.cor = cor ;
        this.memoria = memoria ; 
        this.memoriaRam = memoriaRam ;
    }

    ligar(){
        console.log("ligando o celular...")
    }
    desligar(){
        if(this.isDesligado === true) {
            return 'Deligando......'
    }else{
        return 'Não vou delisgar seu banana, catapimbas'
    }
    }
    pesquisa(){
        console.log('Pesquisando........')
    }    
}
 //instancial classe
 var motorola = new celular();  
 console.log(motorola.cor = 'amarelo')
 console.log(motorola.marca = 'nokia')
 console.log(motorola.memoria = '256')
 console.log(motorola.memoriaRam = '4')

 var motorola = new celular('amarelo', 'nokia 1956', 56, '4', '2600mg')
 console.log(motorola)

 var motorola = new celular('positvo', 'jubileu tisti80', 'preto amarelado', 8, '252mb')
