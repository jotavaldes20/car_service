export const ApiConfigConstants = {
    apiUrl: 'http://localhost:4000'
}
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url='https://f03956cd7e60.ngrok.io/car_service/api_rest/'
export const iniciar_sesion=()=>`${ cors_anywhere }${ base_url }iniciar_sesion/`
//export const iniciar_sesion=()=>`${ base_url }iniciar_sesion/`