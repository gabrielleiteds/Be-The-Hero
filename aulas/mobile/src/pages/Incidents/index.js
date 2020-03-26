import React, { useState, useEffect } from 'react'; 

import { Feather } from '@expo/vector-icons';

import {useNavigation, useRoute} from '@react-navigation/native';

import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); 

    const navigation = useNavigation();

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if(loading) {
            return;
        }

        if(total > 0 && incidents.length == total) {
            return;
        }

        setLoading(true);
        
        const response = await api.get('incidents', {
            params: {page}
        });
        
        setIncidents([... incidents, ... response.data]);
        setTotal(response.headers['x-total-count']); 
        setPage(page + 1); 
        setLoading(false);  
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
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
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

                        <TouchableOpacity style = {styles.detailsButton} onPress={ () => navigateToDetail(incident)} >
                            <Text style = {styles.detailsButtonText}> see more details </Text>
                            <Feather name = "arrow-right" size  = {16} color= "#e02041" />    
                        </TouchableOpacity>
                    </View>
                )}   
            />
        </View>

    );
}