import React from "react";
import { ScrollView,StyleSheet,TouchableOpacity, View,Text,FlatList, Image } from "react-native";
import NewsFirst from "./categoryNews/NewsFirst";
import Header from "./categoryNews/Header";
import NewsSecond from "./categoryNews/NewsSecond";
import Icon from "react-native-vector-icons/AntDesign";
import { useNews } from "../context/NewsProvider";
import HorizontalCard from "./components/HorizontalCard";
import SmallCard from "./components/SmallCard";
import Title from "./components/Title";


const HomeScreen = ({navigation,}:any) => {
    const {news,setNews,getNews}:any = useNews();
    const feedNews = news.filter((item:any) => item.category ==="tin tuc 1")
    const feedNews2 = news.filter((item:any) => item.category ==="tin tuc 2")

    return (<><View style={styles.container}>

        <ScrollView>
            <Header/>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
                    <Title size={20}>Tin tức 1</Title>
                    <TouchableOpacity onPress={()=>navigation.navigate('ListCard',{cate:'tin tuc 1'})}>
                        <Text>xem thêm</Text>
                    </TouchableOpacity>
                </View>
            <FlatList
                data={feedNews} // Mảng dữ liệu chứa các mục trong danh sách
                keyExtractor={item => item.time} // Hàm để trích xuất khóa duy nhất từ mỗi mục
                horizontal // Hiển thị danh sách theo chiều ngang
                showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                renderItem={({item}) => // Hàm render cho mỗi mục trong danh sách
                <TouchableOpacity onPress={()=>navigation.navigate('Detail',{item})}>
                <HorizontalCard item={item} />
                </TouchableOpacity>
                }/>
            </View>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
                    <Title size={20}>Tin tức 2</Title>
                    <TouchableOpacity onPress={()=>navigation.navigate('ListCard',{cate:'tin tuc 2'})}>
                        <Text>xem thêm</Text>
                    </TouchableOpacity>
                </View>
                {/* <FlatList
                    data={feedNews2} 
                    renderItem={({item}) =>
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{item})}>
                        <SmallCard title='Tin tuc' item={item}/>
                    </TouchableOpacity>
                    }/> */}
                {feedNews2.map((item:any)=>
                <TouchableOpacity key={item.time} onPress={()=>navigation.navigate('Detail',{item})}>
                    <SmallCard title='Tin tuc' item={item}/>
                </TouchableOpacity>
                )}
            </View>
            
        </ScrollView>
        <TouchableOpacity style={styles.btn_add} onPress={()=>navigation.navigate('Add')}>
            <Icon  name="edit" size={30} color="#fff" />
        </TouchableOpacity>
        

    </View></>)
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        backgroundColor:'#f7f3f3',
        flex:1
    },
    btn_add:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "red",
        borderRadius:50,
        position:"absolute",
        right:30,
        bottom:30
    }
  })
  
export default HomeScreen;
