const HashMap = require('./hashmap')

function main(){
    const lotr = new HashMap();

    lotr.MAX_LOAD_RATIO = .5;
    lotr.SIZE_RATIO = 3;


    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');

    console.log(lotr)
    console.log(lotr.get('Maiar'))
    console.log(lotr.get('Hobbit'))
}

main();