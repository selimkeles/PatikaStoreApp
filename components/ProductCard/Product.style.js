import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding:10,
        justifyContent:'space-between',
        width: Dimensions.get('window').width / 2,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode:('contain')
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inner_container: {
        flex: 1, // Allow inner container to grow vertically
        flexDirection: 'column', // Arrange elements vertically
        justifyContent: 'space-between', // Align content to bottom
        padding: 5,
    },
    stock: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'red',
    },
});
