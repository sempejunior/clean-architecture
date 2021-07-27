import {
    Route,
    Res,
    TsoaResponse,
    Tags,
    Post,
    Body,
    SuccessResponse,
} from 'tsoa';

import { ICarrinho } from '../model/interfaces/ICarrinho';
import { CarrinhoService } from '../service/CarrinhoService'

@Route('v1/loja')
@Tags('v1')
export class CarrinhoController {


    @SuccessResponse(200, 'Purchase made successfully')
    @Post()
    public comprar(@Body() carrinho: ICarrinho, @Res() validationError: TsoaResponse<500, { reason: string }>) {

        try {
            const carrinhoService = new CarrinhoService();
            carrinhoService.comprar(carrinho);
        } catch (error) {
            return validationError(500, error);
        }
    }
}