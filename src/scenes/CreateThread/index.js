/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import {Container, Icon, ImagePicker} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import Modal from 'react-native-modal';
import useCreateThread from './useCreateThread';

const CreateThread = ({route, navigation}) => {
  const {
    imagePicker,
    setImagePicker,
    images,
    setImages,
    link,
    setLink,
    linkView,
    setLinkView,
    topics,
    setTopics,
    title,
    setTitle,
    body,
    setBody,
    handleCreateThread,
    loading,
  } = useCreateThread(route, navigation);

  const handleVerifyLink = () => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    const verify = !!pattern.test(link);
    if (verify) {
      setLinkView(false);
    } else {
      setLink('');
    }
  };

  React.useEffect(() => {
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }, []);

  const topicSelected = topics.data.find(val => val.id === topics.selected);
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <HeaderForAndroid
        onPress={() => navigation.goBack()}
        onPost={() => handleCreateThread()}
        loading={loading}
        enablePost={title === '' ? true : false}
      />
      <ScrollView
        contentContainerStyle={{flex: 1}}
        keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <TextInput
            autoFocus={true}
            style={styles.titleInput}
            placeholder="Judul Thread"
            onChangeText={val => setTitle(val)}
            value={title}
          />
          {Object.keys(images).length > 0 && (
            <View style={styles.imageSection}>
              <View style={styles.imagePostItem}>
                <Image
                  source={{
                    uri: images.uri,
                  }}
                  style={styles.imagePost}
                />
                <TouchableOpacity
                  style={styles.imageButtonClose}
                  onPress={() => setImages([])}>
                  <Icon
                    name="close"
                    type="AntDesign"
                    style={styles.imageButtonCloseIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {!linkView && link !== '' && (
            <Text style={styles.linkHref}>
              [ <Text style={{color: 'blue'}}>{link}</Text> ]
            </Text>
          )}
          <TextInput
            autoFocus={true}
            style={styles.bodyInput}
            placeholder="Tulis isi thread disini"
            returnKeyType="none"
            multiline={true}
            onChangeText={val => setBody(val)}
            value={body}
          />
        </View>
        {linkView ? (
          <View style={styles.linkSection}>
            <TouchableOpacity
              style={styles.linkButtonCancel}
              onPress={() => setLinkView(false)}>
              <Icon
                name="close"
                type="AntDesign"
                style={styles.linkButtonCancelTitle}
              />
            </TouchableOpacity>
            <View style={styles.linkInputSection}>
              <TextInput
                style={styles.linkInput}
                keyboardType="url"
                onChangeText={val => setLink(val)}
                value={link}
                placeholder="Masukkan tautan Anda di sini"
              />
            </View>
            <TouchableOpacity
              style={styles.linkButtonSave}
              onPress={() => handleVerifyLink()}>
              <Text style={styles.linkButtonSaveTitle}>Simpan</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.optionSection}>
            <TouchableOpacity
              style={styles.optionBubbleSection}
              onPress={() => setLinkView(true)}>
              <Icon name="link" type="Feather" style={styles.optionIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionBubbleSection}
              onPress={() => setImagePicker(true)}>
              <Icon name="image" type="Feather" style={styles.optionIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionBubbleSection}
              onPress={() => setTopics({...topics, modal: true})}>
              <Icon name="tag" type="MaterialIcons" style={styles.optionIcon} />
            </TouchableOpacity>
            {topics.chosen && (
              <View style={styles.optionTopicSelected}>
                <Image
                  source={{uri: topicSelected.icon}}
                  style={styles.optionTopicSelectedIcon}
                />
                <Text numberOfLines={1} style={styles.optionTopicSelectedLable}>
                  {topicSelected.name}
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
      <ImagePicker
        visible={imagePicker}
        response={val => setImages(val)}
        onSelect={() => setImagePicker(false)}
        onClose={() => setImagePicker(false)}
      />
      <Modal
        isVisible={topics.modal}
        backdropTransitionInTiming={50}
        backdropTransitionOutTiming={50}
        animationIn="slideInUp"
        animationInTiming={300}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        onSwipeThreshold={100}
        style={styles.modalContainer}>
        <View style={styles.modalSection}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mau Bahas Tentang Apa?</Text>
            <FlatList
              data={topics.data}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.tpItemSection}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={styles.tpItem(topics.selected === item.id)}
                  onPress={() => setTopics({...topics, selected: item.id})}>
                  <Image source={{uri: item.icon}} style={styles.tpIcon} />
                  <View style={styles.tpInfoSection}>
                    <Text style={styles.tpTitle}>{item.name}</Text>
                    <Text numberOfLines={2} style={styles.tpSubTitle}>
                      {item.description}
                    </Text>
                  </View>
                  <View
                    style={styles.checlistButton(topics.selected === item.id)}>
                    <Icon
                      name="check"
                      type="Feather"
                      style={styles.checlistButtonIcon}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeModalButton(false)}
              onPress={() =>
                setTopics({...topics, modal: false, chosen: true})
              }>
              <Text style={styles.closeModalButtonTitle(false)}>
                Pilih Topik
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeModalButton(true)}
              onPress={() => setTopics({...topics, modal: false})}>
              <Text style={styles.closeModalButtonTitle(true)}>Tutup dulu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
};
export default CreateThread;

const HeaderForAndroid = props => {
  return (
    Platform.OS === 'android' && (
      <View style={styles.hdFAndroid}>
        <View style={styles.hdFAndroidSection}>
          <View style={styles.hdFAndroidLeft}>
            <TouchableOpacity
              style={styles.hdFBubleRounded}
              onPress={props.onPress}>
              <Icon
                name="arrow-left"
                type="Feather"
                style={styles.hdFBubbleIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.hdFAndroidRight}>
            <TouchableOpacity
              style={styles.hdFAndroidWrap}
              onPress={props.onPost}
              disabled={props.enablePost}>
              {props.loading ? (
                <ActivityIndicator size="small" color={Colors.PRIMARY_DARK} />
              ) : (
                <Text style={styles.hdFAndroidPost(props.enablePost)}>
                  POST
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};
