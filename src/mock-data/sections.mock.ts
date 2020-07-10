import {ISections} from "@interfaces";
import {SizeEnum} from "../enums/size.enum";

export const SectionsMockData: ISections = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            size: SizeEnum.Large,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            size: SizeEnum.Large,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            size: SizeEnum.Large,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: SizeEnum.Large,
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: SizeEnum.Large,
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}
