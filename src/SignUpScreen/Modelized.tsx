// import React, {useRef} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {Modalize} from 'react-native-modalize';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

// const App = () => {
//   const modalizeRef = useRef<Modalize>(null);

//   const onOpen = () => {
//     modalizeRef.current?.open();
//   };

//   return (
//     <GestureHandlerRootView style={{width:"50%",}}>
//       <TouchableOpacity onPress={onOpen}>
//         <Text style={{color: '#0EBE7F', marginVertical: 10}}>
//           Open the modal
//         </Text>
//       </TouchableOpacity>
//       <View>
//         <Modalize 
        
//           ref={modalizeRef}
//           snapPoint={100}
//           HeaderComponent={
//             <View>
//               <Text style={{color:'black'}}>Header</Text>
//             </View>
//           }>
//           <Text style={{color: 'black'}}>Forget Passwords</Text>
//         </Modalize>
//       </View>
//     </GestureHandlerRootView>
//   );
// };
// export default App;
