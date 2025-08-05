import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to="home">首页</NavLink>
        <NavLink to="about">关于界面</NavLink>
        <NavLink to="new/10">新闻界面</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
