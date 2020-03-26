import React from 'react'; 

import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (

        <View style={styles.container}>
            
            <View style={styles.header}>
            
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total <Text style={styles.headerTextBold}> 0 cases </Text>
                </Text>
            
            </View>

            <Text style={styles.title}> Welcome </Text>
            <Text style={styles.description}> Choose a case below and save the day </Text>
            
            <FlatList 
            style={styles.incidentList} 
            data={[1, 2, 3]} 
            showsVerticalScrollIndicator={false}
            keyExtractor={incident => String(incident)}
                renderItem={ () => (
                    <View style={styles.incident}>
                    
                        <Text style={styles.incidentProperty}> ONG: </Text>
                        <Text style={styles.incidentValue}> APAD </Text>
                        
                        <Text style={styles.incidentProperty}> Case: </Text>
                        <Text style={styles.incidentValue}>Cachorro Atropelado</Text>
                        
                        <Text style={styles.incidentProperty}> Value </Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

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