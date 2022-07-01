import AsyncStorage from "@react-native-async-storage/async-storage";
import server from "../server/server";

export const signIn = (user, token, navigation) => async (dispatch) => {
    // local storage needs to be implemented
    try {
        await AsyncStorage.setItem("afcHalalUser", JSON.stringify(user));
        await AsyncStorage.setItem("afcHalalToken", token);
        dispatch({
            type: "SIGN_IN",
            payload: user,
        });
        navigation.navigate("Home");
    } catch (error) {
        console.log(error.message);
    }
};

export const signOut = (navigation) => async (dispatch) => {
    dispatch({
        type: "SIGN_OUT",
    });
    await AsyncStorage.removeItem("afcHalalUserCart");
    await AsyncStorage.removeItem("afcHalalUser");
    await AsyncStorage.removeItem("afcHalalToken");
    dispatch({ type: "EMPTY_CART" });
    navigation.navigate("Login");
};

export const loggedInUser = (user) => async (dispatch) => {
    dispatch({
        type: "SIGN_IN",
        payload: user,
    });
};

export const fetchProducts =
    (setLoading, setFilteredProducts) => async (dispatch, getState) => {
        // let productDetail;
        //   setLoading(true);
        const { data } = await server.get("/user/getProduct");
        console.log(data);
        dispatch({ type: "FETCH_PRODUCTS", payload: data });
        // alert('gg')
        // console.log("data:",data);
        // productDetail = JSON.stringify(data);
        // console.log(productDetail);
        // setLoading(false);
        // console.log("DATA:",data);
        setFilteredProducts(data);
        // console.log("setFiltered:",setFilteredProducts);

        // return productDetail;

        // alert(JSON.stringify(e.request))
    };

export const fetchFilterProducts =
    (setFilteredProduct, item) => async () => {
        // let productDetail;
        const { data } = await server.post("/user/getProductByCategory", item);
        // console.log("DATA:",data);
        console.log(data);
        // dispatch({ type: "FETCH_PRODUCTS", payload: data.result});
        // alert('gg')
        // console.log("data:",data);
        // productDetail = JSON.stringify(data);
        // console.log(productDetail);
        // setLoading(false);
        // console.log("DATA:",data);
        setFilteredProduct(data);
        // console.log("setFiltered:",setFilteredProducts);
        // return data;
        // return productDetail;

        // alert(JSON.stringify(e.request))
    };

// export const fetchProduct = (product) => async (dispatch) => {
//   dispatch({ type: "FETCH_PRODUCT", payload: product });
// }; 


export const fetchOrders =
    (setLoading, setOrders, _id) => async (dispatch, getState) => {
        // let productDetail;
        setLoading(true);
        const { data } = await server.post("/user/orders", _id);
        // console.log(data);
        // dispatch({ type: "FETCH_PRODUCTS", payload: data});
        // alert('gg')
        setOrders(data);
        setLoading(false);
        // console.log("data:",data);
        // productDetail = JSON.stringify(data);
        // console.log(productDetail);
        // setLoading(false);
        // console.log("DATA:",data);
        // console.log("data:",data);
        // console.log("data1:",data);
        // let data1 = Array.from(data);
        // console.log("data2:",data1);
        // console.log(data);

        // console.log("setFiltered:",setFilteredProducts);

        // return productDetail;

        // alert(JSON.stringify(e.request))
    };