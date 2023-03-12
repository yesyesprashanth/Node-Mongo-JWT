import constants from "../constants.js";
export default function handleError (err, req, res, next){
    const resStatus = res.status?res.status:500;

    switch(resStatus){
        case constants.VALIDAITON_ERROR:
                res.json({title:"Validation Error", err:err.message, stackTrace:err.stack});
            break;
        case constants.AUTHORISATION_ERROR:
                res.json({title:"Unathorised", err:err.message, stackTrace:err.stack});
            break;
        case constants.FORBIDDEN:
                res.json({title:"Page Forbidden", err:err.message, stackTrace:err.stack});
            break;
        case constants.NOT_FOUND:
                res.json({title:"Data Not found", err:err.message, stackTrace:err.stack});
            break;
        case constants.SERVER_ERROR:
                res.json({title:"Server Error", err:err.message, stackTrace:err.stack});
            break;
            default:
                console.log("All fine");              

    }
}