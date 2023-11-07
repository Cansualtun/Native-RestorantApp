import { StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { useState } from "react";
import { Text } from "react-native";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");
  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length == 0 ? (
        <Text>Aradığınız ürünü bulamadık!</Text>
      ) : (
        <>
          <ResultList
            title="Ucuz Restoranlar"
            result={filterResultByPrice("₺")}
          />
          <ResultList
            title="Uygun Restoranlar"
            result={filterResultByPrice("₺₺")}
          />
          <ResultList
            title="Pahalı Restoranlar"
            result={filterResultByPrice("₺₺₺")}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
