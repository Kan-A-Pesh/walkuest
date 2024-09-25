import styleColors, { colors } from "#/utils/colors";
import { TouchableOpacity, ViewStyle } from "react-native";
import Label from "./label";
import styleSpacing from "#/utils/spacings";
import { LucideIcon } from "lucide-react-native";
import styleOpacity from "#/utils/opacity";
import styleRounded from "#/utils/rounded";
import styleAlign from "#/utils/align";

interface ButtonProps {
    icon?: LucideIcon;
    children?: string;
    color?: keyof typeof colors;
    type?: "filled" | "outlined" | "ghost";
    size?: "regular" | "small";
    disabled?: boolean;
    style?: ViewStyle;
    onPress?: () => void;
}

export default function Button({
    icon,
    children,
    color = "primary",
    type = "filled",
    size = "regular",
    disabled = false,
    style,
    onPress = () => {},
}: ButtonProps) {
    const dynamicButtonStyle = [];
    let textColor = "white" as keyof typeof colors;

    // Add the color styles
    switch (type) {
        case "filled":
            dynamicButtonStyle.push(styleColors["backgroundColor_" + color]);
            textColor = color === "black" ? "white" : "black";
            break;
        case "outlined":
            dynamicButtonStyle.push(styleColors["borderColor_" + color]);
            textColor = color;
            break;
        case "ghost":
            textColor = color;
            break;
    }

    // Add the size styles
    switch (size) {
        case "regular":
            dynamicButtonStyle.push(
                styleSpacing.paddingVertical_16,
                icon ? styleSpacing.paddingHorizontal_16 : styleSpacing.paddingHorizontal_32,
            );
            break;
        case "small":
            dynamicButtonStyle.push(
                styleSpacing.paddingVertical_12,
                icon ? styleSpacing.paddingHorizontal_12 : styleSpacing.paddingHorizontal_24,
            );
            break;
    }

    disabled && dynamicButtonStyle.push(styleOpacity[50]);
    dynamicButtonStyle.push(styleRounded.regular, styleAlign.center);
    dynamicButtonStyle.push(style);

    const Icon = icon;

    return (
        <TouchableOpacity onPress={onPress} style={dynamicButtonStyle}>
            {icon && <Icon fill={styleColors["color_" + textColor].color} />}
            <Label color={textColor} type="bodyBold">
                {children}
            </Label>
        </TouchableOpacity>
    );
}
