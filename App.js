import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from './screens/home/home';
import MapScreen from './screens/home/MapView';

function SearchScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Search!</Text>
		</View>
	);
}

function LikesScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Likes!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}

function MainBoxScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>MainBox!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
	return (
		<Tab.Navigator
      screenOptions={{
        safeAreaInset: { bottom: 'never', top: 'never' },
        tabBarStyle: {
            height: 60 + insets.bottom,
        },
      }}
  >
			<Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{padding: 8,marginTop: 20,backgroundColor: focused ? '#ABB8C3' : '#FFFFFF', borderRadius: 7}}>
              <Image
                source={require('@images/tab1/tab1.png')}
                style={{
                  width: size,
                  height: size,
                  // borderRadius: size,
                }}
              />
            </View>
          ),
        }}
   />
			<Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{padding: 8,marginTop: 20,backgroundColor: focused ? '#ABB8C3' : '#FFFFFF', borderRadius: 7}}>
              <Image
                source={require('@images/tab2/tab2.png')}
                style={{
                  width: size,
                  height: size,
                  // borderRadius: size,
                }}
              />
            </View>
          ),
        }}
   />
      <Tab.Screen name="MainBox" component={MainBoxScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (

            <Image
              source={require('@images/Group-919/Group-919.png')}
              style={{
                  width: 120,
                  height: 120,
                  marginTop: -10
                  // borderRadius: size,
              }}
            />


          ),
        }}
      />
			<Tab.Screen name="Likes" component={LikesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{padding: 8,marginTop: 20,backgroundColor: focused ? '#ABB8C3' : '#FFFFFF', borderRadius: 7}}>
              <Image
                source={require('@images/tab4/tab4.png')}
                style={{
                  width: size,
                  height: size,
                  // borderRadius: size,
                }}
              />
            </View>
          ),
        }}
   />
      <Tab.Screen name="Settings" component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{padding: 8,marginTop: 20,backgroundColor: focused ? '#ABB8C3' : '#FFFFFF', borderRadius: 7}}>
              <Image
                source={require('@images/tab5/tab5.png')}
                style={{
                  width: size,
                  height: size,
                  // borderRadius: size,
                }}
              />
            </View>
          ),
        }}
      />
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="BusinessList"
        // screenOptions={{
        //   headerShown: false
        // }}
   >
				<Stack.Screen name="MapView" component={MapScreen} />
				<Stack.Screen name="BusinessList" options={{headerShown: false}} component={MyTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React, {useState, useEffect, useRef} from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
//
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import RadioForm from 'react-native-simple-radio-button';
// import CheckBox from '@react-native-community/checkbox';
// import RBSheet from "react-native-raw-bottom-sheet";
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// const api = require('@api/index');
// // const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };
//
// const cat = [{"name": "Grocery"},{name: "Restaurent"}, {"name": "Beauti & Spa"},{"name": "ABC"}, {"name": "ABC"}, {"name": "ABC"}, {"name": "ABC"},{"name": "ABC"},{"name": "ABC"}];
//
// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//     flex: 1
//   };
//
//   const refRBSheet = useRef();
//
//   const radio_props = [
//   {label: 'Name A-Z', value: 0 },
//   {label: 'Name Z-A', value: 1 },
//   {label: 'By Distance (Low to High)', value: 2 },
//   {label: 'By Distance (High to Low)', value: 3 },
//   {label: 'Reviews (Low to High)', value: 4 },
//   {label: 'Reviews (High to Low)', value: 5 }
// ];
//
//   const [data, setData] = useState([]);
//   const [radioVal, setRadioVal] = useState(2);
//   const [toggleCheckBox, setToggleCheckBox] = useState(false)
//
//   useEffect(() => {
//     let params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "", order_mode: ""};
//         getData(params);
//     }, []);
//
//   const getData = (params) => {
//     api.getBusiness(params, (e, r) => {
//
//         if (e) {
//           console.log('Calling Login API Error')
//           //alert("Error: " + e);
//         } else {
//           console.log('Calling API Success'+JSON.stringify(r));
//           if (r.success) {
//             setData(r.data.business_data);
//           } else {
//
//           }
//         }
//       });
//   };
//
//   getFilteredData = () => {
//     let params = {};
//     switch(radioVal){
//       case 0:
//         params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "business_name", order_mode: "ASC"};
//         getData(params);
//         break;
//       case 1:
//         params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "business_name", order_mode: "DESC"};
//         getData(params);
//         break;
//       case 2:
//         params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "distance", order_mode: "ASC"};
//         getData(params);
//         break;
//       case 3:
//         params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "distance", order_mode: "DESC"};
//         getData(params);
//         break;
//       case 4:
//         params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "avrg_rating", order_mode: "ASC"};
//         getData(params);
//         break;
//       case 5:
//         params = { latitude: "22.4851231", longitude: "88.3653907", order_by: "avrg_rating", order_mode: "DESC"};
//         getData(params);
//         break;
//     }
//     refRBSheet.current.close();
//   };
//
//   const renderItem = ({ item }) => {
//     return(
//       <View style={{flexDirection: 'row', padding: 10}}>
//         <Image
//           source={{ uri: item.business_image }}
//           style={{height: 110, width: 110, borderRadius: 10}}
//         />
//         <View style={{marginLeft: 10, width: "70%"}}>
//           <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
//             <View style={{flexDirection: 'row', width: "65%"}}>
//               <View style={{backgroundColor: "#44A9FB", borderRadius: 5, alignItems: 'center',paddingHorizontal: 10}}>
//                 <Text style={{color: "#FFFFFF", fontSize: 10, lineHeight: 28}}>Premium</Text>
//               </View>
//               <View style={{borderColor: "#44A9FB", borderWidth: 1, borderRadius: 5, alignItems: 'center',marginLeft: 10, paddingHorizontal: 10}}>
//                 <Text style={{color: "#44A9FB", fontSize: 10, lineHeight: 28}}>Offers available</Text>
//               </View>
//             </View>
//             <Image
//               source={require('@images/heart/heart.png')}
//               // style={{height: 25, width: 25}}
//             />
//           </View>
//           <Text style={{color: "#000000", fontSize: 16, lineHeight: 28, marginTop: 5}}>{item.title}</Text>
//           <Text numberOfLines={1} style={{color: "#969696", fontSize: 12, lineHeight: 20}}>{item.description}</Text>
//           <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Image
//                 source={require('@images/ionic-ios-star/ionic-ios-star.png')}
//                 // style={{height: 25, width: 25}}
//               />
//               <Text style={{color: "#576E82", fontSize: 12, lineHeight: 28, marginLeft: 5}}>{item.avrg_rating}/5</Text>
//             </View>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Image
//                 source={require('@images/metro-location/metro-location.png')}
//                 // style={{height: 25, width: 25}}
//               />
//               <Text style={{color: "#576E82", fontSize: 12, lineHeight: 28, marginLeft: 5}}>{item.distance} miles</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };
//
//   const flatListItemSeparator = () => {
//   return (
//     <View
//       style={{
//         height: 3,
//         width: "100%",
//         backgroundColor: "#769FE559",
//       }}
//     />
//   );
// }
//
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent={false} />
//       <View style={styles.container}>
//         {/* <MapView
//           provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//           style={styles.map}
//           region={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.015,
//             longitudeDelta: 0.0121,
//           }}
//           >
//         </MapView> */}
//         <View style={{padding: 10}}>
//           <View style={{flexDirection: 'row'}}>
//             <Image
//               source={require('@images/Location/Location.png')}
//               // style={{height: 15, width: 15}}
//             />
//             <Text style={{color: "#44a9fb", fontSize: 14, lineHeight: 18, marginLeft: 6}}>Home</Text>
//           </View>
//           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//             <Text style={{marginLeft: 20, color: "#98A8B5", lineHeight: 18, fontSize: 14}}>15A Dummy Street, Dummy City ...</Text>
//             <Image
//               source={require('@images/pencil/pencil.png')}
//               // style={{height: 15, width: 15}}
//             />
//           </View>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
//           <View style={{width: '80%',flexDirection: 'row', borderWidth: 1, borderColor: "#98A8B5", borderRadius: 5, padding: 10, alignItems: 'center'}}>
//             <Image
//               source={require('@images/Icon/Icon.png')}
//               // style={{height: 15, width: 15}}
//             />
//             <Text style={{color: "#98A8B5", fontSize: 13, lineHeight: 28, marginLeft: 16}}>search by items name</Text>
//           </View>
//           <Image
//             source={require('@images/Group/Group.png')}
//             style={{height: 45, width: 45}}
//           />
//         </View>
//
//         <View style={{marginTop: 10, padding: 10}}>
//           <Text style={{color: "#2B2E37", fontSize: 16, lineHeight: 28}}>Browse Categories</Text>
//           <FlatList
//             style={{marginTop: 10}}
//             horizontal
//             data={cat}
//             renderItem={({ item, index }) => {
//               return (
//                 <View style={{borderWidth: 1, borderColor: "#576E82", borderRadius: 5, padding: 7, alignItems: 'center', marginRight: 10}}>
//                   <Text style={{color: "#576E82", fontSize: 12, lineHeight: 22}}>{item.name}</Text>
//                 </View>
//               )
//             }}
//             keyExtractor={(item, index) => index}
//           />
//         </View>
//
//         <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10,marginTop: 10}}>
//           <Text style={{width: '80%', color: "#2B2E37", fontSize: 16, lineHeight: 28}}>Business List</Text>
//           <View style={{width: '20%',flexDirection: 'row', alignItems: 'center'}}>
//             <TouchableOpacity onPress={() => refRBSheet.current.open()}>
//               <Image
//                 source={require('@images/ionic-ios-list/ionic-ios-list.png')}
//                 // style={{height: 15, width: 15}}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => refRBSheet.current.open()}>
//               <Image
//                 source={require('@images/feather-map-pin/feather-map-pin.png')}
//                 style={{marginLeft: 15}}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{backgroundColor: "#769FE559",height: 2}} />
//
//         <FlatList
//           // style={{marginTop: 10}}
//           // horizontal
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index}
//           ItemSeparatorComponent={flatListItemSeparator}
//         />
//
//         <RBSheet
//           ref={refRBSheet}
//           closeOnDragDown={true}
//           closeOnPressMask={true}
//           height={450}
//           customStyles={{
//             wrapper: {
//               backgroundColor: "transparent"
//             },
//             draggableIcon: {
//               backgroundColor: "#000"
//             }
//           }}
//         >
//           <View style={{padding: 10}}>
//             <Text style={{fontSize: 16, color: "#44A9FB", lineHeight: 28}}>Filter</Text>
//             <RadioForm
//               radio_props={radio_props}
//               initial={radioVal}
//               formHorizontal={false}
//               labelHorizontal={true}
//               // style={{fontSize: 14, lineHeight: 41, color: "#1C1C1C"}}
//               // buttonColor={'#2196f3'}
//               // animation={true}
//               onPress={(value) => {setRadioVal(value)}}
//             />
//             <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
//               <CheckBox
//                 disabled={false}
//                 value={toggleCheckBox}
//                 boxType={'square'}
//                 onValueChange={(newValue) => setToggleCheckBox(newValue)}
//               />
//               <Text style={{color: "#44A9FB", fontSize: 14, lineHeight: 35, marginLeft: 10}}>Offers available</Text>
//             </View>
//             <TouchableOpacity style={{marginTop: 30, backgroundColor: "#44A9FB", borderRadius: 25, marginHorizontal: 70, alignItems: "center"}} onPress={() => getFilteredData()}>
//               <Text style={{color: "#FFFFFF", fontSize: 16, lineHeight: 19, paddingVertical: 15}}>Apply</Text>
//             </TouchableOpacity>
//             {/* <SheetComponent /> */}
//           </View>
//         </RBSheet>
//
//       </View>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF"
//    // ...StyleSheet.absoluteFillObject,
//    // height: 400,
//    // width: 400,
//    // justifyContent: 'flex-end',
//    // alignItems: 'center',
//  },
//  map: {
//    ...StyleSheet.absoluteFillObject,
//  },
// });
//
// export default App;
