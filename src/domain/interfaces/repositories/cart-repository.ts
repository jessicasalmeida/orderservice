import { CartRequestModel } from '../../models/cart';
import { CartRequestModel as CartResponseModel } from '../../models/cart';

export interface CartRepository {
    create(newCart: CartRequestModel): Promise<CartResponseModel>;
    update(id: string, cart: CartRequestModel) : Promise<CartResponseModel>;
    getOne(id: string): Promise<CartResponseModel>;
}