// 先临时返回假地址，部署完再换真 R2
export default async function handler(req, res) {
  res.json({ url: 'https://placekitten.com/400/300' })
}
