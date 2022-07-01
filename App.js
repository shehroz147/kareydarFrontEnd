import React from "react";
import { StatusBar, RefreshControl, ScrollView, StyleSheet } from 'react-native'
import 'react-native-gesture-handler';

import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./src/Reducers";
import { SafeAreaView } from "react-native-safe-area-context";
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function App() {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const store = createStore(reducers, applyMiddleware(reduxThunk));
    return (
        <Provider store={store}>

            <StatusBar
                animated={true}
                backgroundColor="#282B30"
                barStyle="dark-content"
            />

            <Routes />
        </Provider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});