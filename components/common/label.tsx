import styleLabelFonts from "#/components/label/fonts";
import styleLabelSize from "#/components/label/sizes";
import styleColors, { colors } from "#/utils/colors";
import styleOpacity, { opacity } from "#/utils/opacity";
import { Text, TextStyle } from "react-native";

interface LabelProps {
    children: string;
    color?: keyof typeof colors;
    opacity?: keyof typeof opacity;
    type?: "display" | "title" | "subtitle" | "header" | "body" | "bodyBold" | "caption";
    style?: TextStyle;
}

export default function Label({ children, color = "white", opacity = "100", type = "body", style }: LabelProps) {
    const dynamicTextStyle = [] as TextStyle[];

    // Add the color and opacity styles
    dynamicTextStyle.push(styleColors["color_" + color]);
    dynamicTextStyle.push(styleOpacity[opacity]);

    // Apply the size & font styles
    switch (type) {
        case "display":
            dynamicTextStyle.push(styleLabelSize.display, styleLabelFonts.neueBlack);
            break;
        case "title":
            dynamicTextStyle.push(styleLabelSize.title, styleLabelFonts.neueBlack);
            break;
        case "subtitle":
            dynamicTextStyle.push(styleLabelSize.large, styleLabelFonts.neueBold);
            break;
        case "header":
            dynamicTextStyle.push(styleLabelSize.large, styleLabelFonts.suseExtraBold);
            break;
        case "body":
            dynamicTextStyle.push(styleLabelSize.medium, styleLabelFonts.suseRegular);
            break;
        case "bodyBold":
            dynamicTextStyle.push(styleLabelSize.medium, styleLabelFonts.suseBold);
            break;
        case "caption":
            dynamicTextStyle.push(styleLabelSize.small, styleLabelFonts.neueBold);
            break;
    }

    // Add any additional styles
    style && dynamicTextStyle.push(style);

    return <Text style={dynamicTextStyle}>{children}</Text>;
}
