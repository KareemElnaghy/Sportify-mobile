import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";

import { styles } from "./CourtsListStyles";
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Location from "@/assets/svgs/location.svg";
import Back from "@/assets/svgs/back.svg";

// import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
  pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main_container}
    >
      <View style={styles.header}>
          <TouchableOpacity
            onPress = {() => {
              pm.onBack();
            }}
          >
            <Back width={38.25} height={38.25} />
          </TouchableOpacity>
          <Text style = {styles.header_txt}>All Courts</Text>
      </View>

      <Text style={styles.subheader}>
        Search all the courts you can book here{" "}
      </Text>

      <TouchableOpacity
          style={{ ...styles.container, ...styles.container_top }}
          onPress={() => {
            pm.ViewCourt();
          }}
      >
        {pm.courtsList && pm.courtsList.length > 0 && (
          <>
            <Text style={styles.court_title}>{pm.courtsList[0].courtName}</Text>
            <View style={styles.location}>
              <Location stroke="white" width={20} height={20} />
              <Text style={styles.court_data}>
                {pm.courtsList[0].courtLocation}
              </Text>
            </View>
            <View
              style={
                pm.courtsList[0].isAvailable ? styles.available : styles.booked
              }
            >
              <Text style={styles.availability_txt}>
                {pm.courtsList[0].isAvailable ? "Available" : "Booked"}
              </Text>
            </View>
          </>
        )}
        <TouchableOpacity
          style={styles.booking}
          onPress={() => {
            pm.booking(0);
          }}
        >
          <Text style={styles.booking_txt}>Book Now</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.container, ...styles.container_second }}
        onPress={() => {
          pm.ViewCourt();
        }}
      >
        {pm.courtsList && pm.courtsList.length > 0 && (
          <>
            <Text style={styles.court_title}>{pm.courtsList[1].courtName}</Text>
            <View style={styles.location}>
              <Location stroke="white" width={20} height={20} />
              <Text style={styles.court_data}>
                {pm.courtsList[1].courtLocation}
              </Text>
            </View>
          </>
        )}

        <TouchableOpacity
          style={styles.booking}
          onPress={() => {
            pm.booking(1);
          }}
        >
          <Text style={styles.booking_txt}>Book Now</Text>
        </TouchableOpacity>

      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.container, ...styles.container_third }}
        onPress={() => {
          pm.ViewCourt();
        }}
      >
        {pm.courtsList && pm.courtsList.length > 0 && (
          <>
            <Text style={styles.court_title}>{pm.courtsList[2].courtName}</Text>
            <View style={styles.location}>
              <Location stroke="white" width={20} height={20} />
              <Text style={styles.court_data}>
                {pm.courtsList[2].courtLocation}
              </Text>
            </View>
          </>
        )}

        <TouchableOpacity
          style={styles.booking}
          onPress={() => {
            pm.booking(2);
          }}
        >
          <Text style={styles.booking_txt}>Book Now</Text>
        </TouchableOpacity>

      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...styles.container, ...styles.container_fourth }}
        onPress={() => {
          pm.ViewCourt();
        }}
      >
        {pm.courtsList && pm.courtsList.length > 0 && (
          <>
            <Text style={styles.court_title}>{pm.courtsList[3].courtName}</Text>
            <View style={styles.location}>
              <Location stroke="white" width={20} height={20} />
              <Text style={styles.court_data}>
                {pm.courtsList[3].courtLocation}
              </Text>
            </View>
          </>
        )}

        <TouchableOpacity
          style={styles.booking}
          onPress={() => {
            pm.booking(3);
          }}
        >
          <Text style={styles.booking_txt}>Book Now</Text>
        </TouchableOpacity>
 
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
