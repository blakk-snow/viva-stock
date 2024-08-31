import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View className="flex-1">
      <View className="flex-row">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            className={`
              flex-1 p-3 items-center justify-center ${activeTab === index ? 'border-b-2 border-b-fuchsia-500' : ''}
              `}
            onPress={() => setActiveTab(index)}
          >
            <View className="items-center">
              {tab.icon}
              <Text
                className={`
                   text-slate-900 mt-1 text-xs font-nunito-regular ${activeTab === index ? 'text-fuchsia-700 font-nunito-bold' : ''}
                  `}
              >
                {tab.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View className="flex-1">
        {tabs[activeTab].content}
      </View>
    </View>
  );
};



export default Tabs;






















// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// const Tabs = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);  

//   return (
//     <View className="flex-1">  
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false} 
//         contentContainerStyle={{ flexGrow: 1 }}
//       >
//         {tabs.map((tab, index) => (
//           <TouchableOpacity  
//             key={index}
//             className={`
//               flex-1 p-3 items-center justify-center ${activeTab === index ? 'border-b-2 border-b-blue-500' : ''}
//               `}
//             onPress={() => setActiveTab(index)}
//           >
//             <View className="items-center">
//               {tab.icon}
//               <Text
//                 className={`
//                    text-slate-900 mt-1 text-xs font-nunito-regular ${activeTab === index ? 'text-blue-700 font-nunito-bold' : ''}
//                   `}
//               >
//                 {tab.label}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <View className="flex-1">
//         {tabs[activeTab].content}
//       </View>
//     </View>
//   );
// };

// export default Tabs;













































//   <View
//   className={`
//     flex-1 
//     p-3 
//     items-center 
//     justify-center 
//     ${activeTab === index ? 'border-b-2 border-blue-500' : ''}
//   `}
// />





// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


// const Tabs = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);

  
//   return (
//     <View sclassName='flex-1'>
//       <View className='flex-row bg-slate-800'>
//         {tabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.tab,
//               activeTab === index && styles.activeTab,
//             ]}
//             onPress={() => setActiveTab(index)}
//           >
//             <Text
//               style={[
//                 styles.tabText,
//                 activeTab === index && styles.activeTabText,
//               ]}
//             >
//               {tab.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View className='p-4'>
//         {tabs[activeTab].content}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#f2f2f2',
//   },
//   tab: {
//     flex: 1,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#FCA5A5',
//     // borderTopWidth: 2,
//     // borderTopColor: '#000',
//   },
//   tabText: {
//     color: '#888',
//   },
//   activeTabText: {
//     color: '#FCA5A5',
//     fontWeight: 'bold',
//   },
//   contentContainer: {
// //    padding: 16,
//   },
// });

// export default Tabs;
