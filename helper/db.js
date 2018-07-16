const mongoose=require('mongoose');
module.exports=function (){
    mongoose.connect('mongodb://192.168.100.154:27017/movie-api',{useNewUrlParser: true});
    mongoose.connection.on('open',function(){
        console.log('Bağlandı.');
    });
    mongoose.connection.on('error',function(){
        console.log('Hata oluştu.');
    });
};