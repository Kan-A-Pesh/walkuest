import { StyleSheet, ViewStyle } from "react-native";

export const rounded = {
    none: 0,
    regular: 12,
    large: 24,
    full: "50%",
} as const;

// Generate styles
const styles = {} as any;
Object.keys(rounded).forEach((unit) => {
    styles[unit] = { borderRadius: rounded[unit] };
});

// Generate types
type RoundedStyle = {
    [key in keyof typeof rounded]: ViewStyle;
};

const styleRounded = StyleSheet.create(styles) as RoundedStyle;
export default styleRounded;
