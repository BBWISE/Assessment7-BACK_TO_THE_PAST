class inheritedProperties {
    constructor  (X) {
        this.X = X;
    }
    timeMachine(year, age) {
        let reminant = this.X;
        for (let i = 1800; i <= year; i++) {
            if (i % 2 == 0) {
                reminant -= 12000;
            }
            else {
                reminant -= (12000 + (age * 50));
            }
            age +=1
        }
        return reminant;
    }
}

class Ivan extends inheritedProperties {
    
    constructor(inheritedMoney, year) {
        super(inheritedMoney);
        this.year = year;
        this.age = 18;
    }
    moneyCapacity() {
        
        let mCapacity = super.timeMachine(this.year, this.age);
        
        if (mCapacity >= 0) {
            
            return `Yes! He will live a carefree life and will have ${mCapacity} dollars left.`
        }
        else {
            return `He will need ${mCapacity * -1} dollars to survive.`

        }
    }

}

let ivan = new Ivan(50000, 1802);
console.log(ivan.moneyCapacity());

console.log("\n\n")

let ivan2 = new Ivan(30000, 1802);
console.log(ivan2.moneyCapacity());