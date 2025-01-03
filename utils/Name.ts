
function getName(name: string){
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
        const username = requiredName.join(""); 
        return username as string;
        
      }

}

export default getName;

