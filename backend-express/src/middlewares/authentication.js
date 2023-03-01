export const authentication = async function (request, response, next) {
    try {
        
        next();
    } catch (error) {
        response.status(404).json({
            message: error,
        });
    }
};
