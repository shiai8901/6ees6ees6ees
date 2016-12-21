class HoneyMakerBee extends Bees{
  // TODO..
  constructor() {
    super();
    this.eage = 10
    this.job = 'make honey'
    this.honeyPot = 0
  }

  makeHoney() {
    this.honeyPot += 1
  }

  giveHoney() {
    this.honeyPot -= 1
  }
};
