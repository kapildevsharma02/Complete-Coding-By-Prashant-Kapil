let myName="Prashant";
let number=456;
export function Hello(){
  let fullName=()=>{
    return "Prashant Jain"
  }
  let name="Prashant"
  return <p>
    MessageNo: {number} I am your master {fullName()};
  </p>
}
