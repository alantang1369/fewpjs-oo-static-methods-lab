class Formatter {
  //add static methods here
  static capitalize(string){
    return string.split(' ').map( elt => elt.charAt(0).toUpperCase() + elt.slice(1)).join(' ')
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]/g,'');
  }

  static titleize(string){
    const exludeWords = ['the','a','an','but','of','and','for','at','by','from'];
    return string.split(' ').map((elt,i)=>{
      if (i === 0 || !exludeWords.includes(elt) ){
        return elt.charAt(0).toUpperCase() + elt.slice(1) 
      }else {
        return elt
      }
    }).join(' ')
  }
}