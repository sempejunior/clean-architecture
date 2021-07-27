import { ICarrinho } from "../model/interfaces/ICarrinho";
import { IProduct } from "../model/interfaces/IProduct";
import { DiscountService } from "../service/DiscountService"
import { Cpf } from "../model/Cpf";
import { v4 as uuidv4 } from 'uuid';

export class CarrinhoService {

    discountService: DiscountService;

    constructor() {
        this.discountService = new DiscountService();
    }

    public comprar(carrinho: ICarrinho): Promise<void> {

        this.validate(carrinho.user.cpf);

        const totalWithouDiscount = this.calculateTotal(carrinho.products);

        carrinho.id = uuidv4();

        const totalWithDiscount = this.discountService.applyDiscount(carrinho.products.length, carrinho.discountCoupon);

        return Promise.resolve();
    }

    private validate(cpf: Cpf) {
        if (!cpf.validate()) {
            console.log("Deu erro " + cpf.cpfNumber);
            throw new Error('Cpf is invalid');
        }
    }

    public calculateTotal(products: IProduct[]): number {

        const initialValue = 0;

        return products.reduce(function (acumulator, product) {
            return acumulator + product.price;
        }, initialValue);

    }

}