import React, { useState, useEffect } from 'react'; 

import { Feather } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native';

import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    async function loadIncidents() {
        const response = await api.get('incidents');
        setIncidents(response.data);
        setTotal(response.headers['x-total-count']); 
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (

        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total <Text style={styles.headerTextBold}> {total} cases </Text>
                </Text>
            
            </View>

            <Text style={styles.title}> Welcome </Text>
            <Text style={styles.description}> Choose a case below and save the day </Text>
            
            <FlatList 
            style={styles.incidentList} 
            data={incidents} 
            showsVerticalScrollIndicator={false}
            keyExtractor={incident => String(incident.id)}
                renderItem={ ({item: incident}) => (
                    <View style={styles.incident}>
                    
                        <Text style={styles.incidentProperty}> ONG: </Text>
                        <Text style={styles.incidentValue}> {incident.name} </Text>
                        
                        <Text style={styles.incidentProperty}> Case: </Text>
                        <Text style={styles.incidentValue}> {incident.title} </Text>
                        
                        <Text style={styles.incidentProperty}> Value </Text>
                        <Text style={styles.incidentValue}> {Intl.
                                                            NumberFormat('pt-BR', {style: 'currency', currency:'BRL'})
                                                            .format(incident.value)} </Text>

                        <TouchableOpacity style = {styles.detailsButton} onPress={ navigateToDetail } >
                            <Text style = {styles.detailsButtonText}> see more details </Text>
                            <Feather name = "arrow-right" size  = {16} color= "#e02041" />    
                        </TouchableOpacity>
                    </View>
                )}   
            />
        </View>

    );
}