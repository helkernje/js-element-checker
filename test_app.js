function attempt(available, allowed, preferred){
  var isAllowed = [];
  var isPreferred = [];

  function doFilter(arr){
    return arr.filter(Boolean);
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

  function anyChecker(original, checking){
    for(i in original){
      if (original[i] === 'any') {
        return checking;
      }
    }
  }

  isAllowed = anyChecker(allowed, available);
  isAllowed = checker(available, allowed);
  isAllowed = doFilter(isAllowed);

  isPreferred = anyChecker(preferred, isAllowed);
  isPreferred = checker(isAllowed, preferred);
  isPreferred = doFilter(isPreferred);

  //getting the biggest element from isAllowed if none of them are in preferred
  if(isPreferred.length == 0 && isAllowed.length != 0){
    if (Math.max(...isAllowed) > Math.max(...preferred)) {
      isPreferred[0] = Math.max(...isAllowed);
    }
    else{
      isPreferred[0] = Math.min(...isAllowed);
    }
  }
  //logging the output(to be changed to a simple return)
  console.log(isPreferred);
}
//pass 3 arrays to the func
attempt();
