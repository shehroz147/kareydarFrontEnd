import { StyleSheet, Platform } from "react-native";
import { fontPixel, heightPixel, widthPixel } from "./adjust";
import { useFonts } from 'expo-font';

export function useStyles() {
 
    return StyleSheet.create({
       
        playfair: {
            fontFamily:
                Platform.OS === "ios"
                    ? "Playfair Display"
                    : "PlayfairDisplay-VariableFont_wght",
        },
        input: {
            backgroundColor: "#EEEEEE",
            width: widthPixel(335),
            height: heightPixel(65),
            marginTop: heightPixel(16),
            paddingLeft: 15,
            color: "#222222",
            fontSize: fontPixel(14),
            fontWeight: "500",
            letterSpacing: 1,
            left: 10,
        },
    });
}
