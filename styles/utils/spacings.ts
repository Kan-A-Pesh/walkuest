import { StyleSheet, ViewStyle } from "react-native";

const units = [0, 4, 8, 12, 16, 24, 32, "auto"] as const;
const rules = [
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "marginHorizontal",
    "marginVertical",

    "padding",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingHorizontal",
    "paddingVertical",
] as const;

// Generate styles
const styles = {} as any;
rules.forEach((rule) => {
    units.forEach((unit) => {
        styles[rule + "_" + unit] = { [rule]: unit };
    });
});

// Generate the style
type SpacingStyle = {
    [key in `${(typeof rules)[number]}_${(typeof units)[number]}`]: ViewStyle;
};

const styleSpacing = StyleSheet.create(styles) as SpacingStyle;
export default styleSpacing;
