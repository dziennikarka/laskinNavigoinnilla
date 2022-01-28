import { StyleSheet, Text, View, FlatList} from 'react-native'; 

function History ({route, navigation}) {

    const {data} = route.params;

    return(
        <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) =><Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
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
  });

export default History;