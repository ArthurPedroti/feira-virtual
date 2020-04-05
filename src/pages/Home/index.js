import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function navigateToMarkets(incident) {
    navigation.navigate("Markets", { incident });
  }

  function navigateToLoginClient(incident) {
    navigation.navigate("LoginClient", { incident });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoImg} />
      <Text style={[styles.subtitle, { marginTop: 16 }]}>
        SEUS FEIRANTES FAVORITOS
      </Text>
      <Text style={[styles.subtitle, { marginBottom: 16 }]}>
        PORÉM AGORA, ONLINE!
      </Text>
      <TouchableOpacity
        onPress={() => navigateToMarkets()}
        style={styles.clientButton}
      >
        <Text style={styles.buttonText}>Sou Cliente!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToMarkets()}
        style={styles.marketButton}
      >
        <Text style={styles.buttonText}>Sou Feirante!</Text>
      </TouchableOpacity>
    </View>
  );
}
