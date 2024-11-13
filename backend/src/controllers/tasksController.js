const getAll = (request, response) => {
    
   return response.status(200).json({message: "controler está funcionando"});
};

module.exports = {
    getAll
};