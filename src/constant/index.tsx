import { ImageSourcePropType } from 'react-native';

interface CarouselData {
    id: string;
    image: ImageSourcePropType;
}


const CAROUSELData: CarouselData[] = [
    {
        id: '1',
        image: require('@src/assets/images/carousel/bg.png'),
    },
    {
        id: '2',
        image: require('@src/assets/images/carousel/ipadPro11.png'),
    },
    {
        id: '3',
        image: require('@src/assets/images/carousel/iWatch7.png'),
    },
    {
        id: '4',
        image: require('@src/assets/images/carousel/podPromax.png'),
    },
    {
        id: '5',
        image: require('@src/assets/images/carousel/pro14m1.png'),
    },
    {
        id: '6',
        image: require('@src/assets/images/carousel/pro16m1.png'),
    },
    {
        id: '7',
        image: require('@src/assets/images/carousel/airm2.png'),
    },
]

export { CAROUSELData }