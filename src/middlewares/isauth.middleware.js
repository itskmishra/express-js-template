

// a simple middleware to handle validate user requets
const isAuthenticated = async(req, res, next) => {
    try{
        // handle auth logic
        next();
    }catch(err){
        // throw error
    }
}

export default isAuthenticated;
