import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const marketer = route.params.marketer;

  function navigateBack() {
    navigation.goBack();
  }

  const message = `Olá ${marketer.name}! Tudo bem? Vi seu contato na FeiraVirtual e gostaria de comprar alguns dos seus produtos!`;

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${marketer.cel}&text=${message}`);
  }

  function call() {
    Linking.openURL(`tel:${marketer.cel}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#4B7F52" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
          Feirante:
        </Text>
        <Text style={styles.incidentValue}>{marketer.name}</Text>

        <Text style={styles.incidentProperty}>Vendendo:</Text>
        <View style={styles.categoriesList}>
          {marketer.categories.map((categories) => (
            <Text key={categories} style={styles.marketCategories}>
              {categories}
            </Text>
          ))}
        </View>

        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
          Entrega:
        </Text>
        <Text style={styles.incidentValue}>{marketer.delivery}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Descrição:</Text>
        <Text style={styles.heroDescription}>{marketer.description}</Text>

        <Text style={styles.heroTitle}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={call}>
            <Text style={styles.actionText}>Me ligue!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
