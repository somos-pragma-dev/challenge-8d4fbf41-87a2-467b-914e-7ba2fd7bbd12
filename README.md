# Desarrollo de una API REST para gestión de usuarios

La empresa necesita una API REST para gestionar usuarios en su plataforma financiera. La API debe permitir crear, leer, actualizar y eliminar usuarios, así como listar todos los usuarios. Los usuarios tienen atributos como nombre, email, fecha de nacimiento y rol. La API debe garantizar la unicidad del email y validar que la fecha de nacimiento no sea en el futuro. Además, debe manejar correctamente los errores y proporcionar respuestas adecuadas.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | API REST con NestJS, TypeORM y Swagger |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de usuario

**Objetivo:** Definir el modelo de usuario con sus atributos y validaciones necesarias.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar los atributos necesarios para un usuario (nombre, email, fecha de nacimiento, rol).
- Establecer las validaciones para el email (unicidad) y la fecha de nacimiento (no en el futuro).
- Decidir cómo manejar los errores de validación.

**Entregable:** Modelo de usuario definido con sus atributos y validaciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las restricciones de negocio para los atributos del usuario.
- Piensa en cómo garantizar la unicidad del email en la base de datos.

</details>

### Fase 2: Implementación de los endpoints CRUD

**Objetivo:** Implementar los endpoints para crear, leer, actualizar y eliminar usuarios.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Crear los endpoints para las operaciones CRUD (Create, Read, Update, Delete) sobre usuarios.
- Asegurar que los endpoints manejen correctamente las validaciones definidas en la fase anterior.
- Proporcionar respuestas adecuadas en caso de error.

**Entregable:** Endpoints CRUD implementados y funcionando correctamente.

<details>
<summary>Pistas de conocimiento</summary>

- Revisa las validaciones definidas en la fase anterior y asegúrate de que los endpoints las respeten.
- Considera cómo manejar los errores y proporcionar respuestas útiles al cliente.

</details>

### Fase 3: Documentación de la API con Swagger

**Objetivo:** Documentar la API utilizando Swagger para que sea fácil de entender y usar.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Utilizar Swagger para documentar los endpoints de la API.
- Asegurar que la documentación sea clara y completa, incluyendo ejemplos de solicitudes y respuestas.
- Validar que la documentación refleja correctamente el comportamiento de la API.

**Entregable:** Documentación de la API utilizando Swagger.

<details>
<summary>Pistas de conocimiento</summary>

- Revisa la documentación existente de Swagger y cómo se integra con NestJS.
- Piensa en cómo hacer que la documentación sea útil para los usuarios de la API.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un modelo de usuario y por qué es necesario?
- **paraQueSirve**: ¿Para qué sirven las validaciones en los atributos del usuario?
- **comoSeUsa**: ¿Cómo se utilizan los endpoints CRUD en la API?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones y cómo se manejan?

## Criterios de Evaluacion

- Definición correcta del modelo de usuario con sus atributos y validaciones.
- Implementación de los endpoints CRUD que respetan las validaciones y proporcionan respuestas adecuadas en caso de error.
- Documentación clara y completa de la API utilizando Swagger.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
