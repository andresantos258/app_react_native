// import React from 'react';
// import {
//   StyleSheet,
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Text,
//   Image,
// } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';

// const tags = ['ios', 'android', 'web', 'ui', 'ux'];
// const stats = [
//   { label: 'Location', value: 'Brazil' },
//   { label: 'Job Type', value: 'Full Time' },
//   { label: 'Experience', value: '2 years' },
// ];
// const items = [
//   {
//     icon: 'figma',
//     label: 'Senior UI/UX Designer',
//     company: 'Figma',
//     jobType: 'Full Time',
//     years: '2019-2023',
//   },
//   {
//     icon: 'github',
//     label: 'Mid-level Designer',
//     company: 'GitHub',
//     jobType: 'Full Time',
//     years: '2017-2019',
//   },
//   {
//     icon: 'twitter',
//     label: 'Junior Designer',
//     company: 'Twitter',
//     jobType: 'Full Time',
//     years: '2015-2017',
//   },
// ];
// const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

// export default function Example() {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <View style={styles.header}>
//         <View style={styles.headerAction}>
//           <TouchableOpacity
//             onPress={() => {
//               // handle onPress
//             }}>
//             <FeatherIcon name="chevron-left" size={24} />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.search}>
//           <View style={styles.searchIcon}>
//             <FeatherIcon color="#778599" name="search" size={17} />
//           </View>

//           <TextInput
//             autoCapitalize="words"
//             autoComplete="name"
//             placeholder="Search..."
//             placeholderTextColor="#778599"
//             style={styles.searchControl} />
//         </View>

//         <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
//           <TouchableOpacity
//             onPress={() => {
//               // handle onPress
//             }}>
//             <FeatherIcon name="more-vertical" size={24} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView>
//         <View style={styles.content}>
//           <View style={styles.profile}>
//             <View style={styles.profileTop}>
//               <View style={styles.avatar}>
//                 <Image
//                   alt=""
//                   source={{
//                     uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
//                   }}
//                   style={styles.avatarImg} />

//                 <View style={styles.avatarNotification} />
//               </View>

//               <View style={styles.profileBody}>
//                 <Text style={styles.profileTitle}>{'Guilherme\nCoutinho de Moura'}</Text>

//                 <Text style={styles.profileSubtitle}>
//                   Analista de Suporte Técnico

//                   {' · '}

//                   <Text style={{ color: '#266EF1' }}>@kingblackpantherrrr</Text>
//                 </Text>
//               </View>
//             </View>

//             <Text style={styles.profileDescription}>
//               Skilled in user research, wireframing, prototyping, and collaborating with cross-functional teams.
//             </Text>

//             <View style={styles.profileTags}>
//               {tags.map((tag, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => {
//                     // handle onPress
//                   }}>
//                   <Text style={styles.profileTagsItem}>#{tag}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           <View style={styles.stats}>
//             {stats.map(({ label, value }, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.statsItem,
//                   index === 0 && { borderLeftWidth: 0 },
//                 ]}>
//                 <Text style={styles.statsItemText}>{label}</Text>

//                 <Text style={styles.statsItemValue}>{value}</Text>
//               </View>
//             ))}
//           </View>

//           <View style={styles.contentActions}>
//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={{ flex: 1, paddingHorizontal: 6 }}>
//               <View style={styles.btn}>
//                 <Text style={styles.btnText}>Follow</Text>
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={{ flex: 1, paddingHorizontal: 6 }}>
//               <View style={styles.btnPrimary}>
//                 <Text style={styles.btnPrimaryText}>Message</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.list}>
//           <View style={styles.listHeader}>
//             <Text style={styles.listTitle}>My Experience</Text>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <Text style={styles.listAction}>View All</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView
//             contentContainerStyle={styles.listContent}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}>
//             {items.map(({ icon, label, company, jobType, years }, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   // handle onPress
//                 }}>
//                 <View style={styles.card}>
//                   <View style={styles.cardTop}>
//                     <View style={styles.cardIcon}>
//                       <FeatherIcon
//                         color="#000"
//                         name={icon}
//                         size={24} />
//                     </View>

//                     <View style={styles.cardBody}>
//                       <Text style={styles.cardTitle}>{label}</Text>

//                       <Text style={styles.cardSubtitle}>{company}</Text>
//                     </View>
//                   </View>

//                   <View style={styles.cardFooter}>
//                     <Text style={styles.cardFooterText}>{jobType}</Text>

//                     <Text style={styles.cardFooterText}>{years}</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         <View style={styles.list}>
//           <View style={styles.listHeader}>
//             <Text style={styles.listTitle}>Recommended for you</Text>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <Text style={styles.listAction}>View All</Text>
//             </TouchableOpacity>
//           </View>

//           <ScrollView
//             contentContainerStyle={styles.listContent}
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}>
//             {items.map(({ icon, label, company, jobType, years }, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   // handle onPress
//                 }}>
//                 <View style={styles.card}>
//                   <View style={styles.cardTop}>
//                     <View style={styles.cardIcon}>
//                       <FeatherIcon
//                         color="#000"
//                         name={icon}
//                         size={24} />
//                     </View>

//                     <View style={styles.cardBody}>
//                       <Text style={styles.cardTitle}>{label}</Text>

//                       <Text style={styles.cardSubtitle}>{company}</Text>
//                     </View>
//                   </View>

//                   <View style={styles.cardFooter}>
//                     <Text style={styles.cardFooterText}>{jobType}</Text>

//                     <Text style={styles.cardFooterText}>{years}</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   /** Header */
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderBottomWidth: 1,
//     borderColor: '#e3e3e3',
//   },
//   headerAction: {
//     width: 40,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
//   /** Search */
//   search: {
//     position: 'relative',
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   searchIcon: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     width: 34,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   searchControl: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     paddingLeft: 34,
//     width: '100%',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   /** Content */
//   content: {
//     paddingTop: 12,
//     paddingHorizontal: 24,
//   },
//   contentActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 18,
//     marginHorizontal: -6,
//     marginBottom: 0,
//   },
//   /** Profile */
//   profile: {
//     paddingTop: 4,
//     paddingBottom: 16,
//   },
//   profileTop: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   profileBody: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     paddingLeft: 16,
//   },
//   profileTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     lineHeight: 32,
//     color: '#121a26',
//     marginBottom: 6,
//   },
//   profileSubtitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#778599',
//   },
//   profileDescription: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#778599',
//   },
//   profileTags: {
//     marginTop: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   profileTagsItem: {
//     fontSize: 14,
//     fontWeight: '600',
//     lineHeight: 18,
//     color: '#266ef1',
//     marginRight: 4,
//   },
//   /** Avatar */
//   avatar: {
//     position: 'relative',
//   },
//   avatarImg: {
//     width: 80,
//     height: 80,
//     borderRadius: 9999,
//   },
//   avatarNotification: {
//     position: 'absolute',
//     borderRadius: 9999,
//     borderWidth: 2,
//     borderColor: '#fff',
//     bottom: 0,
//     right: -2,
//     width: 21,
//     height: 21,
//     backgroundColor: '#22C55E',
//   },
//   /** Stats */
//   stats: {
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     padding: 20,
//     borderRadius: 12,
//     shadowColor: '#90a0ca',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 20,
//     elevation: 1,
//   },
//   statsItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     borderLeftWidth: 1,
//     borderColor: 'rgba(189, 189, 189, 0.32)',
//   },
//   statsItemText: {
//     fontSize: 14,
//     fontWeight: '400',
//     lineHeight: 18,
//     color: '#778599',
//     marginBottom: 5,
//   },
//   statsItemValue: {
//     fontSize: 16,
//     fontWeight: '600',
//     lineHeight: 20,
//     color: '#121a26',
//   },
//   /** Button */
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderWidth: 2,
//     backgroundColor: 'transparent',
//     borderColor: '#266EF1',
//   },
//   btnText: {
//     fontSize: 14,
//     lineHeight: 20,
//     fontWeight: '700',
//     color: '#266EF1',
//   },
//   btnPrimary: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderWidth: 2,
//     backgroundColor: '#266EF1',
//     borderColor: '#266EF1',
//   },
//   btnPrimaryText: {
//     fontSize: 14,
//     lineHeight: 20,
//     fontWeight: '700',
//     color: '#fff',
//   },
//   /** List */
//   list: {
//     marginTop: 16,
//   },
//   listHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 24,
//   },
//   listTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     lineHeight: 22,
//     color: '#121a26',
//   },
//   listAction: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 20,
//     color: '#778599',
//   },
//   listContent: {
//     paddingVertical: 12,
//     paddingHorizontal: 18,
//   },
//   /** Card */
//   card: {
//     width: CARD_WIDTH,
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     marginHorizontal: 6,
//     shadowColor: '#90a0ca',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 1,
//   },
//   cardTop: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cardIcon: {
//     width: 44,
//     height: 44,
//     borderRadius: 9999,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#eff1f5',
//   },
//   cardBody: {
//     paddingLeft: 12,
//   },
//   cardTitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     lineHeight: 18,
//     color: '#121a26',
//     marginBottom: 4,
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#778599',
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 18,
//   },
//   cardFooterText: {
//     fontSize: 13,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#778599',
//   },
// });

// // import React, { useState } from 'react';
// // import {
// //   StyleSheet,
// //   SafeAreaView,
// //   View,
// //   Image,
// //   Text,
// //   TouchableOpacity,
// //   TextInput,
// // } from 'react-native';
// // import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// // export default function Example() {
// //   const [form, setForm] = useState({
// //     email: '',
// //     password: '',
// //   });
// //   return (
// //     <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
// //       <View style={styles.container}>
// //         <KeyboardAwareScrollView>
// //           <View style={styles.header}>
// //             <Image
// //               alt="App Logo"
// //               resizeMode="contain"
// //               style={styles.headerImg}
// //               source={{
// //                 uri: 'https://assets.withfra.me/SignIn.2.png',
// //               }} />

// //             <Text style={styles.title}>
// //               Sign in to <Text style={{ color: '#075eec' }}>MyApp</Text>
// //             </Text>

// //             <Text style={styles.subtitle}>
// //               Get access to your portfolio and more
// //             </Text>
// //           </View>

// //           <View style={styles.form}>
// //             <View style={styles.input}>
// //               <Text style={styles.inputLabel}>Email address</Text>

// //               <TextInput
// //                 autoCapitalize="none"
// //                 autoCorrect={false}
// //                 clearButtonMode="while-editing"
// //                 keyboardType="email-address"
// //                 onChangeText={email => setForm({ ...form, email })}
// //                 placeholder="john@example.com"
// //                 placeholderTextColor="#6b7280"
// //                 style={styles.inputControl}
// //                 value={form.email} />
// //             </View>

// //             <View style={styles.input}>
// //               <Text style={styles.inputLabel}>Password</Text>

// //               <TextInput
// //                 autoCorrect={false}
// //                 clearButtonMode="while-editing"
// //                 onChangeText={password => setForm({ ...form, password })}
// //                 placeholder="********"
// //                 placeholderTextColor="#6b7280"
// //                 style={styles.inputControl}
// //                 secureTextEntry={true}
// //                 value={form.password} />
// //             </View>

// //             <View style={styles.formAction}>
// //               <TouchableOpacity
// //                 onPress={() => {
// //                   // handle onPress
// //                 }}>
// //                 <View style={styles.btn}>
// //                   <Text style={styles.btnText}>Sign in</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             </View>

// //             <Text style={styles.formLink}>Forgot password?</Text>
// //           </View>
// //         </KeyboardAwareScrollView>

// //         <TouchableOpacity
// //           onPress={() => {
// //             // handle link
// //           }}
// //           style={{ marginTop: 'auto' }}>
// //           <Text style={styles.formFooter}>
// //             Don't have an account?{' '}
// //             <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingVertical: 24,
// //     paddingHorizontal: 0,
// //     flexGrow: 1,
// //     flexShrink: 1,
// //     flexBasis: 0,
// //   },
// //   title: {
// //     fontSize: 31,
// //     fontWeight: '700',
// //     color: '#1D2A32',
// //     marginBottom: 6,
// //   },
// //   subtitle: {
// //     fontSize: 15,
// //     fontWeight: '500',
// //     color: '#929292',
// //   },
// //   /** Header */
// //   header: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginVertical: 36,
// //   },
// //   headerImg: {
// //     width: 80,
// //     height: 80,
// //     alignSelf: 'center',
// //     marginBottom: 36,
// //   },
// //   /** Form */
// //   form: {
// //     marginBottom: 24,
// //     paddingHorizontal: 24,
// //     flexGrow: 1,
// //     flexShrink: 1,
// //     flexBasis: 0,
// //   },
// //   formAction: {
// //     marginTop: 4,
// //     marginBottom: 16,
// //   },
// //   formLink: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#075eec',
// //     textAlign: 'center',
// //   },
// //   formFooter: {
// //     fontSize: 15,
// //     fontWeight: '600',
// //     color: '#222',
// //     textAlign: 'center',
// //     letterSpacing: 0.15,
// //   },
// //   /** Input */
// //   input: {
// //     marginBottom: 16,
// //   },
// //   inputLabel: {
// //     fontSize: 17,
// //     fontWeight: '600',
// //     color: '#222',
// //     marginBottom: 8,
// //   },
// //   inputControl: {
// //     height: 50,
// //     backgroundColor: '#fff',
// //     paddingHorizontal: 16,
// //     borderRadius: 12,
// //     fontSize: 15,
// //     fontWeight: '500',
// //     color: '#222',
// //     borderWidth: 1,
// //     borderColor: '#C9D3DB',
// //     borderStyle: 'solid',
// //   },
// //   /** Button */
// //   btn: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 30,
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderWidth: 1,
// //     backgroundColor: '#075eec',
// //     borderColor: '#075eec',
// //   },
// //   btnText: {
// //     fontSize: 18,
// //     lineHeight: 26,
// //     fontWeight: '600',
// //     color: '#fff',
// //   },
// // });

import { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAnimatedKeyboard } from "react-native-reanimated";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
import axios from 'axios'
import { useEffect } from "react";

// const produto = [
//   {id: 1, nome: "Coca-Cola", preco: 10.5, img: "\u{1F964}"},
//   {id: 2, nome: "Pepsi", preco: 9.5, img: "\u{1F964}"},
//   {id: 3, nome: "Fanta", preco: 8.5, img: "\u{1F964}"},
//   {id: 4, nome: "Dolly", preco: 6.5, img: "\u{1F964}"}
// ]

//const gradientColors = ['navy', 'blue', 'cyan'];

export default function Index() {

  let [contador, setContador] = useState(0);
  //let [fuga, setFuga] = useState(0);
  let [produtos,setProdutos]=useState([])

  useEffect(()=>{
      carregaProdutos()
  },[])

  function carregaProdutos(){
    axios.get('https://app-docker-2t8m.onrender.com/api/produtos').then((resp)=>{
    //    axios.get('https://app-api-tapwm.onrender.com/api/produtos').then((resp)=>{
        setProdutos(resp.data);
    })
  }

  return (
    <View
      //colors = {gradientColors}
      style = {styles.container}
      >

      <ListaProdutos produtos={produtos}></ListaProdutos>
    
      {/* {produto.map((p) => (
        // <View key = {p.id}>
        //   <Text style = {styles.text}>{p.nome + " \u{1F964}"}</Text>
        //   <Text style = {styles.textSmall}>{"R$ " + p.preco}</Text>
        // </View>
    //  ))} */}

      <TouchableOpacity style = {styles.buttonStyle}  onPress = {() => clicarBotao()}>
        <Text style = {styles.buttonText}>Quantidade de Clicks {contador}</Text>
      </TouchableOpacity>

      {/* title = {"Quantidade de Clicks " + contador.toString()} */}

    </View>
  );

  function clicarBotao() {
    setContador(contador++);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "grey"
  },
  // text: {
  //   color: "white",
  //   fontSize: 30,
  //   fontWeight: "bold"
  // },
  // textSmall: {
  //   color: "black",
  //   fontSize: 15,
  //   fontWeight: "bold",
  //   marginBottom: 5,
  //   textAlign: "center"
  // },
  buttonStyle: {
    marginBottom: 50,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});