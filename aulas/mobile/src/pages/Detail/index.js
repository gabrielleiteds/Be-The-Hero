import React from 'react'; 

import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';
import logoImg from '../../assets/logo.png';

import { useNavigation, useRoute } from '@react-navigation/native'


export default function Detail() {
    const route = useRoute();

    const incident = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incident.value}`;
    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Hero of case: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhats() {
        Linking.openURL(`Whatsapp://send?phone=${incident.whatsapp} &text=${message}`);
    }
    
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                <Text style={styles.incidentProperty, {marginTop: 0}}> ONG: </Text>
                <Text style={styles.incidentValue}> {incident.name} from {incident.city}/{incident.uf} </Text>
                        
                <Text style={styles.incidentProperty}> Case: </Text>
                <Text style={styles.incidentValue}> {incident.title}</Text>
                    
                <Text style={styles.incidentProperty}> Value </Text>
                <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)} </Text>
            
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}> Save the day!  </Text>
                <Text style={styles.heroTitle}> be the hero of this case. </Text>

                <Text style={styles.heroDescription}> </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress = {sendWhats}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress = {sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View> 
    );
}