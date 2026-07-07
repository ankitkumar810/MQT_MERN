function Dog(name, bark, eat, colour, weight){
    this.name=name;
    this.bark=bark;
    this.eat=eat;
    this.colour=colour;
    this.weight=weight;

    this.eat=function(){
        console.log("Bones");
    };
    this.bark=function(){
        console.log("Bhau Bhau!!");
    };
}
    const dogJacky =new Dog("Jacky", "Bhau", "Bones", "White", 12)
    console.log(dogJacky); 