import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { colors } from '@/utils/colors';

const Button = ({ 
    title,
    type, 
    onPress 
}: {
    title: string;
    type: "top" | "right" | "number";
    onPress: Function;
}) => {
    return (
        <TouchableOpacity 
        style={[
            styles.button,
             {
            backgroundColor:
             type == 'top' 
            ? colors.btnDark
            : type == 'right' 
            ? colors.dark 
            : colors.btnLight,
        },
    ]}
        onPress={onPress}
        >
            <Text
            style={{
                fontSize: 30,
                color: type == 'number' ? colors.black : colors.white,
            }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 57,
        width: 65,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
        ,
    }
});