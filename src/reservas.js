// src/reservas.js
const reservas = [];

function estaDisponible(nombreSala, fecha) {
  return !reservas.some(r => r.nombreSala === nombreSala && r.fecha === fecha);
}

function reservarSala(nombreSala, fecha) {
  if (!estaDisponible(nombreSala, fecha)) {
    return { exito: false, mensaje: 'Sala no disponible' };
  }
  reservas.push({ nombreSala, fecha });
  return { exito: true, mensaje: 'Reserva confirmada' };
}

module.exports = { reservarSala, estaDisponible };
