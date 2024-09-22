import * as React from "react";
import { View } from "react-native";
import dark from "../styles/maps/dark";
import MapView, { MapUrlTile, UrlTile } from "react-native-maps";

export interface AppProps {}

export default function App(props: AppProps) {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                mapType="none"
                userInterfaceStyle="dark"
                camera={{
                    heading: 0,
                    center: { latitude: 37.78825, longitude: -122.4324 },
                    pitch: 0,
                }}
                cameraZoomRange={{
                    minCenterCoordinateDistance: 300,
                }}
                pitchEnabled={false}
                toolbarEnabled={false}
                userLocationPriority="high"
                showsUserLocation={true}
                customMapStyle={dark}
            >
                <MapUrlTile urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" minimumZ={0} shouldReplaceMapContent={true} />
            </MapView>
        </View>
    );
}
