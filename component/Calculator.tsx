import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors'
import Button from './button'

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');
  
  const handleNumberInput = (num: string) => {
    if (displayValue == '0') {
      setDisplayValue(num); /// remplazar el 0 por el numero
    }else {
      setDisplayValue( displayValue + num); // agregar el numero final
    }
  }

  const handleOperatorImput = (operator: string) => {
    setOperator(operator);  
    setFirstValue(displayValue);
    setDisplayValue('0');
  }

  const handleCalculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator == '+') {
      setDisplayValue((num1 + num2).toString());
    }else if (operator == '-') {
      setDisplayValue((num1 - num2).toString());
    }else if (operator == '*') {
      setDisplayValue((num1 * num2).toString());
    }else if (operator == '/') {
      setDisplayValue((num1 / num2).toString());
    }else if (operator == '%') {  
      setDisplayValue((num1 % num2).toString());
    }
    setOperator('');
    setFirstValue('');
  }

  const handleClear = () => { 
    setDisplayValue('0');
    setFirstValue('');
    setOperator('');
  }

  const handleDelete = () => {
    if (displayValue.length == 1) {
      setDisplayValue('0');
    }else { 
    setDisplayValue(displayValue.slice(0, -1));
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize: 30,fontWeight: '300'}}>{firstValue + operator}</Text>
        <Text style={{fontSize: 70, fontWeight: '300'}}>{displayValue}</Text>
        </View>
      <View style={styles.teclado}>
        <Button title='C' type='top' onPress={handleClear} />
        <Button title='dlt' type='top' onPress={handleDelete} />
        <Button title='%' type='top' onPress={() => handleOperatorImput('%')} />
        <Button title='/' type='right' onPress={() => handleOperatorImput('/')} />
        <Button title='7' type='number' onPress={() => handleNumberInput('7')}/>
        <Button title='8' type='number' onPress={() => handleNumberInput('8')} />
        <Button title='9' type='number' onPress={() => handleNumberInput('9')} />
        <Button title='*' type='right' onPress={() => handleOperatorImput('*')} />
        <Button title='6' type='number' onPress={() => handleNumberInput('6')} />
        <Button title='5' type='number' onPress={() => handleNumberInput('5')} />
        <Button title='4' type='number'onPress={() => handleNumberInput('4')} />
        <Button title='-' type='right' onPress={() => handleOperatorImput('-')} />
        <Button title='1' type='number' onPress={() => handleNumberInput('1')} />
        <Button title='2' type='number' onPress={() => handleNumberInput('2')} />
        <Button title='3' type='number' onPress={() => handleNumberInput('3')} />
        <Button title='+' type='right' onPress={() => handleOperatorImput('+')} />
        <Button title='0' type='number' onPress={() => handleNumberInput('0')} />
        <Button title='00' type='number'onPress={() => handleNumberInput('00')}  />
        <Button title='.' type='number' onPress={() => handleNumberInput('.')} />
        <Button title='=' type='right' onPress={handleCalculation} />
      </View>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
    },
    display: {
        flex: 1,
        backgroundColor: colors.gray,
        paddingVertical: 30,
        paddingHorizontal: 40,  
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    teclado: {
        flex: 1,
        backgroundColor: colors.black,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
    },
})