class Ninja{
    constructor(name, health, speed, strenght){
        this.name = "Alec";
        this.health = 95;
        this.speed = 3;
        this.strenght = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("name:" + this.name +"/"+ "strenght:" + this.strenght +"/"+ "speed:" +this.speed +"/"+ "health:" +this.health)
    }

    drinkSake(){
        this.health += 10;
        // console.log(this.health);
    }
}


class Sensei extends Ninja {
    constructor(health, speed, strenght){
        super ("Alec", health, speed, strenght);
        this.health=200;
        this.speed=10;
        this.strenght=10;
        this.wisdom=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Olga knows all!");
    }
    drinkSake(){
        this.health += 409;
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
superSensei.drinkSake();
superSensei.showStats();
