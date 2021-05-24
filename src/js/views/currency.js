class CurrencyUI {
  constructor() {
    this.currency = document.getElementById('currency');
    this.dictionary = {
      RUB: '₽',
      USD: '$',
      EUR: '€',
    };
  }

  get currecyValue () {
    return this.currency.value;
  }

  getCurrencySymbol () {
    return this.dictionary[this.currecyValue];
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;
