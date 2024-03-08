import React,{useState} from "react";
import { View,TextInput,Button,Text,StyleSheet } from "react-native";
const Bai3=()=>{
    const [inputValue,setInputValue]=useState('');
    const [isInputValid,setIsInputValid]=useState(true);
    const handleBlur=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    const handleSubmit=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    return(
        <View>
            <TextInput
                placeholder="Mời nhập thông"
                onChangeText={text=>{
                    setInputValue(text);
                    setIsInputValid(true);
                }}
                onBlur={handleBlur}
            />
            {!isInputValid && <Text>Không để trống</Text>}
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    );
};

export default Bai3;