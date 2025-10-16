// 上传页
import { useState } from 'react'
export default function Home() {
  const [src, setSrc] = useState('')
  const up = async (e) => {
    const f = e.target.files[0]; if(!f)return
    const res = await fetch('/api/upload',{
      method:'POST',
      body: f
    }).then(r=>r.json())
    setSrc(res.url)
  }
  return (
    <div style={{padding:40,textAlign:'center'}}>
      <h2>手机传图/视频</h2>
      <input type="file" accept="image/*,video/*" onChange={up} />
      {src && <p>✅ 上传成功<br/><a href={src} target="_blank" rel="noreferrer">查看文件</a></p>}
    </div>
  )
      }
