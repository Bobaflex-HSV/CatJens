class Cat {
  constructor() {
    this.tiredness = 0; // 0 = not tired, 100 = very tired
    this.hunger = 0; // 0 = not hungry, 100 = very hungry
    this.loneliness = 0; // 0 = lonely, 100 = not lonely
    this.happiness = 0; // 0 = not happy, 100 = very happy
  }

  feed(times) {
    if (this.hunger > 20) {
      console.log("Thank you for feeding me.");
      this.hunger = this.hunger - times * 20;
    } else console.log("I am not hungry");
  }

  play(times) {
    if (this.happiness < 80) {
      this.happiness = this.happiness + times * 30;
    } else console.log("I am happy, so I don't want to play");
  }

  pet(times) {
    if (this.loneliness < 20) {
      console.log("I feel less lonely now.");
      this.loneliness = this.loneliness - times * 20;
    } else console.log("Leave me alone!");
  }

  sleep(hours) {
    if (this.tiredness < 100) {
      console.log(`I am taking a nap for ${hours} hour(s).`);
      this.tiredness = this.tiredness - hours * 20;
    } else console.log("I am not sleepy");
  }

  // running tires out the cat
  run(hours) {
    if (this.tiredness < 80) {
      console.log(`I enjoyed running around for ${hours} hour(s).`);
      this.tiredness = this.tiredness + hours * 30;
    } else console.log("I am not not moving from here!");
  }

  // for whatever reason a cat gets hungry from pooping
  poop() {
    if (this.hunger > 80) {
      console.log("I have nothing left in me!");
    } else {
      console.log("That dump felt really good! And it smells good too!");
      this.hunger += 80;
    }
  }

  // being alone decrease happiness and increases loneliness
  isLeftAlone(hours) {
    this.happiness -= hours * 30;
    this.loneliness += hours * 50;
  }

  mood() {
    let moodCollection = "";

    // add hunger status to mood
    if (this.hunger <= 20) {
      moodCollection = moodCollection + "I am not hungry and ";
    } else if (this.hunger < 50) {
      moodCollection = moodCollection + "I am somewhat hungry and ";
    } else if (this.hunger >= 50) {
      moodCollection = moodCollection + "I am starving to death and ";
    } else {
    }
    // add tiredness status to mood
    if (this.tiredness <= 20) {
      moodCollection = moodCollection + "am full of life. ";
    } else if (this.tiredness < 50) {
      moodCollection = moodCollection + "missing a little bit of energy. ";
    } else if (this.tiredness >= 50) {
      moodCollection = moodCollection + "too tired to do anything. ";
    } else {
    }

    // add happiness status to mood
    if (this.happiness <= 20) {
      moodCollection = moodCollection + "Dark times are in my life...";
    } else if (this.happiness < 70) {
      moodCollection = moodCollection + "Things could look rosier...";
    } else if (this.happiness >= 70) {
      moodCollection =
        moodCollection + "Total happiness is the name of the game...";
    } else {
    }
    // add loneliness status to mood
    if (this.loneliness <= 20) {
      moodCollection = moodCollection + "and I dont't feel alone ";
    } else if (this.loneliness < 50) {
      moodCollection = moodCollection + "and I could use a little company.";
    } else if (this.loneliness >= 60) {
      moodCollection = moodCollection + "and nobody seems to care for me.";
    } else {
    }

    console.log(moodCollection);
  }
}

const buttercup = new Cat();
buttercup.mood();
buttercup.poop();
buttercup.mood();
buttercup.feed(1);
buttercup.play(2);
buttercup.mood();
buttercup.isLeftAlone(2);
buttercup.play(2);
buttercup.mood();
console.log(buttercup);
