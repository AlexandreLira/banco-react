import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Slider,
    Picker,
    Switch
} from 'react-native'


class Button extends Component {
    constructor(props){
        super(props)
        
        this.styles = StyleSheet.create({
            button:{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80
            },
            buttonArea:{
                width: 140,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#097BB3',
                borderRadius: 15
            },
            buttonText:{
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold'            }
        })
    }
    render() {
        return(
            <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
                <View style={this.styles.buttonArea}>
                    <Text style={this.styles.buttonText}>Cadastrar</Text>
                </View>
            </TouchableOpacity>
            
        )
    }

    
}









export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            sexo: 'Masculino',
            limite: 500,
            estudande: false
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(){
        let state = this.state
        alert(`Nome:${state.name}\nSexo:${state.sexo}\nLimite:${state.limite}\nEstudante: ${(state.estudande ? 'Sim' : 'Nao')}`)
    }

    render(){
        
        return(

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Banco React</Text>
                </View>

                    {/* =================================================================== */}

                <View style={styles.main}>
                    <Text style={styles.mainText}>Nome:</Text>
                    <TextInput style={styles.mainInput} placeholder="Ex: Alexandre" onChangeText={(text) => this.setState({name: text})}/>

                    {/* ================================================================== */}

                    <Text style={styles.mainText}>Sexo:</Text>
                    <View style={styles.mainViewPicker}>
                        <Picker selectedValue={this.state.sexo} onValueChange={(itemValue) => this.setState({sexo: itemValue})} style={styles.mainPicker}>
                            <Picker.Item key={1} value={'Masculino'} label={'Masculino'}/>
                            <Picker.Item key={2} value={'Feminino'} label={'Feminino'}/>
                        </Picker>
                    </View>

                    {/* ================================================================= */}

                    <Text style={styles.mainText}>Limite:</Text>
                    <Slider minimumValue={100}
                            maximumValue={1800}
                            thumbTintColor={'#097BB3'} 
                            minimumTrackTintColor={'#FFAA3F'}
                            onValueChange={(value) => this.setState({limite: Math.floor(value)})} value={this.state.limite}/>
                    <Text style={styles.mainSliderValue}>R${this.state.limite.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')}</Text>

                    {/* ================================================================= */}

                    <View style={styles.mainViewSwitch}>
                        <Text style={styles.mainText}>Estudante Univesitario: </Text>
                        <Switch value={this.state.estudande}
                                thumbColor="#097BB3"
                                trackColor={{true: '#FFB459'}}
                                onValueChange={(value) => this.setState({estudande: value})}/>
                        {/* <Text style={styles.mainViewSwitchText}>{(this.state.estudande ? 'Sim' : 'Não')}</Text> */}
                    </View>
                    <Button onPress={this.cadastrar}/>
                    
                </View>


                

            </View>
        )

    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    header:{
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#097BB3'
    },
    headerTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    main:{
        flex: 1,
        padding: 50
    },
    mainText:{
        fontSize: 15,
        margin: 2,
        fontWeight: 'bold'
    },
    mainInput:{
        height: 50,
        borderWidth: 2,
        borderColor: '#FFAA3F',
        borderRadius: 25,
        padding: 10,
        marginBottom: 10
    },
    mainViewPicker:{
        height: 50,
        borderWidth: 2,
        borderColor: '#FFAA3F',
        borderRadius: 25,
        marginBottom: 10
    },
    mainSliderValue:{
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    },
    mainViewSwitch:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    mainViewSwitchText:{
        fontWeight: 'bold', 
        fontSize: 16
    }
    
})

