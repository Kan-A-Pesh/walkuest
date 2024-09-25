import { StyleSheet } from "react-native";

const styles = {
    center: { alignItems: "center", justifyContent: "center" },
} as const;

const styleAlign = StyleSheet.create(styles); // as AlignStyle;
export default styleAlign;
