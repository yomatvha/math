export default class Character {
  constructor(type, name) {
    const types = ['Magician', 'Daemon'];
    if (!types.includes(type)) {
      throw new Error('Укажите тип персонажа');
    }
    this.type = type;
    this.name = name;
    this.power = 0;
    this.getStoned = false;
    this.distance = 0;
  }

  set stoned(a) {
    this.getStoned = a;
  }

  get stoned() {
    return this.getStoned;
  }

  set attack(value) {
    this.power = value;
  }

  get attack() {
    let attackPower = this.power * (1 - (this.distance - 1) / 10);
    if (this.getStoned) {
      attackPower = Number((attackPower - Math.log2(this.distance) * 5).toFixed(2));
    }
    return attackPower;
  }
}
