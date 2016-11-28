module.exports={
    dataTypes: function(arg){ 
        /*A function that takes an argument,compares and returns results basedon the argument supplied to the function */

        if ( typeof (arg) === 'string'){
            return arg.length;}
        if (arg === null){
             return 'no value';
         }
         if (arg === undefined){
            return 'no value';
         }
            
        if ( typeof(arg) === 'boolean'){
            return arg;}

        if ( typeof(arg) === 'number'){
            if ( arg < 100 ){
                return "less than 100";}
            else if ( arg > 100 ){
                return "more than 100";}
            else
                return "equal to 100";}

        if ( Array.isArray(arg)){
        
                return arg[2];
              
        }

        if ( typeof(arg) === 'function'){
            var callback = function(data, callback){
                callback.call(true);
            }
            return 'called callback';
        }
    }
}
