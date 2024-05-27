const ButtonComponent = (backgroundcolor, Text) => {
    return (
        <View style={{
            backgroundColor: backgroundcolor,
            width:150,
            height:70,
            borderRadius: 10,
            marginLeft: 10,
        }}>
        <Text style = {{
            color: 'white',
            TextAlign: 'center',
            lineHeight : 70,
            fontsize: 25,
            fontWeight: 'bold',
        }}>

    {text}
 
 </Text>
 </View> 
    )
}
   
