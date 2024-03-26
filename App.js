import {
    StyleSheet,
    Text,
    FlatList,
    StatusBar,
    SafeAreaView,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from "./components/SearchBar"
import Product from "./components/ProductCard"
import productDB from "./productDB/productDB.json"

export default function App() {
    const renderProduct = ({ item }) => <Product products_p={item} />;
    return (
        <SafeAreaView style={styles.container}>
            {/* <LinearGradient style={styles.gradient} colors={['transparent', 'lightblue']} /> */}
            <Text style={styles.AppTitle}>PATIKASTORE</Text>
            <FlatList
                ListHeaderComponent={<SearchBar />}
                keyExtractor={(item) => item.id.toString()}
                data={productDB}
                renderItem={renderProduct}
                numColumns={2}>
            </FlatList>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    AppTitle: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
        color: 'purple'
    },
})
