// wrapper to handle try/catch block
export default async function asyncHandler(func){
    return (req, res, next) => {
        Promise.resolve(func(req, res,next))
            .catch((err)=>{
                next(err)
            })
    }
}
