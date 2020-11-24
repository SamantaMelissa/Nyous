import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemEvento from '../../componentes/utils/Listagem/Eventos';


const home = () => {
    const [token, setToken] = useState('');
    const [eventos, setEventos] = useState([]);

   
    useEffect(() => {
        listarEventos();
    }, []); 

    const listarEventos = () => {
        fetch('http://192.168.3.168:5000/api/eventos')
            .then(response => response.json())
            .then(data => {
                setEventos(data.data)
                console.log(data.data);
            })
            .catch(err => console.error(err));
    }

    const renderItem = ({ item }) => (
        <ItemEvento nome={item.nome} imagem={item.urlImagem} link={item.link} />
      );

    return(
        <View>
            <Text>HOME</Text>
            {/* <Text>{token}</Text> */}
            <FlatList
                data={eventos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )

}

export default home;