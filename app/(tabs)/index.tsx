import { Text, View, StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'
import { useState, useRef } from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import { type ImageSource } from "expo-image";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library'
import { captureRef } from "react-native-view-shot";
import domtoimage from 'dom-to-image';

const placeHolder = require("@/assets/images/background-image.png")

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource |undefined>(undefined)
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const imageRef = useRef<View>(null)

  if(status === null){
    requestPermission()
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      quality:1
    })
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert("You didn't pick anyf image")
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }
  const onAddSticker = () => {
    setIsModalVisible(true)
  }
  const onClose = () => {
    setIsModalVisible(false)
  }
  const onSaveImage = async () => {
    if(Platform.OS !== 'web'){
      try{
        const localUrl = await captureRef(imageRef, {
          quality:1,
          height:440
        })
        await MediaLibrary.saveToLibraryAsync(localUrl);
        if(localUrl){
          alert("Already saved!")
        }
      }catch (e) {
        console.log(e)
      }
    }else{
      try{
        const dataUrl = await domtoimage.toJpeg(imageRef.current,{
          width: 320,
          height: 440,
          quality: 1
        })
        let link = document.createElement("a");
        link.download = "Shuzuka.jpeg";
        link.href = dataUrl;
        link.click()
      } catch(e){
        console.log(e)
      }
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imageSource={placeHolder} selectedImage={selectedImage}/>
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
        </View>
      </View>
      {showAppOptions? 
      (<View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton onPress={onReset} label="reset" icon="refresh"/>
          <CircleButton onPress={onAddSticker}/>
          <IconButton onPress={onSaveImage} label="save" icon="save-alt"/>
        </View>
      </View>):(
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Chosse a photo!" onpress={pickImage}/>
        <Button label="Use this photo!" onpress={() => setShowAppOptions(true)}/>
      </View>
    )}
    <EmojiPicker onClose={onClose} isVisible={isModalVisible}>
      <EmojiList onSelect={setPickedEmoji} onCloseModal={onClose}/>
    </EmojiPicker>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",

  },
  imageContainer:{
    flex:1,
    paddingTop:28
  },
  footerContainer: {
    flex: 1/3,
    alignItems:"center"
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80
  },
  optionsRow: {
    alignItems: "center",
    flexDirection:"row"
  }
})