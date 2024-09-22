import * as React from "react";
import { View } from "react-native";
import dark from "../styles/maps/dark";
import MapView, { UrlTile } from "react-native-maps";

export interface AppProps {}

export default function App(props: AppProps) {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                userInterfaceStyle="dark"
                userLocationPriority="high"
                showsUserLocation={true}
                customMapStyle={dark}
            ></MapView>
        </View>
    );
}
