import React from 'react'

function ClientesTable({clientes = []}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">e-Mail</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
    <tbody>
      {clientes.map(cliente=>
        <tr key={cliente.id}>
        <th scope="row">{cliente.id}</th>
        <td>{cliente.name}</td>
        <td>{cliente.lastName}</td>
        <td>{cliente.email}</td>
        <td>{cliente.phone}</td>
      </tr>
      ) 
      }
    </tbody>
  </table>
  )
}

export default ClientesTable