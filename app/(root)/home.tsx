import { router } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function Home() {
    useEffect(() => {
        console.log("Navigating to welcome screen");
        router.push("/welcome");
    }, []);

    return <Text style={{ fontSize: 24, color: "white" }}>Hello, world!</Text>;
}
