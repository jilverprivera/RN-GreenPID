import {stylesPDF} from '../styles/stylesPDF';

export const templatePDF = (data, title, units) => {
  return `
    <html>
      <head>
        <meta charset="utf-8">
        <title>Datos de temperatura</title>
        <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
        <style>
        ${stylesPDF}
        </style>
      </head>
      <body>

        <header>
          <h1>Datos de ${title}</h1>
        </header>

        <table class="meta">
          <tr>
            <th>
              <span>Fecha de generación</span>
            </th>
            <td>
              <span>${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}</span>
            </td>
          </tr>
        </table>

        <table class="inventory">
          <thead>
            <tr>
              <th>
                <span>Número de muestra</span>
              </th>
              <th>
                <span>Hora</span>
              </th>
              <th>
                <span>Valor ${title}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${data.map(item => {
              const date = new Date(item.time);
              const hourTime = date.toLocaleTimeString('es-EN');
              const dateTime = date.toLocaleDateString('es-ES');
              return `<tr>
                        <td>
                          <span>${item.xAxis}</span>
                        </td>
                        <td>
                          <span>${hourTime} - ${dateTime}</span>
                        </td>
                        <td>
                          <span>${item.yAxis} ${units}</span>
                        </td>
                      </tr>`;
            })}          
          </tbody>
        </table>
      </body>
    </html>
  `;
};
