# Plantilla de Google Sheets — Agenda Local

## Propósito y acceso

La hoja registra las solicitudes de reserva para que el negocio pueda gestionarlas y contactar a cada persona por WhatsApp. Para las pruebas, créala en una cuenta de Google de prueba y mantenla privada. En producción, la hoja vivirá en la cuenta del cliente. No compartas la hoja públicamente.

Apps Script publicará una web app con `doPost` para recibir los registros. El token de acceso será propiedad del script y se guardará en sus propiedades; la hoja permanecerá privada.

## Pestaña y columnas

Crea una pestaña llamada `Leads`. La fila 1 debe contener estos encabezados, exactamente en este orden:

```text
Fecha	Nombre	Teléfono	Servicio	Fecha/hora preferida	Nota	Estado	Origen	Escribir
```

| Columna | Contenido y formato |
|---|---|
| Fecha | Fecha y hora en que se registró el lead, en la zona `America/Bogota`. La escribe Apps Script. |
| Nombre | Nombre de la persona. |
| Teléfono | Guardar como texto: exactamente 10 dígitos y empieza por `3`. |
| Servicio | Servicio solicitado. |
| Fecha/hora preferida | Preferencia indicada por la persona; conservar como texto. |
| Nota | Nota opcional de la solicitud. |
| Estado | Solo `nuevo`, `contactado`, `confirmado` o `cancelado`. Valor inicial: `nuevo`. |
| Origen | `web`, `maps` o `instagram`; valor inicial: `web`. |
| Escribir | Enlace de WhatsApp para contactar al lead, con un mensaje precargado. |

### Enlace de WhatsApp en `Escribir`

Apps Script, mediante `writeWhatsAppLink_`, crea en cada fila un texto enriquecido `Escribir` enlazado a WhatsApp. Comprueba que haya nombre y servicio y que el teléfono, tras limpiar caracteres no numéricos, tenga 10 dígitos y empiece por `3`. El mensaje precargado es: `Hola [nombre], recibimos tu solicitud para [servicio]. ¿Te gustaría confirmar?`.

## Preparación manual

1. Crea una hoja de cálculo de Google en la cuenta de prueba y mantén su acceso privado.
2. Renombra la pestaña inicial como `Leads`.
3. Pega los nueve encabezados anteriores en la fila 1, desde `A1`.
4. Congela la fila 1.
5. Configura la columna `Teléfono` como texto sin formato.
6. En la columna `Estado`, crea una lista desplegable con `nuevo`, `contactado`, `confirmado` y `cancelado`; el valor inicial de cada lead será `nuevo`.
7. En el proyecto de Apps Script ligado a esta hoja, añade en **Configuración del proyecto → Propiedades de secuencia de comandos** las propiedades `APPS_SCRIPT_TOKEN` y `SPREADSHEET_ID`. El valor de `SPREADSHEET_ID` se extrae manualmente de la URL de la hoja; no uses la URL completa. No pongas ese ID en `.env` ni lo envíes al navegador.
8. Guarda el script. En el editor, selecciona `repararEnlaces` en **Run** y ejecútala para actualizar las filas existentes. Autoriza el acceso a la hoja si se solicita. Esta reparación usa el código guardado y no requiere un deployment.
9. Luego despliega una nueva versión como aplicación web para que los leads nuevos usen el cambio: ejecutar como "yo" y acceso "cualquiera". Usa el endpoint `/exec` para la URL configurada en el servidor.
10. Comprueba que una celda `Escribir` abra WhatsApp con el mensaje precargado.

## Uso y protección de datos

Apps Script agregará cada lead dentro de `LockService` para evitar colisiones entre escrituras simultáneas. No añadas columnas ni edites las columnas que completa o actualiza el script. La columna `Estado` es la destinada a actualizar el avance del contacto. El script neutralizará valores que puedan interpretarse como fórmulas antes de escribirlos en la hoja. El enlace enriquecido de `Escribir` se genera al registrar o reparar una fila; si editas manualmente el nombre, teléfono o servicio después, guarda el script y vuelve a ejecutar `repararEnlaces` desde el menú **Run**.
