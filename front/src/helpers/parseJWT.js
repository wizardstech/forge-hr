const parseJWT = () => {
  if(typeof localStorage.storage === null){
    return null;
  }else{
    return JSON.parse(localStorage.storage).auth.token
  }
}

export default parseJWT;
