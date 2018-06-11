import RequestProvider from "../utils/request-provider";

export default class ContryActions {
  static setContries(contries) {
    return ({
      type: 'SET_CONTRIES',
      payload: contries,
    });
  }

  static getContries() {
    return (dispatch) => {
      RequestProvider.fetch('http://demo1288519.mockable.io/contries')
        .then((response) => {
          dispatch(ContryActions.setContries(response.data.RestResponse.result));
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }
}