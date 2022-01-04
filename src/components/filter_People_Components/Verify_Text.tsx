import {Text, View} from "../Themed";
import {TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


export interface Verify_Text_Props{
    displayHeight: number,
    displayWidth: number,
    navigation:any,
}
const Verify_Text: React.FC<Verify_Text_Props> = ({
                                                                                                      navigation,
                                                                                                      displayHeight,
                                                                                                      displayWidth,

                                                                                                  }) => {


// const Verify_Text= () =>{

    return(
        <View style={{
            height: displayHeight/10,
            // backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // backgroundColor: 'white',
            backgroundColor: 'blue',
            width: displayWidth,
            marginBottom: 10,
        }}>


            <View
                style={{
                    // flex: 1,
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: displayWidth,
                    // backgroundColor: 'blue',

                }}
            >




                {/*partner name and image starts here*/}





                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // backgroundColor: 'red',
                        // paddingStart: 16,
                        width: '45%',
                        alignItems: 'flex-start',
                        alignSelf: 'center',
                        alignContent: 'flex-start',
                        paddingLeft: 20,
                        height: '100%',


                    }}
                >


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            alignItems: "center",
                            // backgroundColor: 'gold',
                        }}
                        >


                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '90%',
                            }}>

                                <Text style={{
                                    fontSize: 36,
                                    fontWeight: 'bold',
                                    alignSelf: 'flex-start',
                                    color: 'black',
                                }}>
                                    Verify


                                </Text>

                            </View>



                        </View>





                </View>




                {/*partner name and image starts here*/}

            </View>



        </View>


    );
}

export default Verify_Text;
