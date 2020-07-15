export type ShopDataType = {
    id: number;
    title: string;
    routeName: string;
    items: ShopItemType[];
}

export type ShopItemType = {
    id: number;
    name: string;
    imageUrl:string;
    price: number;
}
