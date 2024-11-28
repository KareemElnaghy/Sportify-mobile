import { PMLogin } from "@/PMs/Auth/LoginPM";

import { styles } from "./LoginStyles";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import Checkbox from "expo-checkbox";
import { isValidElement, useState } from "react";

import Eye from "@/assets/svgs/eye.svg";
import EyeOff from "@/assets/svgs/eye-off.svg";

interface propsType {
	pm: PMLogin;
}

export default function LoginView({ pm }: propsType) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		>
			<Image
				resizeMode={"contain"}
				source={require("@/assets/images/Sportify.png")}
				style={styles.sportifyLogo}
			/>
			<TextInput
				style={styles.text_input}
				placeholder="AUC Email"
				placeholderTextColor={"gray"}
				className="input-field"
				value={pm.email}
				onChangeText={(t) => {
					pm.email = t;
					pm.onEmailChange();
				}}
			/>
			<View
				style={{ ...styles.text_input, ...styles.password_input_bounding_box }}
			>
				<TextInput
					style={styles.text_input_password}
					placeholder="Password"
					placeholderTextColor={"gray"}
					secureTextEntry={!isPasswordVisible}
					value={pm.password}
					onChangeText={(t) => {
						pm.password = t;
						pm.onPasswordChange();
					}}
				/>
				<TouchableOpacity
					onPress={() => {
						setIsPasswordVisible((current) => !current);
					}}
				>
					{isPasswordVisible ? (
						<EyeOff width={30} height={30} />
					) : (
						<Eye width={30} height={30} />
					)}
				</TouchableOpacity>
			</View>
			<View style={styles.remember_me}>
				<Checkbox
					value={pm.rememberme}
					onValueChange={(v) => {
						pm.rememberme = v;
						pm.onRememberChange();
					}}
					color={pm.rememberme ? "#4067EC" : undefined}
				/>
				<Text style={styles.remember_me_text}>Remember Me</Text>
			</View>
			<TouchableOpacity style={styles.login_btn} onPress={pm.onLOGIN}>
				<Text style={styles.login_btn_text}>Login</Text>
			</TouchableOpacity>

			<View style={styles.signup_msg}>
				<Text style={styles.signup_msg_txt}>Don't have an account yet? </Text>
				<TouchableOpacity style={styles.signup_btn} onPress={pm.onSIGNUP}>
					<Text style={styles.signup_btn_txt}>Signup</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
