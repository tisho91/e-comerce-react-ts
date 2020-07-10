import {SizeEnum} from "../enums/size.enum";

export type IMenuItemType = {
    title: string;
    imageUrl: string;
    id: number;
    size?: SizeEnum;
    linkUrl: string;
}

export type ISectionsType = {
    sections: IMenuItemType[]
}
