import styleRoot from "#/layout/root";
import { router, Slot, SplashScreen } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "neue-900": require("assets/fonts/NeueKaine-Black.ttf"),
        "neue-700": require("assets/fonts/NeueKaine-Bold.ttf"),
        "suse-800": require("assets/fonts/SUSE-ExtraBold.ttf"),
        "suse-700": require("assets/fonts/SUSE-Bold.ttf"),
        "suse-400": require("assets/fonts/SUSE-Regular.ttf"),
    });

    React.useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            router.push("/welcome");
            error && console.error("app/_layout.tsx ::", "Failed to load fonts:", error);
        }
    }, [loaded, error]);

    if (!loaded || error) {
        // Show the index screen (loading screen) until the fonts are loaded
        return <Slot />;
    }

    return (
        <View style={styleRoot.mainContainer}>
            <Slot />
        </View>
    );
}
