/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let c=0
  for(i=1;i<=preferences.length;i++)
    {f=preferences[i-1]
	 if ((f<=preferences.length)&&(f!=i)){ 
	    s=preferences[f-1]	 
	   if((s<=preferences.length)&&(s!=f)){ 
		   t=preferences[s-1]	 
	if (t==i) c++}}}		
    return c/3
};
