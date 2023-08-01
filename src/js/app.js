export default class Character {
  constructor(type, power) {
    const types = ['Magician', 'Daemon'];
    if (!types.includes(type)) {
      throw new Error('Укажите тип персонажа');
    }
    this.type = type;
    this.power = power;
    this.getStoned = false;
    this.distance = 0;
  }

  set stoned(a) {
    this.getStoned = a;
  }

  get stoned() {
    return this.getStoned;
  }

  set attack(cell) {
    this.distance = cell;
  }

  get attack() {
    let attack = this.power * (1 - (this.distance - 1) / 10);
    if (this.getStoned) {
      attack = Number((attack - Math.log2(this.distance) * 5).toFixed(2));
    }
    return attack;
  }
}
