import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView , Picker} from 'react-native';

export default class App extends React.Component {
  state = {
    user: ''
  }
updateUser = (user) => { this.setState({ user: user }) }

isSetConfigPressed()
{
  Alert.alert("SET CONFIG");
}
isRegisterPressed()
{
  Alert.alert("REGISTER");
}
isClearUserIdPressed()
{
  Alert.alert("CLEAR USER ID");
}
isClearPreferencesPressed()
{
  Alert.alert("CLEAR PREFERENCES");
}
isClearMessageCenterPressed()
{
  Alert.alert("CLEAR MESSAGE CENTER");
}
isClearInAppMessagesPressed()
{
  Alert.alert("CLEAR IN APP MESSAGES");
}
isClearNotificationCategoriesPressed()
{
  Alert.alert("CLEAR NOTIFICATION CATEGORIES");
}
render(){
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View >
        <Text style={styles.sectionTitle1}>Choose Configuration</Text>
        
        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "pushio_config.json" value = "pushio_config" />
               <Picker.Item label = "pullio_config.json" value = "pullio_config" />
               <Picker.Item label = "getio_config.json" value = "getio_config" />
            </Picker>
      
        <TouchableOpacity onPress={this.isSetConfigPressed}>
          <Text style={styles.fullWidthButtons}>SET CONFIG</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.isRegisterPressed}>
          <Text style={styles.fullWidthButtons}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      <View >
        <Text style={styles.sectionTitle2}>Clear Data</Text>

       
        <View style={{flexDirection: "row",justifyContent: "space-between"}}>
        <TouchableOpacity onPress={this.isClearUserIdPressed}>
          <Text style={styles.clearDataSectionButtonsRow1}>CLEAR USER ID</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.isClearPreferencesPressed}>
          <Text style={styles.clearDataSectionButtonsRow1}>CLEAR PREFERENCES</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row",justifyContent: "space-between"}}>
        <TouchableOpacity onPress={this.isClearMessageCenterPressed}>
          <Text style={styles.clearDataSectionButtonsRow2}>CLEAR MESSAGE CENTER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.isClearInAppMessagesPressed}>
          <Text style={styles.clearDataSectionButtonsRow2}>CLEAR IN APP MESSAGES</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.isClearNotificationCategoriesPressed}>
          <Text style={styles.fullWidthButtons2}>CLEAR NOTIFICATION CATEGORIES</Text>
        </TouchableOpacity>

        <Text style = {styles.text}>{this.state.user}</Text>
      </View>
      
    </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    marginTop:40
  },
  container1: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  container2: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    marginTop:30,
    width:300,
  },
  sectionTitle1:{
    marginTop: 20,
    marginRight:100,
    color: "black",
    fontSize:20
  },
  sectionTitle2:{
    marginTop: 20,
    marginRight:200,
    color: "black",
    fontSize:20
  },
  fullWidthButtons: {
    fontSize: 15,
    backgroundColor: "red",
    color: "#FFFFFF",
    marginTop: 30,
    height:50,
    width:300,
    textAlign: "center",
    padding: 7,
    
  },

  clearDataSectionButtonsRow1:{
    fontSize: 15,
    backgroundColor: "red",
    color: "#FFFFFF",
    marginTop: 15,
    height:50,
    width:140,
    padding: 7,
    textAlign: "center",
    marginRight:10,
    marginLeft:10

  },
  clearDataSectionButtonsRow2:{
    fontSize: 15,
    backgroundColor: "red",
    color: "#FFFFFF",
    marginTop: 15,
    height:50,
    width:140,
    padding: 7,
    textAlign: "center",
    marginRight:10,
    marginLeft:10

  },
  fullWidthButtons2: {
    fontSize: 15,
    backgroundColor: "red",
    color: "#FFFFFF",
    marginTop: 30,
    height:50,
    width:300,
    textAlign: "center",
    padding: 7,
    marginLeft:10
    
  },
  text:{  
    margin: 24,  
    fontSize: 25,  
    fontWeight: 'bold',  
    textAlign: 'center',  
},  
pickerStyle:{  
    height: 150,  
    width: "80%",  
    color: '#344953',  
    justifyContent: 'center',  
}  

});
