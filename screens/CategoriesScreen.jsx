import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button
        title='Go to category'
        onPress={() => {
          navigation.navigate('CategoryMeals');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CategoriesScreen;
