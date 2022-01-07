export const validarEmail = (text) => {
    let car = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (car.test(text) === false){
        return false;
    } else {
        return true;
    }


}