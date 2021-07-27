import { CarrinhoService } from "../../service/CarrinhoService";
import { ICarrinho } from "../../model/interfaces/ICarrinho";
import { IUser } from "../../model/interfaces/IUser";
import { Cpf } from "../../model/Cpf";
import { IProduct } from "../../model/interfaces/IProduct"

test("Invalid Cpfs", function () {


    let carrinho = createMock();

    const carrinhoService = new CarrinhoService();

    try {
        carrinhoService.comprar(carrinho);
    }catch(error){
        expect(error.message).toBe("Cpf is invalid");
    }


});

function createMock() {
    let cpf = new Cpf('01820762025');

    let product1 = {
        name: 'Product1',
        description: 'Product Test',
        price: 10.0
    } as IProduct;

    let user = {
        name: 'Teste1',
        cpf: cpf
    } as IUser;


    const CARRINHO_WITH_CPF_INVALID = {
        id: '1234565',
        user: user,
        discountCoupon: '12345',
        products: [product1]
    } as ICarrinho;
    return CARRINHO_WITH_CPF_INVALID;
}
