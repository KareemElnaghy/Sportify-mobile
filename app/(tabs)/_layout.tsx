import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="house.fill" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="paperplane.fill" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="homeTest"
				options={{
					title: "Notifications",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="bell.fill" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="gear" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="courtsList"
				options={{
					href: null,
				}}
			/>

			<Tabs.Screen
				name="courtDetails"
				options={{
					href: null,
				}}
			/>

			<Tabs.Screen
				name="reserve"
				options={{
					href: null,
				}}
			/>

			<Tabs.Screen
				name="bookingsList"
				options={{
					href: null,
				}}
			/>

			{/* <Tabs.Screen
				name="homeTest"
				options={{
					href: null,
				}}
			/> */}
		</Tabs>
	);
}
