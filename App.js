import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [tamanho, setTamanho] = useState(20);

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: tamanho,
        margin: 20
        }}
        >Hello World!!</Text>
      <View style={styles.containerbotao}>
        <View style={styles.button}>
          <Button title='-' onPress={() => {
            setTamanho(tamanho - 1);
          }}>    
          </Button>
        </View>
      <View style={styles.button}>
        <Button title='+' onPress={() => {
          setTamanho(tamanho + 1);
        }}>  
        </Button>
      </View>
    </View>
    <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbotao: {
    width: 100,
    height: 40,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 40,
    height: 40,
  },

});
