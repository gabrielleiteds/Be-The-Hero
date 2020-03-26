import React from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View> 
        </View>

    );
}