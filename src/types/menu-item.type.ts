import {SizeEnum} from "../enums/size.enum";

export type MenuItemType = {
    title: string;
    imageUrl: string;
    id: number;
    size?: SizeEnum;
    linkUrl: string;
}

export type SectionsType = {
    sections: MenuItemType[]
}
