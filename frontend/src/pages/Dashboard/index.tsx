import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Dashboard() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <Link to={{ pathname: `/veiculos` }}>
          <p>Veiculos</p>
        </Link>
      </Sidebar>
    </>
  )
}
