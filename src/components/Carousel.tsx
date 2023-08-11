import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    useAnimatedRef,
} from 'react-native-reanimated';


interface CarouselProps {
    data: any
    autoPlay?: boolean;
    route: any;
}


const CustomImageCarousal = ({ data, autoPlay }: CarouselProps) => {

    const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
    const [newData] = useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' },
    ]);
    const { width } = useWindowDimensions();
    const SIZE = width * 0.8;
    const SPACER = (width - SIZE) / 5
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    useEffect(() => {
        if (autoPlay) {
            let offset = 0;
            setInterval(() => {
                if (offset === SIZE * (data.length - 1)) {
                    offset = 0;
                } else {
                    offset += SIZE;
                }
                scrollViewRef.current?.scrollTo({ x: offset, y: 0 });
            }, 2000);
        }
    }, [SIZE, SPACER, autoPlay, data.length, scrollViewRef]);

    return (
        <Animated.ScrollView
            ref={scrollViewRef}
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={SIZE}
            horizontal
            bounces={true}
            showsHorizontalScrollIndicator={false}>
            {newData.map((item, index) => {
                const style = useAnimatedStyle(() => {
                    const scale = interpolate(
                        x.value,
                        [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                        [0.88, 1, 0.88],
                    );
                    return {
                        transform: [{ scale }],
                    };
                });
                if (!item.image) {
                    return <View style={{ width: SPACER }} key={index} />;
                }
                return (
                    <View style={{ width: SIZE }} className='mt-[70px]'
                        key={index}>
                        <Animated.View style={[styles.imageContainer, style]}>
                            <Image source={item.image} resizeMode="contain"
                                style={styles.image} />
                        </Animated.View>
                    </View>
                );
            })}
        </Animated.ScrollView>
    );
};

export default CustomImageCarousal;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'pink',
        height: 230,

    },
    image: {
        width: '100%',
        height: '100%',
    },


});
