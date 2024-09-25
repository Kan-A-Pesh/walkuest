import styleSpacing from "#/utils/spacings";
import Button from "@/common/button";
import Label from "@/common/label";
import Page from "@/layout/Page";
import { View } from "react-native";

export default function Welcome() {
    return (
        <Page>
            <Label type="display" style={styleSpacing.marginBottom_8}>
                Enjoy walking
            </Label>
            <Label opacity="50">Discover new routes with friends</Label>
            <View style={styleSpacing.marginBottom_auto} />
            <Button>Let's get started</Button>
        </Page>
    );
}
