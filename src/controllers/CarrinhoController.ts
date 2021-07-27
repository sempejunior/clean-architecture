import {
    Route,
    Tags,
    Post,
    Body,
    SuccessResponse,
} from 'tsoa';

import { ICarrinho } from '../model/interfaces/ICarrinho';
import { CarrinhoService } from '../service/CarrinhoService'

@Route('v1/carrinho')
@Tags('v1')
export class CarrinhoController {


    @SuccessResponse(200, 'Purchase made successfully')
    @Post()
    public comprar(@Body() carrinho: ICarrinho):void{
        console.log("Entrou no endpoint");
        const carrinhoService = new CarrinhoService();
        carrinhoService.comprar(carrinho);
    }
}