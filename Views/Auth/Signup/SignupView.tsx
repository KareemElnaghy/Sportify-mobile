import { PMSignup } from "@/PMs/Auth/SignupPM";

import { styles } from "./SignupStyles";
import { 
	KeyboardAvoidingView,
	Platform,
	Image,
	TextInput,
	Text,
	TouchableOpacity,
	View,
 } from "react-native";

import Eye from "@/assets/svgs/eye.svg";
import EyeOff from "@/assets/svgs/eye-off.svg";
import { useState } from "react";
// import { TextInput } from "react-native-gesture-handler";

interface propsType {
	pm: PMSignup;
}

export default function SignupView({ pm }: propsType) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

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
				placeholder="User Name"
				placeholderTextColor={"gray"}
				value={pm.username}
				onChangeText={(t) => {
					pm.username = t;
					pm.onUsernameChange();
				}}
			/>
			<TextInput
				style={styles.text_input}
				placeholder="Full Name"
				placeholderTextColor={"gray"}
				value={pm.fullname}
				onChangeText={(t) => {
					pm.fullname = t;
					pm.onFullnameChange();
				}}
			/>

			<TextInput
				style={styles.text_input}
				placeholder="AUC Email"
				placeholderTextColor={"gray"}
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
						setIsPasswordVisible(!isPasswordVisible);
					}}
				>
					{isPasswordVisible ? (
						<EyeOff width={30} height={30} />
					) : (
						<Eye width={30} height={30} />
					)}
				</TouchableOpacity>
			</View>

			<View
				style={{ ...styles.text_input, ...styles.password_input_bounding_box }}
			>
				<TextInput
					style={styles.text_input_password}
					placeholder="Confirm Password"
					placeholderTextColor={"gray"}
					secureTextEntry={!isConfirmPasswordVisible}
					value={pm.confirmPassword}
					onChangeText={(t) => {
						pm.confirmPassword = t;
						pm.onConfirmPasswordChange();
					}}
				/>

				<TouchableOpacity
					onPress={() => {
						setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
					}}
				>
					{isConfirmPasswordVisible ? (
						<EyeOff width={30} height={30} />
					) : (
						<Eye width={30} height={30} />
					)}
				</TouchableOpacity>
			</View>
					

			<Text style={styles.terms_msg_txt}>
				By clicking on ‘sign up’, you’re agreeing to the Sportify app 
				<Text style={{ color: "#4067EC" }}> Terms of Service</Text> and 
				<Text style={{ color: "#4067EC" }}> Privacy Policy</Text>
			</Text>

			
			<TouchableOpacity style={styles.signup_btn} onPress={pm.onSIGNUP}>
				<Text style={styles.signup_btn_text}>Sign Up</Text>
			</TouchableOpacity>

		</KeyboardAvoidingView>
	);

}

