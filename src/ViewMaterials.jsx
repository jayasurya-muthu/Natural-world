import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ViewMaterials() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return <p>No materials found. <button onClick={() => navigate('/Products')}>Go back</button></p>
  }

  const { name, material } = state

  return (
    <div className="materials-body">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{name} — Materials</h2>
      <div className="material-grid">
        {material.map((m, index) => (
          <div className="material-card" key={index}>
            {m.img
              ? <img src={m.img} alt={m.name} />
              : <div className="material-placeholder">{m.name[0]}</div>
            }
            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}