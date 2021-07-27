import {ICarrinho} from "./ICarrinho";
export interface IPurchase{

    carrinho: ICarrinho,
    totalValue: number,
    totalPaid: number

}