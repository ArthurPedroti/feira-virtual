import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Markets() {
  const [marketers, setMarketers] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(marketer) {
    navigation.navigate("Detail", { marketer });
  }
  function navigateBack() {
    navigation.goBack();
  }

  async function loadMaketers() {
    if (loading) {
      return;
    }

    if (total > 0 && marketers.length == total) {
      return;
    }

    setLoading(true);

    const response = await api.get("marketers", {
      params: { page },
    });
    setMarketers([...marketers, ...response.data]);

    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadMaketers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} feirantes</Text>.
        </Text>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#4B7F52" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos feirantes abaixo e entre em contato.
      </Text>

      <FlatList
        data={marketers}
        style={styles.incidentList}
        keyExtractor={(marketer) => String(marketer.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMaketers}
        onEndReachedThreshold={0.2}
        renderItem={({ item: marketer }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Feirante:</Text>
            <Text style={styles.incidentValue}>{marketer.name}</Text>

            <Text style={styles.incidentProperty}>Vendendo:</Text>
            <View style={styles.categoriesList}>
              {marketer.categories.map((categories) => (
                <Text key={categories} style={styles.marketCategories}>
                  {categories}
                </Text>
              ))}
            </View>

            <Text style={styles.incidentProperty}>Entrega:</Text>
            <Text style={styles.incidentValue}>{marketer.delivery}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(marketer)}
            >
              <Text style={styles.detailsButtonText}>Entre em contato</Text>
              <Feather name="arrow-right" size={16} color="#4B7F52" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
