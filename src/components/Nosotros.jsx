import React from 'react';

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="url_de_la_imagen_de_encabezado.jpg" alt="Imagen de encabezado" className="w-full" />
      <div className="flex justify-center w-full py-4 gap-4">
        <div className="block">
          <h2 className="text-xl font-bold">Bloque 1</h2>
          <p>Subtítulo del bloque 1...</p>
          <textarea rows="4" cols="50"></textarea>
        </div>
        <div className="block">
          <h2 className="text-xl font-bold">Bloque 2</h2>
          <p>Subtítulo del bloque 2...</p>
          <textarea rows="4" cols="50"></textarea>
        </div>
        <div className="block">
          <h2 className="text-xl font-bold">Bloque 3</h2>
          <p>Subtítulo del bloque 3...</p>
          <textarea rows="4" cols="50"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
