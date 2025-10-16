import { useEffect, useState } from 'react'
export default function Timeline() {
  const [list, setList] = useState([])
  useEffect(()=>{
    fetch('/api/list').then(r=>r.json()).then(setList)
  },[])
  return (
    <div style={{padding:20}}>
      <h2>时光轴</h2>
      {list.map(u=>(
        <div key={u} style={{marginBottom:20}}>
          {u.includes('video') ?
            <video src={u} controls style={{width:'100%'}} /> :
            <img src={u} style={{width:'100%'}} />
          }
        </div>
      ))}
    </div>
  )
}
