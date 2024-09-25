import styleRoot from "#/layout/root";
import type { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface PageProps {
    children?: ReactNode;
}

export default function Page({ children }: PageProps) {
    return <SafeAreaView style={styleRoot.pageContainer}>{children}</SafeAreaView>;
}
