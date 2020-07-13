import {MenuItemType, SectionsType} from './menu-item.type'
import {ShopDataType, ShopItemType} from "./shop-data.type";

export type TMenuItem = MenuItemType;
export type TSections = SectionsType;
export type TShopData = ShopDataType
export type TShopItem = ShopItemType

export type TLogin = {
    email:string;
    password: string;
}

