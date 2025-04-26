// __tests__/reservas.test.js
const { reservarSala, estaDisponible } = require('../src/reservas');

describe('Reserva de sala', () => {
  test('Permite reservar una sala disponible', () => {
    const resultado = reservarSala('Sala A', '2025-04-25');
    expect(resultado.exito).toBe(true);
  });

  test('Rechaza reservar una sala ocupada en la misma fecha', () => {
    reservarSala('Sala B', '2025-04-25');
    const resultado = reservarSala('Sala B', '2025-04-25');
    expect(resultado.exito).toBe(false);
  });

  test('Verifica disponibilidad de sala', () => {
    const disponible = estaDisponible('Sala C', '2025-04-26');
    expect(disponible).toBe(true);
  });
});
