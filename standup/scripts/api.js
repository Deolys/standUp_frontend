import { Notification } from "./notification";

const API_URL = 'https://noiseless-nice-swift.glitch.me/'; //Взять после создания проекта на Glitch

export const getComedians = async () => {
  try {
    const response = await fetch(`${API_URL}comedians`);
    if(!response) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Возниикла проблема с fetch-запросом: ${error.message}`);

    Notification.getInstance().show('Возникла ошибка сервера, попробуйте позже');
  }
  
};

export const sendData = async (method, data, id) => {
  try {
    const response = await fetch(`${API_URL}clients${id ? `/${id}` : ""}`,
    {
    method,
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(data),

    });
    if(!response) {
      throw new Error(`Сервер вернул ошибку: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Возниикла проблема с fetch-запросом: ${error.message}`);

    Notification.getInstance().show('Возникла ошибка сервера, попробуйте позже');
    return false;
  }
}