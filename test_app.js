function attempt(available, allowed, preferred){
  var isAllowed = [];
  var isPreferred = [];

  //filtering function
  function doFilter(arr){
    return arr.filter(x => x != undefined);
  }

  //checking if available element is allowed
  for (i in available) {
    if (allowed.includes(available[i])) {
      isAllowed[i] = available[i];
    }
  }

  //checking for 'any' in allowed
  for(i in allowed){
    if (allowed[i] === 'any') {
      isAllowed = available;
    }
  }

  isAllowed = doFilter(isAllowed);

  //checking if the available allowed elements are preferred
  for (i in isAllowed) {
    if (preferred.includes(isAllowed[i])) {
      isPreferred[i] = isAllowed[i];
    }
  }
  
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
attempt();
