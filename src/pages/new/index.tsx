import { Outlet, useParams } from 'react-router'

export default function New() {
  const params = useParams()
  console.log('params', params)
  return (
    <>
      <div style={{ whiteSpace: 'pre' }}>这是新闻界面 {JSON.stringify(params)}</div>
      <Outlet />
    </>
  )
}
