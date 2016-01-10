if ( ! String.prototype.regplace ) {

    String.prototype.regplace = function(pattern){

        var src = this.split('').join('');

        return function(replace){

            return function(flags){

                var regExp = new RegExp(pattern, flags);
                return src.replace(regExp, replace);

            }

        }

    }

}
