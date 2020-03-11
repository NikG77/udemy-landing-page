'use strict';

(() => {
  var TIMEOUT_IN_MS = 10000;
  var StatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZEDS: 401,
    NOT_FOUND: 404,
    INTERNAL_STATUS_ERROR: 500
  };
  var xhr;

  // Подготавливает данные к загрузке или отправке и проверяет callback
  var prepareLoad = (onLoad, onError) => {
    xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      var error;
      switch (xhr.status) {
        case StatusCode.OK:
          onLoad(xhr.response);
          break;
        case StatusCode.BAD_REQUEST:
          error = xhr.status + ': Неверный запрос';
          break;
        case StatusCode.UNAUTHORIZEDS:
          error = xhr.status + ': Пользователь не авторизован';
          break;
        case StatusCode.NOT_FOUND:
          error = xhr.status + ': Страница с объявлениями не найдена. Пожалуйста, обновите страницу или попробуйте позднее';
          break;
        case StatusCode.INTERNAL_STATUS_ERROR:
          error = xhr.status + ': Неверный адрес для отправки';
          break;
        default:
          error = xhr.status + ': Произошла ошибка при попытке отправить данные';
      }

      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', () => {
      onError('Произошла ошибка соединения. Нет подключения к Интернету');
    });
    xhr.addEventListener('timeout', () => {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
  };

  window.backend = {
    // Выгрузка с сервера данных
    load: (url, onLoad, onError) => {
      prepareLoad(onLoad, onError);

      xhr.open('GET', url);
      xhr.send();
    },
    save: (url, data, onLoad, onError) => {
      prepareLoad(onLoad, onError);

      xhr.open('POST', url);
      xhr.send(data);
    },

  };
})();