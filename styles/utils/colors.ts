import { StyleSheet, ViewStyle } from "react-native";

export const colors = {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#6BD425",
} as const;

const rules = ["color", "backgroundColor", "borderColor"] as const;

// Generate styles
const styles = {} as any;
rules.forEach((rule) => {
    Object.keys(colors).forEach((color: keyof typeof colors) => {
        styles[rule + "_" + color] = { [rule]: colors[color], borderWidth: rule === "borderColor" ? 1 : 0 };
    });
});

// Generate types
type ColorStyle = {
    [key in `${(typeof rules)[number]}_${keyof typeof colors}`]: ViewStyle;
};

const styleColors = StyleSheet.create(styles) as ColorStyle;
export default styleColors;
