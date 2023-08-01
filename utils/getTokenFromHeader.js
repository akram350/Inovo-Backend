export const  getTokenFromHeader =( req ) => {

    const Token = req?.headers?.authorization?.split(" ")[1]
    if( Token === undefined){
       return " no token Found "
    
}
else {
    return Token ; 
}
}