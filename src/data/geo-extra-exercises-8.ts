import type { CourseExercise } from "../../lib/course-content";

export const geoExtraExercises8: Record<string, CourseExercise[]> = {
  "estimacion-geometrica": [
    {
      id: 800,
      question: "¿Qué método se utiliza para estimar el área de una figura irregular contando cuántos cuadros de una cuadrícula cubren parcial o totalmente la figura?",
      options: ["Método de conteo de cuadros", "Método de promedio", "Método de integración", "Método de Monte Carlo"],
      correctIndex: 0,
      explanation: "El método de conteo de cuadros implica superponer una cuadrícula sobre la figura y contar los cuadros que están dentro de ella, approximando el área total.",
      difficulty: "basic"
    },
    {
      id: 801,
      question: "Al estimar el perímetro de una forma irregular, ¿qué estrategia visual es útil?",
      options: ["Comparar con formas regulares conocidas", "Medir solo un lado", "Ignorar las curvas", "Usar siempre una fórmula exacta"],
      correctIndex: 0,
      explanation: "Comparar la forma irregular con formas regulares conocidas (como círculos o rectángulos) ayuda a obtener una estimación razonable del perímetro.",
      difficulty: "basic"
    },
    {
      id: 802,
      question: "¿Qué es una aproximación por exceso en la estimación de un área?",
      options: ["Un valor ligeramente mayor que el valor real", "Un valor ligeramente menor que el valor real", "El valor exacto", "Un valor aleatorio"],
      correctIndex: 0,
      explanation: "Una aproximación por exceso es un valor que se sabe es mayor que el valor real, útil para establecer límites superiores.",
      difficulty: "basic"
    },
    {
      id: 803,
      question: "Para estimar el volumen de un objeto irregular, ¿qué enfoque básico se puede usar?",
      options: ["Sumerirlo en agua y medir el desplazamiento", "Contar sus vértices", "Medir solo su altura", "Usar una fórmula para cubos"],
      correctIndex: 0,
      explanation: "El método de desplazamiento de agua es una técnica práctica para estimar volúmenes de objetos irregulares, especialmente en contextos físicos.",
      difficulty: "basic"
    },
    {
      id: 804,
      question: "¿Qué representa un área de cota superior en una estimación?",
      options: ["Un valor máximo posible para el área", "Un valor mínimo posible para el área", "El área exacta", "Un área negativa"],
      correctIndex: 0,
      explanation: "Un área de cota superior es un valor que se sabe es mayor o igual al área real, proporcionando un límite máximo.",
      difficulty: "basic"
    },
    {
      id: 805,
      question: "Al estimar, ¿por qué es útil tener tanto una cota inferior como una superior?",
      options: ["Para definir un rango donde se encuentra el valor real", "Para obtener el valor exacto", "Para simplificar los cálculos", "Para evitar errores de redondeo"],
      correctIndex: 0,
      explanation: "Tener cotas inferior y superior permite establecer un rango donde el valor real debe estar, dando una idea de la precisión de la estimación.",
      difficulty: "basic"
    },
    {
      id: 806,
      question: "¿Qué es una estimación visual en geometría?",
      options: ["Un juicio basado en la apariencia sin mediciones exactas", "Un cálculo con fórmulas complejas", "Una medición con herramientas de precisión", "Un proceso que siempre da el valor exacto"],
      correctIndex: 0,
      explanation: "Una estimación visual es un juicio rápido basado en la observación, útil para obtener valores aproximados sin realizar mediciones detalladas.",
      difficulty: "basic"
    },
    {
      id: 807,
      question: "¿Cuál es una desventaja del método de conteo de cuadros para estimar áreas?",
      options: ["Puede ser lento para figuras grandes o complejas", "Siempre da el valor exacto", "Requiere equipamiento especializado", "Solo funciona para formas circulares"],
      correctIndex: 0,
      explanation: "El método de conteo de cuadros puede ser laborioso y consumir mucho tiempo, especialmente cuando se necesita alta precisión o la figura es muy irregular.",
      difficulty: "intermediate"
    },
    {
      id: 808,
      question: "Al dividir una figura irregular en formas regulares para estimar su área, ¿qué método se está utilizando?",
      options: ["Método de descomposición", "Método de integración", "Método de Monte Carlo", "Método de promediado"],
      correctIndex: 0,
      explanation: "El método de descomposición consiste en dividir la figura irregular en varias formas regulares cuyas áreas se pueden calcular fácilmente y luego sumarlas.",
      difficulty: "intermediate"
    },
    {
      id: 809,
      question: "¿Qué es el error absoluto en una estimación?",
      options: ["La diferencia entre el valor estimado y el valor real", "El valor estimado dividido por el valor real", "El porcentaje de error", "La precisión del instrumento"],
      correctIndex: 0,
      explanation: "El error absoluto es la magnitud de la diferencia entre el valor estimado y el valor verdadero, sin considerar el signo.",
      difficulty: "intermediate"
    },
    {
      id: 810,
      question: "Para mejorar la precisión de una estimación visual, ¿qué estrategia es efectiva?",
      options: ["Comparar con objetos de tamaño conocido", "Aumentar la velocidad de la estimación", "Usar solo una referencia", "Ignorar las proporciones"],
      correctIndex: 0,
      explanation: "Comparar con objetos de tamaño conocido proporciona una referencia que ayuda a ajustar la estimación y reducir el error.",
      difficulty: "intermediate"
    },
    {
      id: 811,
      question: "¿Qué es el error relativo en una estimación?",
      options: ["El error absoluto dividido por el valor real, expresado como porcentaje", "La diferencia entre dos estimaciones", "El valor exacto menos el estimado", "La precisión del método"],
      correctIndex: 0,
      explanation: "El error relativo indica qué tan grande es el error en relación con el valor real, generalmente expresado como porcentaje para facilitar la comparación.",
      difficulty: "intermediate"
    },
    {
      id: 812,
      question: "Al estimar el perímetro de una curva cerrada irregular, ¿qué método aproximado se puede usar?",
      options: ["Aproximar la curva con segmentos de recta", "Medir solo los puntos más alejados", "Usar una fórmula para círculos", "Ignorar las curvas pequeñas"],
      correctIndex: 0,
      explanation: "Aproximar la curva con segmentos de recta (poligonización) permite calcular la suma de las longitudes de estos segmentos como estimación del perímetro.",
      difficulty: "intermediate"
    },
    {
      id: 813,
      question: "¿Por qué las estimaciones pueden variar entre diferentes personas?",
      options: ["Debido a diferencias en percepción visual y experiencia", "Porque los valores reales cambian", "Porque las fórmulas son diferentes", "Porque el error siempre es cero"],
      correctIndex: 0,
      explanation: "Las estimaciones dependen de la percepción individual, la experiencia y las estrategias utilizadas, lo que puede llevar a variaciones entre diferentes observadores.",
      difficulty: "intermediate"
    },
    {
      id: 814,
      question: "¿Qué es una estimación por promedio en el contexto de áreas irregulares?",
      options: ["Promediar múltiples estimaciones individuales", "Usar un solo valor exacto", "Sumar todas las áreas parciales", "Multiplicar por un factor de corrección"],
      correctIndex: 0,
      explanation: "Promediar múltiples estimaciones independientes puede reducir el error aleatorio y dar un resultado más confiable que una sola estimación.",
      difficulty: "intermediate"
    },
    {
      id: 815,
      question: "Al estimar el volumen de un objeto usando el método de capas, ¿qué se asume típicamente?",
      options: ["Que el objeto puede dividirse en capas de espesor conocido", "Que el objeto es perfectamente esférico", "Que el volumen es constante", "Que la densidad es uniforme"],
      correctIndex: 0,
      explanation: "El método de capas asume que el objeto puede dividirse en secciones o capas cuyo volumen se puede calcular y sumar para obtener una estimación total.",
      difficulty: "advanced"
    },
    {
      id: 816,
      question: "¿Qué es el método de Monte Carlo para estimar áreas?",
      options: ["Generar puntos aleatorios y contar cuántos caen dentro de la figura", "Medir todos los puntos exactos", "Usar una cuadrícula fija", "Calcular integrales definidas"],
      correctIndex: 0,
      explanation: "El método de Monte Carlo utiliza números aleatorios para muestrear puntos dentro de un dominio conocido; la proporción que cae dentro de la figura da una estimación del área.",
      difficulty: "advanced"
    },
    {
      id: 817,
      question: "Al combinar estimaciones de diferentes métodos, ¿qué enfoque estadístico es útil para obtener un valor final más robusto?",
      options: ["Calcular la media ponderada basada en la precisión de cada método", "Usar solo la estimación más alta", "Sumar todas las estimaciones", "Ignorar las estimaciones con mayor error"],
      correctIndex: 0,
      explanation: "Una media ponderada asigna más peso a las estimaciones de mayor precisión, produciendo un resultado final que considera la confiabilidad de cada método.",
      difficulty: "advanced"
    }
  ]
};