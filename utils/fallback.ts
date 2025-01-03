
function getFallBack(name: string){
    if (name) {
        let namearr = Array.from(name);
        let requiredName: string[] = [];
        for (let i = 0; i < namearr.length; i++) {
          if (namearr[i] !== "@") {
            requiredName.push(namearr[i]);
          } else {
            break; 
          }
        }
        const fallback = requiredName[0] + requiredName[requiredName.length - 1];
        return fallback as string;
        
      }

}

export default getFallBack;

