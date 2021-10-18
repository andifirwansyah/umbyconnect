import {apiGet, PROD_HOST} from 'constants';

export const getDefaultAvatar = () => {
  return apiGet(`${PROD_HOST}/v1/master/choose-avatar`);
};

export const getTopics = () => {
  return apiGet(`${PROD_HOST}/v1/master/topics`);
};

export const getFaculty = code => {
  let url = '';
  if (code) {
    url = `${PROD_HOST}/v1/master/faculty?code=${code}`;
  } else {
    url = `${PROD_HOST}/v1/master/faculty`;
  }
  return apiGet(url);
};

export const sendNotification = async data => {
  if (data.fcmToken !== undefined) {
    // eslint-disable-next-line prettier/prettier
    const SERVER_KEY = 'AAAAmcHmaWs:APA91bFuu5MQohefqIEE75-Z3L3xQ1yjKg0mMlSM2wzJ6TE698XfAk7prmukzqzkZM4AkLQWjQ8RxnCt2uQya4QPndlCZzUTi4Ggsmij-VN0XBfHFD7xPa3GFybL5b55P_qN3EScTIr4';
    const message = {
      to: data.fcmToken,
      notification: {
        title: data.title,
        body: data.body,
        vibrate: 1,
        sound: 1,
        show_in_foreground: true,
        priority: 'high',
        content_available: true,
      },
      data: {
        title: data.title,
        body: data.body,
        score: 50,
        wicket: 1,
      },
    };
    fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        Authorization: 'key=' + SERVER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then(response => response.json())
      .then(resp => {
        console.log('SUCCESS:', resp);
      })
      .catch(error => {
        console.error('ERROR:', error);
      });
  }
};
