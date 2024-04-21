export default class CartItem {
  constructor(
    public productId: string,
    public priceId: string,
    public name: string,
    public quantity: number
  ) {}
}
