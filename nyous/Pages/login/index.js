import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvarToken = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
          // saving error
        }
      }

    const Entrar = () => {

        const corpo = {
            email : email,
            senha : senha
        }
       
        fetch('http://192.168.3.168:5000/api/Account/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status != 404){
                alert('Login efetuado com sucesso!');
                salvarToken(data.token);
                navigation.push('Autenticado');
            } else{
                alert('Dados incorretos');
            }
        })
        //.catch(() => alert('Falha na requisição, tente novamente mais tarde'))
    }
    

        return(
            <View style={styles.container}>
                
                <Image
                    style={styles.logo}
                    source={{
                    uri:
                    'https://raw.githubusercontent.com/sena-code/React-Node/main/4%20-%20Trabalhando%20com%20react-bootstrap%20e%20react-router-dom/nyous-react/src/assets/img/Logo.svg'
                    }}
                />

                <Text>Login</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email..."
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                    secureTextEntry={true}
                    placeholder="Digite sua senha..."

                />

                <TouchableOpacity
                            style={styles.button}
                            onPress={Entrar}

                            >
                            <Text style={styles.buttonText}> Entrar </Text>

                </TouchableOpacity>
            </View>
        )
}



        const styles = StyleSheet.create({
            container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            },
            input : {
                height : 40,
                width : '90%',
                borderColor: 'gray',
                borderWidth : 1,
                borderRadius : '6px',
                padding: 10,
                marginTop : '10px'
            },

            button : {

                backgroundColor : 'black',
                padding: 10,
                borderRadius: 6,
                width:'90%',
                marginTop: 10,
                alignItems : 'center',
                justifyContent: 'center'

            },
            buttonText : {
                color : 'white',

            },
            logo : {
                width: 200,
                height: 200
            }
        });
        

        export default login;