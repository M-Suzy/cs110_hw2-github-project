  debugger;
  const spaces = function(space) {
		if (space === 0) {
			return "";
		}
		return " " + spaces(space-1);
  };
	const stars = function(n){
	  if (n===0) {
	 return '';
	}
	
    return stars(n-1) + '*';
	};
	
	const union = function (countSpace, countStars, count){
		if (count === 0){
			return "";
		}
	 console.log(spaces(countSpace) + stars(countStars));
	 union (countSpace-1, countStars+2, count-1);
	};
     const triangleStars = function(p) {
		 union (p-1, 1, p)
	 }
	 triangleStars(5);
	
	