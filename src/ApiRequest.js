const ApiRequest = async (url='',optionsObj=null,errMsg=null)=>{
try{
    const responce = await fetch(url, optionsObj)
    if(!responce.ok) throw Error ('please reload the page')
}catch(err){
    errMsg = err.message
}finally{
    return errMsg
}
}

export default ApiRequest