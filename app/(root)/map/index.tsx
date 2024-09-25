import dark from "#/maps/dark";
import * as React from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export interface AppProps {}

export default function App(props: AppProps) {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                mapType="standard"
                userInterfaceStyle="dark"
                camera={{
                    heading: 0,
                    center: { latitude: 37.78825, longitude: -122.4324 },
                    pitch: 0,
                }}
                cameraZoomRange={{
                    minCenterCoordinateDistance: 350,
                }}
                showsPointsOfInterest={false}
                showsTraffic={false}
                showsIndoors={false}
                showsBuildings={false}
                showsIndoorLevelPicker={false}
                showsCompass={false}
                showsScale={false}
                showsMyLocationButton={true}
                pitchEnabled={false}
                toolbarEnabled={false}
                userLocationPriority="high"
                showsUserLocation={true}
                customMapStyle={dark}
            />
        </View>
    );
}
