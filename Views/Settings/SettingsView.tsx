import { PMSettings } from "@/PMs/Settings/SettingsPM";

import { styles } from "./SettingsStyles";
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// import { KeyboardAvoidingView, Platform } from "react-native";
import Profile from "@/assets/svgs/profile.svg";
import Lock from "@/assets/svgs/lock.svg";
import Shield from "@/assets/svgs/shield.svg";
import Location from "@/assets/svgs/location.svg";
import Help from "@/assets/svgs/help.svg";
import Logout from "@/assets/svgs/logout.svg";

interface propsType {
  pm: PMSettings;
}

export default function SettingsView({ pm }: propsType) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main_container}
    >
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.username_text}>{pm.username}</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            pm.EditProfile();
          }}
        >
          <Profile width={45} height={45} />
          <Text style={styles.list_text}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            pm.ChangePassword();
          }}
        >
          <Lock width={45} height={45} />
          <Text style={styles.list_text}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            pm.About();
          }}
        >
          <Shield width={45} height={45} />
          <Text style={styles.list_text}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            pm.Location();
          }}
        >
          <Location width={45} height={45} />
          <Text style={styles.list_text}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            pm.HelpSupport();
          }}
        >
          <Help width={45} height={45} />
          <Text style={styles.list_text}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            pm.Logout();
          }}
        >
          <Logout width={55} height={45} />
          <Text style={styles.list_text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
