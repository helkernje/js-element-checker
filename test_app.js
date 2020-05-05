function attempt(available, allowed, preferred){
  var isAllowed = [];
  var isPreferred = [];

  //filtering function
  function doFilter(arr){
    return arr.filter(x => x != undefined);
  }

  function checker(original, checking){
    var final = [];
    for(i in original){
      if (checking.includes(original[i])) {
        final[i] = original[i];
      }
    }
    return final;
  }

  isAllowed = checker(available, allowed);
  //checking for 'any' in allowed
  for(i in allowed){
    if (allowed[i] === 'any') {
      isAllowed = available;
    }
  }

  isAllowed = doFilter(isAllowed);

  isPreferred = checker(isAllowed, preferred);
  //checking for any in preferred
  for(i in preferred){
    if (preferred[i] === 'any') {
      isPreferred = isAllowed;
    }
  }

  //getting the biggest element from isAllowed if none of them are in preferred
  if(isPreferred.length == 0 && isAllowed.length != 0){
    if (Math.max(...isAllowed) > Math.max(...preferred)) {
      isPreferred[0] = Math.max(...isAllowed);
    }
    else{
      isPreferred[0] = Math.min(...isAllowed);
    }
  }

  isPreferred = doFilter(isPreferred);

  //logging the output(to be changed to a simple return)
  console.log(isPreferred);
}
//pass 3 arrays to the func
attempt([240, 360, 720], [360, 'any'], [360, 720]);
