prvi = {
    ime : "Milos",
    prezime : "Sekulic",
    ime_prezime : function(){return (this.ime + this.prezime)}
}


drugi = ["duaj ga", 32, 103.12]

console.log(prvi.ime_prezime())


treci = {
    marka : "audi",
    model : "q7",
    motor : {
        konjskih_snaga : [150, 180, 200],
        zapramina_motora : {
            prvi : 1.5,
            drugi : [1.6,{treci:1.7,cetvrti:1.8}],

        }
    },
    funkcija : function(){return (this.motor.konjskih_snaga[2])}
}

console.log(treci.marka);
console.log(treci.motor.konjskih_snaga[1]);
console.log(treci.motor.zapramina_motora.drugi[1].cetvrti);
console.log(treci.funkcija())

console.log(prvi["ime"]);
console.log(prvi["ime_prezime"]())