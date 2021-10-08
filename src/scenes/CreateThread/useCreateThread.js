/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getTopics, createThread} from 'utils';
import {useDispatch, useSelector} from 'react-redux';
import {updateLocalThreads, setLocalThreads} from 'actions';

const useCreateThread = (route, navigation) => {
  const localThreads = useSelector(state => state.threads.data);
  const [imagePicker, setImagePicker] = useState(false);
  const [images, setImages] = useState([]);
  const [link, setLink] = useState('');
  const [linkView, setLinkView] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState({
    data: [],
    modal: true,
    selected: 0,
    chosen: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      handleGetTopics();
    })();
  }, []);

  const handleGetTopics = async () => {
    const response = await getTopics();
    if (response.request.status === 200) {
      setTopics({
        ...topics,
        data: response.data,
        selected: response.data[0].id,
      });
    }
  };

  const handleCreateThread = async () => {
    const {newThread} = route.params;
    setLoading(true);
    const formData = new FormData();
    formData.append('topic_id', topics.selected);
    formData.append('title', title);
    formData.append('body', body);
    formData.append('link', link);
    if (images?.uri) {
      let file = {
        uri: images.uri,
        type: images.type,
        name: images.name,
      };
      formData.append('image', file);
    }
    const response = await createThread(formData);
    if (response.request.status === 201) {
      // TODO
      // Append data response to local storage/redux
      // dispatch(updateLocalThreads(response.data));
      // navigation.popTopPop();
      // const currentLocalThreads = localThreads;
      // localThreads.push(response.data);
      // dispatch(setLocalThreads(localThreads));
      // setTimeout(() => {
      //   setLoading(false);
      //   navigation.goBack();
      // }, 1000);
      newThread(response.data);
      navigation.goBack();
    } else {
      alert('Opps, Something went wrong, Please try again!');
      setLoading(false);
    }
  };

  return {
    imagePicker,
    setImagePicker,
    images,
    setImages,
    link,
    setLink,
    linkView,
    setLinkView,
    setTopics,
    topics,
    title,
    setTitle,
    body,
    setBody,
    handleCreateThread,
    loading,
  };
};

export default useCreateThread;
