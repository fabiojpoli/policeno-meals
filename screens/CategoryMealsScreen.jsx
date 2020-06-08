import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function CategoryMealsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CategoryMealsScreen</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CategoryMealsScreen;
