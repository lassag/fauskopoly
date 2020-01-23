export class Property {
  constructor (name, price, groupNumber, baseRent) {
    this.name = name,
    this.price = price,
    this.groupNumber = groupNumber,
    this.baseRent = baseRent
  }

  getGroupColor() {
    switch (this.groupNumber) {
      case 1:
        // Brown properties
        return "#8e4a37";
          break;
      case 2:
        // Blue properties
        return "#128df4";
          break;
      case 3:
        // Pink properties
        return "#f7277f";
          break;
      case 4:
        // Orange properties
        return "#ef893e";
          break;
      case 5:
        // Red properties
        return "#fa3232";
          break;
      case 6:
        // Yellow properties
        return "#fbFe27";
          break;
      case 7:
        // Green properties
        return "#1a874e";
          break;
      case 8:
        // Purple properties
        return "#1a4Cab";
          break;
    }
  }
}

// 40 slots
// 2 brune
// 3 blå
// 3 rosa
// 3 oransje
// 3 rød
// 3 gul
// 3 grønn
// 2 blå

// 4 tog
// 2 elektrisitet
// 3 community chests
// 3 sjansekort
// 2 skatt
// 2 fengsel
// 1 gratis parkering
// 1 start
