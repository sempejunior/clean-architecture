import { IPurchase } from "../model/interfaces/IPurchase";
import { getConfiguration } from "../app";
import { v4 as uuidv4 } from 'uuid';

export class PurchaseRepository {

    redis = getConfiguration();

    public async save(purchase: IPurchase) {
        await this.redis.getRedisClient().hmset(uuidv4(), {
           name: purchase.carrinho.user.name,
           cpf : purchase.carrinho.user.cpf,
           totalValue: purchase.totalValue,
           totalPaid : purchase.totalPaid,
           products: JSON.stringify([purchase.carrinho.products])
        });
    }

    public getList() {
        this.redis.getRedisClient().keys("*", function(err: any, replies: any) {
            console.log(replies + err);
            if (err) {
              return err;
            }
            return replies;
          });
    }

}


