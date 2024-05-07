import { View, Text ,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import {CountryPicker} from "react-native-country-codes-picker";

function ListHeaderComponent({countries, lang, onPress}) {
    return (
        <View
            style={{
                paddingBottom: 20,
            }}
        >
            <Text>
                Popular countries
            </Text>
            {countries?.map((country, index) => {
                return (
                    <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country)} />
                )
            })}
        </View>
    )
}

export default function App() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {countryCode}
        </Text>
      </TouchableOpacity>

      // For showing picker just put show state to show prop
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        ListHeaderComponent={ListHeaderComponent}
        popularCountries={['en', 'ua', 'pl']}
      />
    </View>
  );
}