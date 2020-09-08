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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.health)


