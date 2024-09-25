import { StyleSheet, ViewStyle } from "react-native";

export const opacity = {
    "25": 0.25,
    "50": 0.5,
    "75": 0.75,
    "100": 1,
} as const;

// Generate styles
const styles = {} as any;
Object.keys(opacity).forEach((unit) => {
    styles[unit] = { opacity: opacity[unit] };
});

// Generate types
type OpacityStyle = {
    [key in keyof typeof opacity]: ViewStyle;
};

const styleOpacity = StyleSheet.create(styles) as OpacityStyle;
export default styleOpacity;
