export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

export const postReservation = (newResy) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newResy)
  })
    .then(response => response.json())
}

export const deleteReservation = (id) => {
  return fetch('http://localhost:3001/api/v1/reservations/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}
