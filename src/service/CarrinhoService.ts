import { ICarrinho } from "../model/interfaces/ICarrinho";
import { IPurchase } from "../model/interfaces/IPurchase";
import { IProduct } from "../model/interfaces/IProduct";
import { DiscountService } from "../service/DiscountService"
import { CpfService } from "../service/CpfService";
import { PurchaseRepository } from "../repositories/PurchaseRepository";

export class CarrinhoService {

    discountService: DiscountService;
    purchaseRepository :PurchaseRepository= new PurchaseRepository();

    constructor() {
        this.discountService = new DiscountService();
    }

    public async comprar(carrinho: ICarrinho): Promise<void> {

        this.validate(carrinho.user.cpf);
        
        console.log (carrinho);

        const totalWithouDiscount = this.calculateTotal(carrinho.products);
        console.log ("totalWithouDiscount: " + totalWithouDiscount );


        const totalWithDiscount = this.discountService.applyDiscount(totalWithouDiscount, carrinho.discountCoupon);
        console.log ("totalWithDiscount: " + totalWithDiscount );
        let purchase = {
            carrinho:  carrinho,
            totalValue: totalWithouDiscount,
            totalPaid: totalWithDiscount
        } as IPurchase;

        this.purchaseRepository.save(purchase);

        console.log("Foi salvo");

        let savedValues = await this.purchaseRepository.getList();

        console.log("All values saved: " + savedValues);

        return Promise.resolve();
    }

    private validate(cpf: string) {
        
        if (!CpfService.validate(cpf)) {
            console.log("Deu erro " + cpf);
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