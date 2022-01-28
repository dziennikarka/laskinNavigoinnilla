import react, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function Calculator ({ navigation }) {

    const [numberOne, onChangeNumberOne] = useState(null);
    const [numberTwo, onChangeNumberTwo] = useState(null);
    const [result, setResult] = useState("");
    const [data, setData] = useState([]);
    
    const onClickSum = () => {
      if(numberOne != null && numberTwo != null){
        const sum = parseInt(numberOne) + parseInt(numberTwo);
        setResult(sum);
        const t = numberOne + " + " + numberTwo + " = " + sum;
        setData([...data, {key: t}]);
      }
      
    }
  
    const onClickDeduction = () => {
      if(numberOne != null && numberTwo != null){
        const deduction = parseInt(numberOne) - parseInt(numberTwo);
        setResult(deduction);
        const t = numberOne + " - " + numberTwo + " = " + deduction;
        setData([...data, {key: t}]);
      }
    }
  
    return (
      <View style={styles.container}>
        <Text>Result: {result} </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumberOne}
          value={numberOne}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumberTwo}
          value={numberTwo}
          keyboardType="number-pad"
        />
  
        <Button onPress={onClickSum} title="+" color="#f194ff"></Button>
        <Button onPress={onClickDeduction} title="-"></Button>
        <Button title="History"
        onPress={() => navigation.navigate('History', {data: data})}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      height: 40,
      width: 100, 
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  
  });

  export default Calculator;