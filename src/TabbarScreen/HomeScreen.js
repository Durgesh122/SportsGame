import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import style from '../Style/Styles'
import { Picker } from '@react-native-picker/picker'

export default function HomeScreen() {
  const [showDropDown1,setShowDropDown1]=useState(false)
  const [select1,setSelect1]=useState(null)
  const [showDropdown2,setShowDropDown2]=useState(false)
  const [select2,setSelect2]=useState(null)
  const [showDropdown3,setShowDropDown3]=useState(false)
  const [select3,setSelect3]=useState(null)
  const [showDropdown4,setShowDropDown4]=useState(false)
  const [select4,setSelect4]=useState(null)
  
  
 
 
  const options = ['Top Legues & Countries','Option 1', 'Option 2', 'Option 3'];
  const options1 =['Soccer','Option-1','Option-2','Other']
  const options2=['Today','Option-1','Option-2','Other']
  const options3=['1X2','Option-1','Option-2','Other']

  const toggleDropdown1=()=>{
    setShowDropDown1(!showDropDown1)
  }
  const handleOptionSelect1=(option)=>{
    setSelect1(option)
    setShowDropDown1(false)

  }
  const toggleDropdown2=()=>{
    setShowDropDown2(!showDropdown2)
  }
  const handleOptionSelect2=(option)=>{
    setSelect2(option)
    setShowDropDown2(false)

  }
  const toggleDropdown3=()=>{
    setShowDropDown3(!showDropdown3)
  }
  const handleOptionSelect3=(option)=>{
    setSelect3(option)
    setShowDropDown3(false)

  }
  const toggleDropdown4=()=>{
    setShowDropDown4(!showDropdown4)
  }
  const handleOptionSelect4=(option)=>{
    setSelect4(option)
    setShowDropDown4(false)

  }
  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
      <View style={{ height: 140, width: "100%", backgroundColor: "#6D2299" }}>
        <ScrollView horizontal={true}>
          <View style={style.HomeScreenscr}>
            <Image source={require("../Assets/Images/bongeimag.png")} style={style.BackImagesty
          } />
          </View>
          <View style={style.HomeScreenscr}>
            <Image source={require("../Assets/Images/bongeimag.png")} style={style.BackImagesty} />
          </View>
          <View style={style.HomeScreenscr}>
            <Image source={require("../Assets/Images/bongeimag.png")} style={style.BackImagesty} />
          </View>
          <View style={style.HomeScreenscr}>
            <Image source={require("../Assets/Images/bongeimag.png")} style={style.BackImagesty} />
          </View>
        </ScrollView>
      </View>
             
             <View style={style.flexover}>
              <View style={{alignItems:"center"}}>
              <TouchableOpacity style={style.type} onPress={toggleDropdown1}>
                <View style={style.Viewdir}>
                <Text style={style.typetext}>{select1 || "Top Leagues & Countries"}</Text>
            
                </View>
                <Image source={require('../Assets/Images/Arrow-1.png')}style={{marginLeft:340,marginTop:-18}}/>
              </TouchableOpacity>
              {showDropDown1 && (
                <View style={style.typechaild}>
                  {options.map((option,index)=>(
                    
                    <TouchableOpacity
                    key={index}
                    onPress={()=>handleOptionSelect1(option)}>
                      <Text style={style.typetext2}>{option}</Text>

                    </TouchableOpacity>

                  ))}

                </View>
              )}
             </View> 



             <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={style.type2}onPress={toggleDropdown2}>
                <Text style={style.typetext}>{select2 || "Soccer"}</Text>
                <Image source={require('../Assets/Images/Arrow-1.png')}style={{marginLeft:90,marginTop:-18}}/>

             </TouchableOpacity>
              
              {showDropdown2 && (
                <View style={style.typechaild2}>
                  {options1.map((option,index)=>(
                    <TouchableOpacity key={index}onPress={()=>handleOptionSelect2(option)}>
                     <Text style={style.textsty2}>{option}</Text>
                    </TouchableOpacity>

                  ))}
                </View>
              )}

              <View>
                <TouchableOpacity style={style.type3}onPress={toggleDropdown3}>
                  <Text style={style.typetext}>{select3 || 'Today'}</Text>
                  <Image source={require('../Assets/Images/Arrow-1.png')}style={{marginLeft:90,marginTop:-18}}/>


                </TouchableOpacity>
                {showDropdown3 && (
                  <View style={style.typechaild3}>
                    {options2.map((option,index)=>(
                      <TouchableOpacity key={index}onPress={()=>handleOptionSelect3()}>
                       <Text style={style.textsty2}>{option}</Text>
                      </TouchableOpacity>

                    ))}

                  </View>
                )}
              </View>
              <View>
                <TouchableOpacity style={style.type2} onPress={toggleDropdown4}>
                  <Text style={style.typetext}>{select4 || "1X2"}</Text>
                  <Image source={require('../Assets/Images/Arrow-1.png')}style={{marginLeft:90,marginTop:-18}}/>


                </TouchableOpacity>
                {showDropdown4 &&(
                  <View style={style.typechaild4}>
                    {options3.map((option,index)=>(
                      <TouchableOpacity key={index}onPress={()=>handleOptionSelect4()}>
                        <Text style={style.textsty2}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

             </View>


             </View>


             
<View style={{margin:5,flexDirection:"row"}}>
<Text style={style.text3}>Friday,April 19TH 2024</Text>
<Text style={style.small2}>1</Text>
<Text style={style.small2}>x</Text>
<Text style={style.small2}>2</Text>
<TouchableOpacity>
  <Text style={style.text4}>Clear</Text>
</TouchableOpacity>
</View>

<ScrollView style={{flex:1}}>

<View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>

  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>
  <View style={style.boredrtext3}>
 <View style={{flexDirection:"row"}}>
  <Image  source={require('../Assets/Icon/acute.png')} />
  <Text style={{marginLeft:10,marginTop:-2,color:"black",fontWeight:"bold"}}>6:20 pm Fir 19/4</Text>
  </View>
  <View>
  <Text style={style.man}>Manchester United</Text>
  <Text style={style.man}>Chelsea FC</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={style.footbool}>Footbool/Englend/Premier Leage</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <Text style={style.small}>2.55</Text>
  <View style={style.small3}>
  <Image source={require('../Assets/Images/moving.png')}style={{marginTop:-5}} />
  <Text style={{fontSize:12,fontWeight:"bold",color:"black"}}> 87</Text>

  </View>
  </View>
  </View>
  </View>









</ScrollView>
       
        
         
         </View>
         </ScrollView>
  )
}