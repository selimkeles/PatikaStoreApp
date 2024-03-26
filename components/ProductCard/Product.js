import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Product.style';

export default ProductCard = ({ products_p }) => {
    const isProductInStock = products_p.inStock;
    return (
        <View style={styles.container}>
            <Image style={styles.image} key={products_p.id} source={{ uri: products_p.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{products_p.title}</Text>
                <Text style={styles.price}>{products_p.price}</Text>
            </View>
            {!isProductInStock && (<Text style={styles.stock}>STOKTA YOK</Text>)}
        </View>
    );
};
