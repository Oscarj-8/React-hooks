import { useState } from "react"

function Object() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    
  return (
    <div>
        <h1 className="obj">Object</h1>
        <div className="inpts">
             <input type='text' value={name.firstName} onChange={e => setName({...name ,firstName: e.target.value})} />
             <input type='text' value={name.lastName} onChange={e => setName({...name ,lastName: e.target.value})} />
        </div>
       
       <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default Object