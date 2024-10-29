import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Index() {
  return (
    <LinearGradient
    colors={['#d9005a', '#d1068a']}
    style={stlyes.container}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}>

      <View style={stlyes.header}>
        <View style={stlyes.headerItem}>
          <Icon name='bars' size={24} color='white'/>
        </View>
        <View style={stlyes.headerItem}>
          <Icon name='bell' size={24} color='white'/>
        </View>
      </View>

      <View style={stlyes.bancoWrapper}>
        <Icon name='lightbulb' size={30} color='white'/>
        <Text style={stlyes.bancoText}>Bradesco</Text>
      </View>

      <View style={stlyes.dataWrapper}>
        <Text style={stlyes.nameText}>Usuário</Text>
        <Icon name='chevron-down' color='white' size={15}/>
      </View>

      <View style={stlyes.infoWrapper}>
        <Text style={stlyes.infoText}>Agência *01</Text>
        <Text style={stlyes.infoText}>Conta ****01-2</Text>
      </View>

      <TouchableOpacity style={stlyes.entrarButton}>
        <Text style={stlyes.buttonText}> Entrar</Text>
      </TouchableOpacity>
      <View style={stlyes.outraContaView}>
        <TouchableOpacity>
          <Text style={stlyes.outraContaText}>Acessar outra conta</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerItem: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bancoWrapper: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    gap: 8
  },
  bancoText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  dataWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 200
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 30,
    gap: 30,
    marginTop: 20
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  entrarButton: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 100
  },
  buttonText: {
    color: 'darkred',
    fontWeight: 'bold'
  },
  outraContaView: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  outraContaText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }


})