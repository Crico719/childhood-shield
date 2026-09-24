export const rmStudyGuides2: Record<string, string> = {
  "teoria-de-conjuntos": `## Teoría de Conjuntos

### Conceptos Fundamentales

Un **conjunto** es una colección bien definida de objetos llamados elementos. Se denota con letras mayúsculas: A, B, C.

**Pertenencia:** x ∈ A o x ∉ A.

**Conjunto vacío:** ∅ no contiene elementos.

**Conjunto universo:** U contiene todos los elementos.

### Relaciones entre Conjuntos

- **Igualdad:** A = B si tienen los mismos elementos.
- **Subconjunto:** A ⊆ B si todo elemento de A está en B.
- **Subconjunto propio:** A ⊂ B si A ⊆ B y A ≠ B.
- **Conjunto potencia:** P(A). Si |A| = n, |P(A)| = 2^n.

### Operaciones con Conjuntos

**Unión:** A ∪ B = {x : x ∈ A o x ∈ B}

**Intersección:** A ∩ B = {x : x ∈ A y x ∈ B}

**Diferencia:** A \ B = {x : x ∈ A y x ∉ B}

**Complemento:** Aᶜ = {x ∈ U : x ∉ A}

**Diferencia simétrica:** A △ B = (A \ B) ∪ (B \ A)

### Fórmula de Conteo

### |A ∪ B| = |A| + |B| − |A ∩ B|

Para tres conjuntos: |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|.

### Ejemplo Resuelto

De 100 estudiantes: 60 inglés, 45 francés, 25 ambos.

**Solo inglés:** 35. **Solo francés:** 20. **Al menos uno:** 80. **Ninguno:** 20.

### Propiedades

- **Conmutativa:** A ∪ B = B ∪ A, A ∩ B = B ∩ A
- **Asociativa:** (A ∪ B) ∪ C = A ∪ (B ∪ C)
- **Distributiva:** A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
- **De Morgan:** (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ, (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ
- **Absorción:** A ∪ (A ∩ B) = A, A ∩ (A ∪ B) = A`,
  "diagramas-de-venn": `## Diagramas de Venn

### Definición

Un **diagrama de Venn** es una representación gráfica de conjuntos mediante regiones cerradas dentro de un rectángulo (universo).

### Dos Conjuntos: 4 regiones

1. Solo A (A \ B)
2. A ∩ B
3. Solo B (B \ A)
4. Fuera de ambos (A ∪ B)ᶜ

**Regla:** Se comienza por la intersección.

### Tres Conjuntos: 8 regiones

1. Solo A, 2. Solo B, 3. Solo C, 4. A∩B\C, 5. A∩C\B, 6. B∩C\A, 7. A∩B∩C, 8. Fuera.

Se empieza por A ∩ B ∩ C, luego intersecciones de a pares, y finalmente regiones de un solo conjunto.

### Ejemplo con Dos Conjuntos

De 50 personas: 30 café, 25 té, 10 ambos.

A∩B = 10. Solo café = 20. Solo té = 15. Ninguno = 5.

### Ejemplo con Tres Conjuntos

De 80 estudiantes: 40 fútbol (F), 30 baloncesto (B), 25 tenis (T), 15 F∩B, 10 F∩T, 8 B∩T, 5 los tres.

F∩B∩T = 5. Solo F∩B = 10. Solo F∩T = 5. Solo B∩T = 3.

Solo F = 20. Solo B = 12. Solo T = 12. Ninguno = 13.

### Fórmula Clave

### |A ∪ B| = |A| + |B| − |A ∩ B|

**Si A ⊆ B:** A ∩ B = A y A ∪ B = B.

### Errores Comunes

- No incluir el universo.
- Empezar por regiones exteriores.
- Confundir "al menos uno" (unión) con "todos" (intersección).`,
  "algebra-booleana": `## Álgebra Booleana

### Fundamentos

Dominio booleano: verdadero (1) y falso (0).

- **Negación (¬):** ¬1 = 0, ¬0 = 1
- **Conjunción (∧):** 1 ∧ 1 = 1; resto = 0
- **Disyunción (∨):** 0 ∨ 0 = 0; resto = 1

### Leyes Fundamentales

**Identidad:** A ∨ 0 = A, A ∧ 1 = A

**Nulidad:** A ∨ 1 = 1, A ∧ 0 = 0

**Idempotencia:** A ∨ A = A, A ∧ A = A

**Complemento:** A ∨ ¬A = 1, A ∧ ¬A = 0

**Distributiva:** A ∨ (B ∧ C) = (A∨B) ∧ (A∨C), A ∧ (B∨C) = (A∧B) ∨ (A∧C)

**Absorción:** A ∨ (A ∧ B) = A, A ∧ (A ∨ B) = A

### Leyes de De Morgan

### ¬(A ∨ B) = ¬A ∧ ¬B
### ¬(A ∧ B) = ¬A ∨ ¬B

### Simplificación

**SOP:** Suma de productos (de la tabla donde sale 1).

**POS:** Producto de sumas (de la tabla donde sale 0).

**Minitérmino:** A ∧ ¬B ∧ C. **Maxitérmino:** A ∨ ¬B ∨ ¬C.

### Ejemplo Resuelto

F = A ∧ (A ∨ B) → absorción → F = A.

F = (A∧B) ∨ (A∧¬B) → factorizar → A ∧ (B∨¬B) = A.

F = ¬(¬A∨B) ∧ (A∨B) → De Morgan → (A∧¬B) ∧ (A∨B) = A ∧ ¬B.

### Tabla de Verdad

Para F = A ∧ (B ∨ ¬C): 3 de 8 filas son verdaderas.

### Aplicaciones

Circuitos digitales, consultas SQL, lógica computacional.`,
  "tablas-de-verdad": `## Tablas de Verdad

### Definición

Representación tabular del valor de verdad de una expresión lógica para todas las combinaciones de variables.

### Construcción

Para n variables: **2^n filas**. Primera columna alterna a la mitad, segunda a cuartos, tercera a octavos.

### Conectivas Lógicas

| P | Q | P∧Q | P∨Q | P→Q | P↔Q | ¬P |
|---|---|-----|-----|-----|-----|----|
| 0 | 0 | 0   | 0   | 1   | 1   | 1  |
| 0 | 1 | 0   | 1   | 1   | 0   | 1  |
| 1 | 0 | 0   | 1   | 0   | 0   | 0  |
| 1 | 1 | 1   | 1   | 1   | 1   | 0  |

### Ejemplo Resuelto

(P→Q) ∧ (Q→P) equivale a P↔Q.

### Equivalencias

**Tautología:** todos 1. **Contradicción:** todos 0. **Contingencia:** ambos valores.

### Conteo

### Para n variables: 2^n filas

Expresiones booleanas posibles: **2^(2^n)**.

### Ejemplo Práctico

P ∧ (Q ∨ ¬R): 8 filas, verdadera en 3 casos.

### Uso

Verificar argumentos lógicos, demostrar equivalencias.`,
  "logica-condicional": `## Lógica Condicional

### El Condicional

**P → Q** se lee "si P entonces Q". P = hipótesis, Q = conclusión.

### Tabla de Verdad

| P | Q | P→Q |
|---|---|-----|
| 0 | 0 | 1   |
| 0 | 1 | 1   |
| 1 | 0 | 0   |
| 1 | 1 | 1   |

Solo es **falso** cuando P = 1 y Q = 0.

### Equivalencias

### P → Q ≡ ¬P ∨ Q
### P → Q ≡ ¬Q → ¬P (contrapositiva)

**Conversa:** Q → P (no equivalente). **Inversa:** ¬P → ¬Q (no equivalente).

### Cadena Condicional

P → Q y Q → R implica **P → R** (silogismo hipotético).

### Ejemplo Resuelto

"Si llueve (L), suelo mojado (M). Suelo no mojado." L→M y ¬M → por modus tollens: ¬L.

### Modus Ponens y Tollens

**Ponens:** P→Q, P ⊢ Q. **Tollens:** P→Q, ¬Q ⊢ ¬P.

### Errores Lógicos

**Afirmar consecuente:** P→Q, Q ⊢ P (error).

**Negar antecedente:** P→Q, ¬P ⊢ ¬Q (error).

### Ejemplo Complejo

(E∧A) → G. Estudio, no me gradúo: ¬G implica ¬(E∧A) = ¬E∨¬A. Como E, entonces ¬A.`,
  "logica-bicondicional": `## Lógica Bicondicional

### Definición

**P ↔ Q** se lee "P si y solo si Q". Verdadera cuando P y Q tienen el mismo valor.

### Tabla de Verdad

| P | Q | P↔Q |
|---|---|-----|
| 0 | 0 | 1   |
| 0 | 1 | 0   |
| 1 | 0 | 0   |
| 1 | 1 | 1   |

### Equivalencias

### P ↔ Q ≡ (P→Q) ∧ (Q→P)
### P ↔ Q ≡ (P∧Q) ∨ (¬P∧¬Q)

### Propiedades

**Conmutativa:** P↔Q ≡ Q↔P. **Asociativa:** (P↔Q)↔R ≡ P↔(Q↔R). **Reflexiva:** P↔P ≡ 1.

### Relación con Igualdad

Si P↔Q es tautología: P ≡ Q (equivalentes lógicamente).

### Ejemplo Resuelto

(P→Q) ↔ (¬Q→¬P): como P→Q ≡ ¬Q→¬P, la expresión es tautología.

### Conteo

2 filas verdaderas de 4 para dos variables. Para n variables en cadena, verdadero cuando un número **par** difiere de P₁.

### Aplicación

"Soy mayor de edad si y solo si puedo votar." P=V, Q=V. P↔Q = V. Verdadera.`,
  "cuantificadores-logica": `## Cuantificadores en Lógica

### Universal (∀)

**∀x P(x)**: "para todo x, P(x)". Verdadera si P(x) vale para todos.

**Negación:** ¬(∀x P(x)) ≡ ∃x ¬P(x).

### Existencial (∃)

**∃x P(x)**: "existe x tal que P(x)". Verdadera si vale para al menos uno.

**Negación:** ¬(∃x P(x)) ≡ ∀x ¬P(x).

### Orden de Cuantificadores

### ∀x ∃y P(x,y) ≠ ∃y ∀x P(x,y)

La segunda es más fuerte.

### Ejemplo Resuelto

P(x,y): x+y=0 en ℤ.

∀x ∃y (x+y=0): verdadero (y=−x). ∃y ∀x (x+y=0): falso.

### Negación Paso a Paso

Negar ∀x (x>0 → ∃y y²=x):

∃x (x>0 ∧ ∀y y²≠x).

### Cuantificador Único (∃!)

∃!x P(x): existe exactamente un x.

≡ ∃x P(x) ∧ ∀x∀y ((P(x)∧P(y)) → x=y).

### Resumen Negaciones

| Expresión | Negación |
|-----------|----------|
| ∀x P(x) | ∃x ¬P(x) |
| ∃x P(x) | ∀x ¬P(x) |
| ∀x∃y P(x,y) | ∃x∀y ¬P(x,y) |`,
  "paradojas-logicas": `## Paradojas Lógicas

### ¿Qué es una Paradoja?

Proposición que genera contradicción lógica a pesar de parecer razonable.

### Paradoja del Mentiroso

"Esta oración es falsa." Si verdadera → es falsa. Si falsa → es verdadera. Contradicción.

### Paradoja de Russell

R = {S : S ∉ S}. ¿R ∈ R? Si R∈R → R∉R. Si R∉R → R∈R. Contradicción.

Demostró que la teoría ingenua de conjuntos es inconsistente.

### Paradoja del Barbero

El barbero afeita a quien no se afeita a sí mismo. ¿Se afeita solo? Si sí → no debería. Si no → debería.

### Paradoja de los Que Saben

"Saben que no saben esta oración." Si la saben → no la saben. Si no → la saben.

### Ship of Theseus

Si reemplazas todas las partes de un barco, ¿es el mismo? ¿Y si las partes viejas se ensamblan?

### Aplicación en Exámenes

"Si esta afirmación es verdadera, entonces 2+2=5." Premisa falsa → implicación verdadera por vacuidad.

### Lecciones

1. Auto-referencia genera contradicciones.
2. No toda proposición tiene valor de verdad definido.
3. Las paradojas mejoraron los fundamentos de la matemática.`,
  "divisibilidad-residuos": `## Divisibilidad y Residuos

### Definición

**b | a** si existe k tal que a = b·k. **b ∤ a** si no existe.

### Propiedades

1. a | a siempre.
2. Si a | b y b | c, entonces a | c.
3. Si a | b y a | c, entonces a | (mb + nc).
4. 1 | a y a | 0 para todo a.

### División Entera

### a = b·q + r, donde 0 ≤ r < b

**Ejemplo:** 47 = 5·9 + 2. q = 9, r = 2.

### Residuos Modulares

### (a+b) mod n = ((a mod n)+(b mod n)) mod n
### (a·b) mod n = ((a mod n)·(b mod n)) mod n

### Reglas de Divisibilidad

| Divisor | Regla |
|---------|-------|
| 2 | Último dígito par |
| 3 | Suma de dígitos divisible por 3 |
| 4 | Dos últimos dígitos divisible por 4 |
| 5 | Último dígito 0 o 5 |
| 6 | Divisible por 2 y 3 |
| 9 | Suma de dígitos divisible por 9 |
| 10 | Último dígito 0 |

### Ejemplo

1234: suma = 10, no divisible por 3. 528 ÷ 8 = 66, sí divisible.

### Residuos de Potencias

7^100 mod 3: 7 mod 3 = 1 → 1^100 = 1.

2^10 mod 7: ciclo 2,4,1 (long 3). 10 = 3·3+1 → 2^1 ≡ 2.`,
  "mcm-mcd": `## MCM y MCD

### MCM

**mcm(a,b):** menor entero positivo múltiplo de ambos.

### mcm(a,b) = (a·b) / mcd(a,b)

### MCD

**mcd(a,b):** mayor entero positivo que divide a ambos.

### Algoritmo de Euclides

1. a = b·q₁ + r₁
2. Si r₁ = 0 → mcd = b
3. Si no: a ← b, b ← r₁, repetir.

### Ejemplo: mcd(48, 18)

48 = 18·2+12. 18 = 12·1+6. 12 = 6·2+0. **mcd = 6.**

### Propiedades

- mcd(a,b) = mcd(b,a)
- mcd(a,0) = a
- mcd(ka,kb) = k·mcd(a,b)
- mcd(a,b) = 1 → coprimos

### Relación Fundamental

### a·b = mcd(a,b) · mcm(a,b)

### Ejemplo Resuelto

mcm(12,18): mcd=6 → mcm = 216/6 = 36.

### Para Más de Dos

mcd(a,b,c) = mcd(mcd(a,b),c).

### Aplicación

24 rosas, 36 tulipanes. mcd=12. Puede hacer **12 ramos**.

Autobuses cada 12 y 18 min: mcm=36 min.`,
  "congruencias-modulares": `## Congruencias Modulares

### Definición

**a ≡ b (mod n)** si n | (a−b). Tienen el mismo residuo al dividir entre n.

### Propiedades

1. a ≡ a (mod n)
2. Si a ≡ b, entonces b ≡ a
3. Si a ≡ b y b ≡ c, entonces a ≡ c
4. Si a ≡ b, entonces a+c ≡ b+c
5. Si a ≡ b, entonces ac ≡ bc
6. Si a ≡ b, entonces a^k ≡ b^k

### Ejemplo Resuelto

Calcular 3^100 mod 7.

3^1≡3, 3^2≡2, 3^3≡6, 3^4≡4, 3^5≡5, 3^6≡1 (mod 7).

Ciclo de longitud 6. 100 = 6·16+4 → 3^100 ≡ 3^4 ≡ **4** (mod 7).

### Pequeño Teorema de Fermat

Si p es primo y p ∤ a:

### a^(p−1) ≡ 1 (mod p)

**2^100 mod 11:** 2^10 ≡ 1 → 2^100 = (2^10)^10 ≡ 1.

### Congruencias Lineales

Resolver ax ≡ b (mod n): existe si mcd(a,n) | b.

**3x ≡ 4 (mod 7):** 3⁻¹ ≡ 5. x ≡ 5·4 ≡ 20 ≡ **6** (mod 7).

### Aplicación

Dígito units de 7^2023: ciclo mod 10 es 7,9,3,1 (long 4). 2023 = 4·505+3 → 7^3 ≡ **3**.`,
  "primalidad-factorizacion": `## Primalidad y Factorización

### Número Primo

p > 1 con únicos divisores 1 y p. Primeros: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

### Teorema Fundamental de la Aritmética

### n = p₁^a₁ · p₂^a₂ · ... · pₖ^aₖ (única factorización)

### Factorización

1. Dividir por 2 hasta impar.
2. Probar primos 3, 5, 7, 11... hasta √n.
3. Si no se encuentra divisor, n es primo.

### Ejemplo: Factorizar 360

360 = 2³ · 3² · 5.

### Cantidad de Divisores

### d(n) = (a₁+1)(a₂+1)...(aₖ+1)

d(360) = 4·3·2 = 24 divisores.

### Suma de Divisores

### σ(n) = [(p₁^(a₁+1)−1)/(p₁−1)] · ...

σ(360) = 15·13·6 = 1170.

### Conteo de Primos

π(x) ≈ x/ln(x). π(100)=25, π(1000)=168.

### Prueba de Primalidad

Probar primos hasta √n. 97: √97≈9.8, probando 2,3,5,7 → primo. 91=7·13 → compuesto.

### Semiprimos

Producto de dos primos. 6=2·3, 15=3·5. Clave en criptografía RSA.`,
  "propiedades-potencias": `## Propiedades de las Potencias

### Definición

**a^n:** a multiplicado por sí mismo n veces.

### Propiedades

### a^m · a^n = a^(m+n)
### (a^m)^n = a^(m·n)
### (a·b)^n = a^n · b^n
### a^0 = 1 (a ≠ 0)
### a^(−n) = 1/a^n
### a^(m/n) = ⁿ√(a^m)

### Fracciones y Raíces

### (a/b)^n = a^n/b^n
### ⁿ√(a/b) = ⁿ√a / ⁿ√b

### Ejemplo: Simplificar

(2³·3²)² / (2²·3)³ = 2⁶·3⁴ / 2⁶·3³ = 3.

### Ejemplo: Calcular

8^(2/3) = (8^(1/3))² = 2² = 4.

### Ejemplo con Variables

Si 2^x = 5: 4^x·8^x = (2^x)²·(2^x)³ = 25·125 = 3125.

### Errores Comunes

- (a+b)^n ≠ a^n+b^n
- (a^m)^n = a^(m·n), NO a^(m^n)
- a^0 = 1 (no 0)

### Exámenes

Si 3^x=2, 3^y=5: 3^(2x+y) = 4·5 = 20.

(27)^(2/3)·(8)^(−1/3) = 9·(1/2) = 9/2.`,
  "igualdades-notables": `## Igualdades Notables

### Las Tres Principales

### (a+b)² = a²+2ab+b²
### (a−b)² = a²−2ab+b²
### (a+b)(a−b) = a²−b²

### Ejemplos

(x+3)² = x²+6x+9. (2x−5)² = 4x²−20x+25. (x+4)(x−4) = x²−16.

### Otras Igualdades

### (a+b)³ = a³+3a²b+3ab²+b³
### (a−b)³ = a³−3a²b+3ab²−b³
### a³+b³ = (a+b)(a²−ab+b²)
### a³−b³ = (a−b)(a²+ab+b²)

**Nota:** El signo del término ab es **opuesto** al de los paréntesis.

**Ejemplo:** x³−27 = (x−3)(x²+3x+9).

### Factorizar

x⁴−16 = (x²+4)(x²−4) = (x²+4)(x+2)(x−2).

### Desarrollar

(2x+3y)² = 4x²+12xy+9y².

### Cálculos Rápidos

97² = (100−3)² = 9409. 51·49 = (50+1)(50−1) = 2499.

### Coeficientes de Pascal

| n | Coeficientes |
|---|------------|
| 1 | 1, 1 |
| 2 | 1, 2, 1 |
| 3 | 1, 3, 3, 1 |
| 4 | 1, 4, 6, 4, 1 |`,
  "desigualdades-elementales": `## Desigualdades Elementales

### Propiedades

1. a ≤ a
2. Si a < b y b < c, entonces a < c
3. Si a > b, entonces a+c > b+c
4. Si a > b y c > 0, entonces ac > bc
5. Si a > b y c < 0, entonces ac < bc (¡se invierte!)

### Desigualdades Importantes

### |a+b| ≤ |a|+|b| (triangular)
### a² ≥ 0
### a+1/a ≥ 2 (para a > 0)

### AM-GM

### (a+b)/2 ≥ √(ab) para a,b ≥ 0

Igualdad cuando a = b.

### Ejemplo: Maximizar

a+b=10. Por AM-GM: 5 ≥ √(ab) → ab ≤ 25. Máximo = 25 cuando a=b=5.

### Ejemplo: Desigualdad Absoluta

|2x−3| < 5 → −5 < 2x−3 < 5 → −1 < x < 4.

### Ejemplo: Cuadrática

x²−5x+6 < 0 → (x−2)(x−3) < 0 → **2 < x < 3**.

### Aplicación

Mínimo de x+1/x para x>0: por AM-GM ≥ 2. Alcanzado en x=1.`,
  "raices-y-radicales": `## Raíces y Radicales

### Definición

**ⁿ√a** = número b tal que bⁿ = a.

### Propiedades

### √(ab) = √a·√b
### √(a/b) = √a/√b
### √(a²) = |a|
### ⁿ√a · ⁿ√b = ⁿ√(ab)
### ⁿ√(a^m) = a^(m/n)

### Simplificación

√72 = √(36·2) = 6√2. √200 = 10√2.

### Racionalización

### a/√b = (a√b)/b
### 1/(√a+√b) = (√a−√b)/(a−b)

**5/√3 = 5√3/3.** 1/(2+√5) = √5−2.

### Ejemplo: Simplificar

√50+2√18−√32 = 5√2+6√2−4√2 = 7√2.

### Ejemplo: Ecuación

√(2x+3) = x−1 → 2x+3 = x²−2x+1 → x²−4x−2=0.

x = 2±√6. Verificar: solo x = 2+√6 funciona.

### Potencias Fraccionarias

a^(m/n) = ⁿ√(a^m). 27^(2/3) = (27^(1/3))² = 9.`,
  "problemas-mezclas": `## Problemas de Mezclas

### Concepto

Combinar sustancias con distintas concentraciones. La **sustancia pura** se conserva.

### Fórmula

### C₁·P₁ + C₂·P₂ = C_total·P_total

### Dos Sustancias

x+y=z, P₁·x+P₂·y = P_total·z.

### Ejemplo Resuelto

20% y 50% para 10 litros al 35%.

x+y=10, 0.2x+0.5y=3.5. Solución: x=5, y=5.

### Regla de la Cruceta

Diferencias diagonales: |20−35|=15, |50−35|=15. Razón 1:1.

### Tres Sustancias

Se necesitan (n−1) ecuaciones independientes.

### Aplicación

Café $8/kg y $12/kg para 20 kg a $9.50/kg.

8x+12(20−x)=190 → x=12.5 kg a $8, 7.5 kg a $12.

### Consejos

- Verificar cantidades positivas.
- Porcentajes como decimales.
- Si el objetivo no está entre los extremos, es imposible.`,
  "problemas-trabajo-tiempo": `## Problemas de Trabajo y Tiempo

### Concepto

Tasa de trabajo = 1/t del trabajo por hora. Tasas se **suman** al trabajar juntos.

### Fórmula

### 1/T = 1/t₁ + 1/t₂ + ... + 1/tₙ

### Dos Trabajadores

### T = ab/(a+b)

### Ejemplo

A en 6h, B en 8h: 1/T = 1/6+1/8 = 7/24. T = 24/7 ≈ 3.43h.

### Dirección Opuesta

Tanque: entrada a, salida b. **1/T = 1/a − 1/b** (si a < b).

Si A llena en 4h y B vacía en 6h: 1/T = 1/4−1/6 = 1/12. T = 12h.

### Tres Trabajadores

A=6h, B=8h, C=12h: 1/T = 1/6+1/8+1/12 = 4/24+3/24+2/24 = 9/24 = 3/8. T = 8/3h.

### Trabajo con Inactividad

A trabaja 4h, descansa 1h. ¿Cuánto tarda en 10h de trabajo?

Ciclo: 5h por 4h de trabajo. Para 10h: 2 ciclos (10h) + 2h extra = 12h.

### Ejemplo Examen

"Carlos en 10 días, María en 15 días. ¿Juntos en cuántos días?"

1/T = 1/10+1/15 = 5/30 = 1/6. T = **6 días**.`,
  "problemas-velocidad": `## Problemas de Velocidad

### Fórmula Fundamental

### d = v · t

### Tipo 1: Dos vehículos se encuentran

v₁·t + v₂·t = d. Entonces t = d/(v₁+v₂).

**Ejemplo:** A y B a 60 km, velocidades 40 y 60 km/h. t = 60/100 = 0.6h = 36 min.

### Tipo 2: Uno persigue a otro

(v₁−v₂)·t = d_inicial.

**Ejemplo:** A a 50 km/h, B a 35 km/h, 20 km adelante. t = 20/15 = 4/3 h = 1h 20min.

### Tipo 3: Idas y vueltas

Velocidad media de ida y vuelta:

### v_media = 2·v₁·v₂/(v₁+v₂)

**Ejemplo:** 60 km/h ida, 40 km/h vuelta: v_media = 2·60·40/100 = 48 km/h.

### Tipo 4: Corriente de agua

Velocidad real = velocidad en agua + corriente (río abajo) o − corriente (río arriba).

### Tipo 5: Trenes cruzándose

Tiempo = (L₁+L₂)/(v₁+v₂) si van en sentidos opuestos.

Tiempo = L₁/(v₁−v₂) si uno persigue al otro.`,
  "problemas-financieros": `## Problemas Financieros

### Interés Simple

### I = P · r · t
### M = P(1 + r·t)

P = capital, r = tasa, t = tiempo.

**Ejemplo:** $1000 al 5% anual por 3 años: I = 1000·0.05·3 = $150. M = $1150.

### Interés Compuesto

### M = P(1 + r)^t

**Ejemplo:** $1000 al 5% compuesto 3 años: M = 1000(1.05)³ = $1157.63.

### Comparación

Simple: crece linealmente. Compuesto: crece exponencialmente.

Diferencia crece con el tiempo.

### Valor Presente y Futuro

### VP = VF/(1+r)^t
### VF = VP(1+r)^t

### Anualidades

Pago periódico constante. Para n pagos de A:

### VF = A[(1+r)^n − 1]/r
### VP = A[1 − (1+r)^(−n)]/r

### Ejemplo

$200 mensuales por 12 meses al 1% mensual:

VF = 200[(1.01)^12−1]/0.01 = 200(12.6825) = $2536.50.

### Doble y Regla 72

Tiempo para duplicar (interés compuesto): **t ≈ 72/r** (r en porcentaje).

Al 6%: t ≈ 12 años. Al 8%: t ≈ 9 años.`,
  "porcentajes-tantos": `## Porcentajes y Tantos

### Definición

**x%** de N = (x/100)·N = N·x/100.

**Tanto por uno:** x% = x/100. **Tanto por mil:** x% = 10x/1000.

### Operaciones

### Aumento de x%: N(1 + x/100)
### Descuento de x%: N(1 − x/100)
### De A a B: ((B−A)/A)·100%

### Ejemplo: Aumento

$200 con 15% de aumento: 200(1.15) = $230.

### Ejemplo: Descuento

$500 con 20% de descuento: 500(0.80) = $400.

### Ejemplo: Crecimiento

De 800 a 1000: ((1000−800)/800)·100 = 25% de aumento.

### Descuento Compuesto

20% de descuento y luego 10%: precio final = N(0.80)(0.90) = N(0.72).

Descuento total efectivo: 28%.

### Porcentaje Parcial

"El 30% de 40% de 200": 200·0.40·0.30 = $24.

### Ejemplo de Examen

Un producto cuesta $450 con 10% de descuento. Si el IVA es 16%, ¿cuánto paga?

Precio base: 450(0.90) = $405. Con IVA: 405(1.16) = $469.80.`,
  "proporcionalidad": `## Proporcionalidad

### Directa

### y = k · x

Si x aumenta, y aumenta proporcionalmente. k = constante de proporcionalidad.

**Ejemplo:** 5 libros cuestan $75. 8 libros: k = 75/5 = 15. 8·15 = $120.

### Inversa

### y = k / x

Si x aumenta, y disminuye.

**Ejemplo:** 6 obreros terminan en 10 días. 15 obreros: k = 6·10 = 60. 60/15 = 4 días.

### Composición

y es directa con x e inversa con z:

### y = k · x / z

### Regla de Tres Simple

### a/b = c/d → a·d = b·c

**Ejemplo:** 3 manzanas $6. ¿5 manzanas? 3/6 = 5/x → x = $10.

### Regla de Tres Compuesta

Múltiples magnitudes. Se ligan por similitud.

**Ejemplo:** 5 personas comen 20 kg en 8 días. ¿3 personas en 6 días?

Personas: 5→3 (3/5). Días: 8→6 (6/8). Comida: 20→x.

x = 20·(3/5)·(6/8) = 20·0.6·0.75 = 9 kg.

### Proporcionalidad Aritmética

Si a, m, b son progresión aritmética: **m = (a+b)/2**.

Si a, g, b son progresión geométrica: **g = √(ab)**.`,
  "problemas-densidad": `## Problemas de Densidad

### Fórmula

### ρ = m/V

densidad = masa / volumen.

### Unidades

- Sólidos: g/cm³, kg/m³
- Líquidos: g/mL, kg/L
- Gases: g/L, kg/m³

**Conversión:** 1 g/cm³ = 1000 kg/m³ = 1 g/mL.

### Ejemplo Básico

Objeto de 150 g y 50 cm³: ρ = 150/50 = 3 g/cm³.

### Ejemplo: Flotación

Si ρ_objeto < ρ_fluido → flota. Si ρ_objeto > ρ_fluido → se hunde.

Hielo (0.9 g/cm³) flota en agua (1 g/cm³).

### Ejemplo: Mezcla de Densidades

Mezclar 100 cm³ de aceite (0.9 g/cm³) con 200 cm³ de agua (1 g/cm³).

Masa total = 100(0.9) + 200(1) = 90 + 200 = 290 g.

Volumen total = 300 cm³ (aproximando no hay contracción).

ρ_mezcla = 290/300 ≈ 0.967 g/cm³.

### Ejemplo: Volumen por Densidad

¿Qué volumen ocupa 500 g de aluminio (ρ = 2.7 g/cm³)?

V = m/ρ = 500/2.7 ≈ 185.2 cm³.

### Ejemplo Examen

Un bloque de 2 kg sumergido en agua desplaza 750 mL. ¿Es de madera o metal?

V_bloque = 750 cm³ (igual al desplazado). ρ = 2000/750 ≈ 2.67 g/cm³ > 1. Es **metal**.`,
  "problemas-edad-avanzados": `## Problemas de Edad (Avanzados)

### Planteamiento General

Asignar variables a las edades actuales y usar las relaciones dadas.

### Ejemplo 1: Edades Futuras

"Pedro tiene el doble de edad que María. En 10 años, Pedro tendrá 1.5 veces la edad de María."

Pedro = 2M. En 10 años: 2M+10 = 1.5(M+10) → 2M+10 = 1.5M+15 → 0.5M=5 → M=10, Pedro=20.

### Ejemplo 2: Edades Pasadas

"Ana tiene 30 años. Hace 5 años, tenía el triple de la edad de Luis."

Hace 5 años: Ana=25, Luis=L−5. 25 = 3(L−5) → 25 = 3L−15 → L=40/3.

Verificar: 25 = 3(40/3−5) = 3(25/3) = 25. ✓

### Ejemplo 3: Múltiples Personas

"La suma de edades de padre e hijo es 50. Hace 5 años, el padre tenía el cuádruple del hijo."

P+H=50. P−5 = 4(H−5) → P = 4H−15. Sustituyendo: 4H−15+H=50 → 5H=65 → H=13, P=37.

### Ejemplo 4: Edades en Proporción

"Las edades de tres hermanos están en razón 2:3:4. La suma es 54."

2x+3x+4x=54 → 9x=54 → x=6. Edades: 12, 18, 24.

### Consejos

- Siempre verificar con las condiciones originales.
- Definir una variable como referencia.
- Las edades aumentan igual para todos.`,
  "sucesiones-aritmeticas": `## Sucesiones Aritméticas

### Definición

Cada término se obtiene sumando una constante **d** (razón).

### aₙ = a₁ + (n−1)·d

### Propiedades

- **Razón:** d = aₙ₊₁ − aₙ
- **Término medio:** aₙ = (aₙ₋₁ + aₙ₊₁)/2

### Suma de n términos

### Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n−1)d]/2

### Ejemplo Resuelto

Sucesión: 3, 7, 11, 15, ...

a₁ = 3, d = 4.

a₁₀ = 3 + 9(4) = 39.

S₁₀ = 10(3+39)/2 = 10(21) = 210.

### Ejemplo: Encontrar n

¿Cuántos términos para que la suma sea 525 con a₁=5 y d=3?

525 = n[10+(n−1)3]/2 → 1050 = n(3n+7) → 3n²+7n−1050=0.

n = (−7+√(49+12600))/6 = (−7+112.25)/6 ≈ 17.54. No hay solución entera exacta.

### Ejemplo: Insertar Términos

Insertar 4 términos armónicos entre 3 y 18.

Primero: 4 términos aritméticos entre 3 y 18.

3, ___, ___, ___, ___, 18. 5 espacios, d=(18−3)/5 = 3. Secuencia: 3,6,9,12,15,18.`,
  "sucesiones-geometricas": `## Sucesiones Geométricas

### Definición

Cada término se multiplica por una constante **r** (razón).

### aₙ = a₁ · r^(n−1)

### Propiedades

- **Razón:** r = aₙ₊₁/aₙ
- **Término medio:** aₙ² = aₙ₋₁ · aₙ₊₁

### Suma de n términos (r ≠ 1)

### Sₙ = a₁(r^n − 1)/(r − 1)

### Suma Infinita (|r| < 1)

### S∞ = a₁/(1 − r)

### Ejemplo Resuelto

Sucesión: 2, 6, 18, 54, ...

a₁ = 2, r = 3.

a₅ = 2·3⁴ = 162.

S₅ = 2(3⁵−1)/(3−1) = 2(242)/2 = 242.

### Ejemplo: Suma Infinita

1 + 1/3 + 1/9 + 1/27 + ... = 1/(1−1/3) = 1/(2/3) = 3/2.

### Ejemplo: Encontrar r

a₁=3, a₄=24. 3·r³=24 → r³=8 → r=2.

### Ejemplo: Relación con Aritmética

Si log(aₙ) es aritmética, entonces aₙ es geométrica.

### Ejemplo Examen

Una pelota cae desde 10 m. En cada rebote alcanza ⅔ de la altura anterior. ¿Distancia total?

Caída: 10. Rebotes: 2·(10·⅔ + 10·(⅔)² + ...) = 2·10·⅔/(1−⅔) = 40. Total = 10+40 = 50 m.`,
  "sucesiones-recursivas": `## Sucesiones Recursivas

### Definición

Cada término se define en función de los **anteriores**.

### Ejemplo: Fibonacci

### a₁ = 1, a₂ = 1, aₙ = aₙ₋₁ + aₙ₋₂ (para n ≥ 3)

Secuencia: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

### Ejemplo Resuelto

a₁ = 2, aₙ = 3aₙ₋₁ + 1.

a₁=2, a₂=7, a₃=22, a₄=67, a₅=202.

### Solución Explícita (Lineal)

Para aₙ = paₙ₋₁ + q:

1. Encontrar el punto fijo: x = px+q → x = q/(1−p) (si p ≠ 1).
2. Definir bₙ = aₙ − x. Entonces bₙ = p·bₙ₋₁ (geométrica).
3. bₙ = b₁·p^(n−1) = (a₁−x)·p^(n−1).
4. **aₙ = (a₁−q/(1−p))·p^(n−1) + q/(1−p).**

### Ejemplo: Resolver Recursión

aₙ = 2aₙ₋₁ + 3, a₁ = 5.

Punto fijo: x = 2x+3 → x = −3.

bₙ = aₙ+3: bₙ = 2bₙ₋₁, b₁ = 8.

bₙ = 8·2^(n−1) = 2^(n+2).

**aₙ = 2^(n+2) − 3.** Verificar: a₁=8−3=5, a₂=16−3=13=2·5+3. ✓`,
  "sucesiones-recurrentes": `## Sucesiones Recurrentes

### Definición

Relación que define un término usando **múltiples** términos anteriores.

### Tipo Lineal Homogéneo

### aₙ = c₁aₙ₋₁ + c₂aₙ₋₂

Se resuelve con la **ecuación característica**: x² − c₁x − c₂ = 0.

### Si raíces r₁ ≠ r₂:

### aₙ = A·r₁ⁿ + B·r₂ⁿ

A y B se determinan con las condiciones iniciales.

### Si raíz doble r:

### aₙ = (A + Bn)·rⁿ

### Ejemplo Resuelto

aₙ = 5aₙ₋₁ − 6aₙ₋₂, a₁=1, a₂=4.

Ecuación: x²−5x+6=0 → (x−2)(x−3)=0. Raíces: 2 y 3.

aₙ = A·2ⁿ + B·3ⁿ.

a₁=1: 2A+3B=1. a₂=4: 4A+9B=4.

De la primera: A=(1−3B)/2. Sustituyendo: 2(1−3B)+9B=4 → 3B=2 → B=2/3, A=−1/2.

**aₙ = −(1/2)·2ⁿ + (2/3)·3ⁿ = −2^(n−1) + 2·3^(n−1).**

### Ejemplo: Fibonacci

aₙ = aₙ₋₁ + aₙ₋₂. Ecuación: x²−x−1=0. Raíces: (1±√5)/2.

A=1/√5, B=−1/√5. **aₙ = (φⁿ − ψⁿ)/√5** donde φ=(1+√5)/2, ψ=(1−√5)/2.`,
  "patrones-numericos": `## Patrones Numéricos

### Identificación

Para descubrir un patrón:
1. Calcular los primeros términos.
2. Buscar diferencias entre términos consecutivos.
3. Si las diferencias son constantes → aritmética.
4. Si las razones son constantes → geométrica.
5. Si las diferencias de diferencias son constantes → cuadrática.

### Ejemplo 1

Secuencia: 1, 4, 9, 16, 25...

Diferencias: 3, 5, 7, 9... (diferencias de diferencias = 2).

Patrón: **n²**.

### Ejemplo 2

Secuencia: 2, 6, 12, 20, 30...

Diferencias: 4, 6, 8, 10...

Diferencias de diferencias: 2, 2, 2...

Patrón: **n(n+1)**.

### Ejemplo 3

Secuencia: 1, 3, 7, 15, 31...

Notar: cada término = 2·anterior + 1.

Patrón: **2ⁿ − 1**.

### Ejemplo 4

Secuencia: 1, 1, 2, 3, 5, 8...

Cada término = suma de los dos anteriores → **Fibonacci**.

### Técnicas

- **Diferencias sucesivas** para polinomios.
- **Razones sucesivas** para exponenciales.
- **Composición** de patrones (ej: n² + n).
- **Teorema de difference engines:** si las k-ésimas diferencias son constantes, el patrón es un polinomio de grado k.`,
  "conjeturas-induccion": `## Conjeturas e Inducción

### Proceso Inductivo

1. Observar casos particulares.
2. Formular una conjetura.
3. Verificar con más casos.
4. Demostrar (idealmente con inducción matemática).

### Inducción Matemática

Para demostrar P(n) para todo n ≥ n₀:

1. **Base:** Demostrar P(n₀) es verdadera.
2. **Paso inductivo:** Asumir P(k) verdadera. Demostrar P(k+1).
3. Conclusión: P(n) es verdadera para todo n ≥ n₀.

### Ejemplo Resuelto

Demostrar: 1+2+...+n = n(n+1)/2.

**Base (n=1):** 1 = 1(2)/2 = 1. ✓

**Paso:** Asumir para k: 1+2+...+k = k(k+1)/2.

Entonces 1+2+...+k+(k+1) = k(k+1)/2+(k+1) = (k+1)(k+2)/2 = (k+1)((k+1)+1)/2. ✓

### Ejemplo: Suma de Cuadrados

### 1²+2²+...+n² = n(n+1)(2n+1)/6

**Base (n=1):** 1 = 1·2·3/6 = 1. ✓

**Paso:** Asumir para k. Entonces...

k(k+1)(2k+1)/6 + (k+1)² = (k+1)[k(2k+1)+6(k+1)]/6 = (k+1)(2k²+7k+6)/6 = (k+1)(k+2)(2k+3)/6. ✓

### Ejemplo: Desigualdad

Demostrar: 2ⁿ > n para todo n ≥ 1.

**Base:** 2¹ = 2 > 1. ✓

**Paso:** Asumir 2ᵏ > k. Entonces 2^(k+1) = 2·2ᵏ > 2k ≥ k+1 (para k ≥ 1). ✓`,
  "secuencias-dos-variables": `## Secuencias de Dos Variables

### Definición

Parejas (aₙ, bₙ) donde ambas secuencias están relacionadas.

### Tipo Recursivo

### aₙ₊₁ = f(aₙ, bₙ)
### bₙ₊₁ = g(aₙ, bₙ)

### Ejemplo: Suceso de Lucas

Fibonacci modificado: a₁=2, b₁=1, aₙ₊₁=aₙ+bₙ, bₙ₊₁=aₙ.

Secuencia: (2,1), (3,2), (5,3), (8,5), (13,8)...

La primera componente es la de Lucas: 2, 3, 5, 8, 13...

### Ejemplo Resuelto

a₁=1, b₁=0. aₙ₊₁=aₙ+2bₙ, bₙ₊₁=aₙ+bₙ.

| n | aₙ | bₙ |
|---|-----|-----|
| 1 | 1   | 0   |
| 2 | 1   | 1   |
| 3 | 3   | 2   |
| 4 | 7   | 5   |
| 5 | 17  | 12  |

Patrón: aₙ² − 2bₙ² = (−1)^(n−1). Esto se verifica por inducción.

### Ejemplo: Puntos en una Línea

Dos hormigas se mueven en una recta: una avanza 2 pasos, la otra 3 pasos. ¿Cuándo se encuentran?

Si parten del mismo punto: 2t = 3t → solo en t=0.

Si parten con distancia d: 2t = 3t − d → t = d.

### Aplicación

Sistemas de ecuaciones recursivas aparecen en modelos poblacionales, finanzas y dinámica de sistemas.`,
  "progresiones-avanzadas": `## Progresiones Avanzadas

### Progresión Armónica

Los recíprocos forman una progresión aritmética.

1/a, 1/m, 1/b en PA → m es **media armónica**: 2/m = 1/a + 1/b → m = 2ab/(a+b).

### Ejemplo

Media armónica de 4 y 6: m = 2(4)(6)/(4+6) = 48/10 = 4.8.

### Medias

### Aritmética: M_A = (a+b)/2
### Geométrica: M_G = √(ab)
### Armónica: M_H = 2ab/(a+b)

### Relación

### M_A ≥ M_G ≥ M_H

Igualdad si y solo si a = b.

### Progresión Cuadrática

Las diferencias de segundo orden son constantes.

Ejemplo: 1, 4, 9, 16... Diferencias: 3, 5, 7... Diferencias²: 2, 2...

Fórmula general: aₙ = an² + bn + c.

### Ejemplo Resuelto

Encontrar aₙ si los términos son 2, 7, 14, 23, 34.

Diferencias: 5, 7, 9, 11. Diferencias²: 2, 2, 2.

aₙ = n² + bn + c. Con a₁=2: 1+b+c=2. Con a₂=7: 4+2b+c=7.

b=2, c=−1. **aₙ = n²+2n−1.**

### Progresión Arithmético-Geométrica

Terminios de la forma aₙ = (a+nd)·rⁿ.

Ejemplo: 1·2, 2·4, 3·8, 4·16... = n·2ⁿ.`,
  "permutaciones-simples": `## Permutaciones Simples

### Definición

**Permutación:** Ordenamiento de elementos donde el **orden importa**.

### n! (n factorial)

### n! = n·(n−1)·(n−2)·...·2·1

0! = 1, 1! = 1.

### Permutaciones de n elementos

### P(n) = n!

**Ejemplo:** 5 libros se ordenan de 5! = 120 formas.

### Permutaciones de r de n

### P(n,r) = n!/(n−r)!

**Ejemplo:** 3 de 5 libros: P(5,3) = 5!/2! = 60.

### Con Restricciones

**Un elemento siempre primero:** Los n−1 restantes se ordenan: (n−1)!.

**Dos elementos juntos:** Tratarlos como uno: (n−1)! · 2!.

### Ejemplo Resuelto

6 personas en fila, pero A y B deben estar juntos.

Tratar A y B como uno: 5! · 2! = 240.

### Ejemplo: A nunca primero

Total: 6!. A siempre primero: 5!. A nunca primero: 6!−5! = 720−120 = 600.

### Permutaciones con Repetición

### n!/(n₁!·n₂!·...·nₖ!)

**Ejemplo:** Letras de "MATEMÁTICA" (10 letras, M×2, A×3, T×2): 10!/(2!·3!·2!) = 151200.`,
  "combinaciones-simples": `## Combinaciones Simples

### Definición

**Combinación:** Selección de elementos donde el **orden NO importa**.

### Fórmula

### C(n,r) = n! / (r!·(n−r)!)

También escrito como C(n,r) o "n sobre r" o (n r).

### Propiedades

- C(n,0) = C(n,n) = 1
- C(n,1) = C(n,n−1) = n
- C(n,r) = C(n,n−r)
- C(n,r) = C(n−1,r−1) + C(n−1,r) (identidad de Pascal)

### Ejemplo Resuelto

Elegir 3 de 5 personas: C(5,3) = 5!/(3!·2!) = 10.

### Ejemplo: Comité

De 8 personas, elegir 4 para un comité: C(8,4) = 70.

### Ejemplo con Restricciones

"De 10 personas, elegir 3 que incluya al menos 1 mujer (hay 4 mujeres y 6 hombres)."

Total: C(10,3) = 120.

Sin mujeres: C(6,3) = 20.

Al menos 1 mujer: 120 − 20 = 100.

### Ejemplo: Camino en Cuadrícula

Desde (0,0) hasta (m,n) solo moviéndose derecha o abajo: C(m+n, m) o C(m+n, n).

De (0,0) a (3,2): C(5,3) = 10 caminos.`,
  "permutaciones-repeticion": `## Permutaciones con Repetición

### Elementos Repetidos

Cuando hay elementos idénticos:

### P = n! / (n₁! · n₂! · ... · nₖ!)

### Ejemplo Resuelto

Letras de "BANANA" (6 letras, A×3, N×2, B×1):

6!/(3!·2!·1!) = 720/12 = 60 permutaciones distintas.

### Ejemplo: Palabras

¿Cuántas palabras se forman con "ESTADÍSTICA"? (11 letras)

E×2, S×3, T×2, A×2, D×1, I×2, C×1.

11!/(2!·3!·2!·2!·1!·2!·1!) = 39916800/96 = 415800.

### Permutaciones de n Elementos con Repetición

Cuando se pueden repetir los elementos:

### P = n^r

(r posiciones, n opciones cada una).

**Ejemplo:** Contraseña de 4 caracteres con 26 letras: 26⁴ = 456976.

### Ejemplo: Dígitos

Cuántos números de 3 dígitos se pueden formar (0-9, sin repetición):

P(10,3) = 10!/7! = 720.

Con repetición: 10³ = 1000.

### Ejemplo: Circular

n personas en mesa circular: (n−1)!.

6 personas: 5! = 120 disposiciones.

Si hay personas idénticas: (n−1)!/(n₁!·n₂!·...).`,
  "combinaciones-repeticion": `## Combinaciones con Repetición

### Fórmula

### C(n+r−1, r) = C(n+r−1, n−1)

Seleccionar r elementos de n tipos, con repetición, donde el orden NO importa.

### Ejemplo Resuelto

Elegir 3 frutas de 4 tipos (con repetición permitida):

C(4+3−1, 3) = C(6,3) = 20.

### Ejemplo: Monedas

¿Cuántas formas de dar $1 con monedas de $0.25, $0.10, $0.05 y $0.01?

C(4+r−1, r) donde r = número de monedas. Se necesita más contexto (cuántas monedas).

Si se quieren dar exactamente 5 monedas de 4 tipos: C(8,4) = 70.

### Equivalencia con Ecuaciones

### x₁ + x₂ + ... + xₙ = r, con xᵢ ≥ 0

Número de soluciones enteras no negativas = C(n+r−1, r).

**Ejemplo:** x+y+z = 10 con x,y,z ≥ 0.

C(3+10−1, 10) = C(12,10) = 66.

### Con Restricciones

Si xᵢ ≥ 1: sustituir yᵢ = xᵢ−1 ≥ 0.

x+y+z = 10, x,y,z ≥ 1: C(10−3+3−1, 10−3) = C(9,7) = 36.

### Ejemplo Examen

"¿Cuántas soluciones enteras no negativas tiene 2x+3y = 20?"

Enumerar: y puede ser 0,2,4,6 (con x ≥ 0).

y=0: x=10. y=2: x=7. y=4: x=4. y=6: x=1. **4 soluciones.**

Cuando los coeficientes son > 1, no se aplica la fórmula directamente; se enumera.`,
  "inclusion-exclusion": `## Principio de Inclusión-Exclusión

### Para Dos Conjuntos

### |A ∪ B| = |A| + |B| − |A ∩ B|

### Para Tres Conjuntos

### |A ∪ B ∪ C| = |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|

### Para n Conjuntos

Se suman las individualmente, se restan las intersecciones de a pares, se suman las de a tres, etc.

### Ejemplo Resuelto

De 50 estudiantes: 30 matemáticas (M), 25 física (F), 20 química (Q), 15 M∩F, 12 M∩Q, 10 F∩Q, 5 los tres.

|M∪F∪Q| = 30+25+20−15−12−10+5 = 43.

Ninguna: 50−43 = 7.

### Ejemplo: Múltiplos

¿Cuántos enteros de 1 a 100 son divisibles por 2, 3 o 5?

A₂=50, A₃=33, A₅=20. A₂∩A₃=16, A₂∩A₅=10, A₃∩A₅=6. A₂∩A₃∩A₅=3.

|A₂∪A₃∪A₅| = 50+33+20−16−10−6+3 = 74.

### Ejemplo: Sin Solución Común

"De 100 personas: 70 hablan inglés, 60 hablan francés, 45 hablan alemán, 30 E∩F, 25 E∩A, 20 F∩A, 10 los tres. ¿Cuántos no hablan ninguno?"

|E∪F∪A| = 70+60+45−30−25−20+10 = 110.

Pero |U| = 100, así que hay inconsistencia. Verificar datos.`,
  "principios-casos": `## Principio de Casos

### Principio de Conteo por Suma

Si una tarea se puede realizar de **m** formas o de **n** formas, pero no ambas:

### Total = m + n

### Ejemplo

Menú: 3 entradas, 5 platos, 4 postres. Un combo = 3+5+4 = 12 opciones.

### Principio de Conteo por Producto

Si una tarea tiene **fases** independientes:

### Total = n₁ · n₂ · ... · nₖ

### Ejemplo

3 camisas, 2 pantalones, 4 zapatos: 3·2·4 = 24 outfit.

### Combinación de Suma y Producto

Dividir en casos (suma) y dentro de cada caso multiplicar fases.

### Ejemplo Resuelto

Contraseña: 4 caracteres. Primera letra mayúscula (26), luego 3 dígitos (10³). Total: 26·1000 = 26000.

### Ejemplo: Oposición

Oposición con 3 exámenes. Aprobado si aprueba al menos 2.

Cada examen: A o R. Total: 2³ = 8.

Aprobados: AAR, ARA, RAA, AAA = 4 de 8.

### Ejemplo: Rutas

De A a B hay 3 caminos. De B a C hay 2. De A a C directo hay 1.

De A a C: 3·2 + 1 = 7 rutas.

### Ejemplo: Dígitos

Números de 3 dígitos sin repetir dígitos: 9·9·8 = 648.

(Solo 9 opciones para la primera, no puede ser 0).

Con repetición: 9·10·10 = 900.`,
  "problemas-colocacion": `## Problemas de Colocación

### Colocar n Objetos Distintos en n Lugares

### P(n) = n!

### Ejemplo

5 personas en 5 sillas: 5! = 120.

### Restricciones Comunes

**Uno no puede ir en cierto lugar:**

Si A no va en el lugar 1, usar inclusión-exclusión:

total − (A en 1) = n! − (n−1)! = 5!−4! = 96.

**Dos específicos deben ir juntos:**

Tratarlos como uno: (n−1)! · 2!

**Dos específicos no pueden ir juntos:**

total − juntos = n! − (n−1)!·2!

### Ejemplo Resuelto

4 libros en 4 estantes, pero el libro rojo no puede ir en el estante 1.

Total: 4! = 24. Rojo en estante 1: 3! = 6. Respuesta: 24−6 = 18.

### Ejemplo: Mesa Circular

n personas en mesa circular: **(n−1)!**

Si se da vuelta la mesa: **(n−1)!/2** (si no hay distinción por orientación).

### Ejemplo: Distribuir Objetos Iguales

r objetos idénticos en n cajas: **C(n+r−1, r)**

r objetos en n cajas, cada caja al menos 1: **C(r−1, n−1)**

### Ejemplo Examen

"En cuántos ways se pueden sentar 6 personas en fila, si A y B no pueden estar juntos?"

Total: 6! = 720. Juntos: 5!·2! = 240. No juntos: 720−240 = **480**.`,
  "polinomios-generadores": `## Polinomios Generadores

### Definición

Un **polinomio generador** es un polinomio cuyos coeficientes representan los términos de una secuencia.

### Para la secuencia a₀, a₁, a₂...

### G(x) = a₀ + a₁x + a₂x² + a₃x³ + ...

### Ejemplo: Fibonacci

### G(x) = x/(1−x−x²)

Los coeficientes de xⁿ en la expansión de G(x) son los números de Fibonacci.

### Ejemplo: Cuentas de Ovejas

Formas de cubrir 2n ovejas con casetas de 1 o 2:

### G(x) = 1/(1−x−x²)

### Producto de Polinomios

Si A(x) genera {aₙ} y B(x) genera {bₙ}, entonces A(x)·B(x) genera la **convolución**: cₙ = Σ aₖ·bₙ₋ₖ.

### Ejemplo: Particiones

Polinomio generador de particiones en partes ≤ k:

### 1/[(1−x)(1−x²)...(1−xᵏ)]

### Ejemplo Resuelto

Generador de 1, 2, 3, 4, ...:

G(x) = 1/(1−x)² (derivada de 1/(1−x)).

### Aplicación

Los polinomios generadores permiten:
1. Encontrar fórmulas cerradas para secuencias.
2. Resolver problemas de conteo recursivo.
3. Operar algebraicamente con secuencias.`,
  "media-mediana-moda": `## Media, Mediana y Moda

### Media Aritmética

### x̄ = (x₁ + x₂ + ... + xₙ) / n

**Ejemplo:** Datos: 4, 7, 9, 10, 20. Media = 50/5 = 10.

### Media Ponderada

### x̄ = (w₁x₁ + w₂x₂ + ... + wₙxₙ) / (w₁ + w₂ + ... + wₙ)

**Ejemplo:** Calificaciones ponderadas: Exámenes (60%) = 8, Tareas (40%) = 9.

Media = (0.60·8 + 0.40·9) = 8.4.

### Mediana

Valor central cuando los datos están **ordenados**.

- n impar: posición (n+1)/2.
- n par: promedio de las posiciones n/2 y n/2+1.

**Ejemplo:** 3, 5, 7, 9, 11 → mediana = 7.

**Ejemplo:** 3, 5, 7, 9 → mediana = (5+7)/2 = 6.

### Moda

Valor que más se repite. Puede ser: unimodal, bimodal o multimodal.

**Ejemplo:** 2, 3, 3, 5, 7, 7, 7, 9 → moda = 7.

**Ejemplo:** 1, 2, 2, 3, 3, 4 → modas = 2 y 3 (bimodal).

### Relación

En distribución simétrica: media = mediana = moda.

En distribución asimétrica derecha: moda < mediana < media.

### Rango

### Rango = máximo − mínimo

**Ejemplo:** 3, 5, 7, 9, 20 → rango = 20−3 = 17.`,
  "varianza-desviacion": `## Varianza y Desviación Estándar

### Varianza (σ²)

### σ² = Σ(xᵢ − x̄)² / n

Para muestra (corrección de Bessel): s² = Σ(xᵢ − x̄)² / (n−1).

### Desviación Estándar (σ)

### σ = √(σ²)

Mide la **dispersión** de los datos alrededor de la media.

### Ejemplo Resuelto

Datos: 2, 4, 6, 8, 10. Media = 6.

(xᵢ−x̄)²: 16, 4, 0, 4, 16. Suma = 40.

σ² = 40/5 = 8. σ = √8 ≈ 2.83.

### Coeficiente de Variación

### CV = (σ/x̄) · 100%

Permite comparar dispersión entre conjuntos con medias diferentes.

**Ejemplo:** Conjunto A: media=100, σ=10 → CV=10%. Conjunto B: media=50, σ=8 → CV=16%.

A es más estable (menor CV).

### Propiedades

- Si se suma c a cada dato: σ no cambia.
- Si se multiplica cada dato por k: σ se multiplica por |k|.

### Ejemplo: Suma de Datos

Si x̄ = 50 y σ = 8 para 20 datos, ¿cuál es la suma?

Suma = n · x̄ = 20 · 50 = 1000.

### Fórmula Alternativa

### σ² = (Σxᵢ²/n) − x̄²

Útil cuando se conocen las sumas.`,
  "percentiles-cuartiles": `## Percentiles y Cuartiles

### Percentil

El **percentil Pₖ** es el valor debajo del cual está el k% de los datos.

### Posición de Pₖ = k(n+1)/100

Si no es entero, interpolar.

### Ejemplo

Datos (ordenados): 2, 5, 7, 8, 10, 12, 15, 18, 20, 22.

P₃₀: posición = 30(11)/100 = 3.3 → entre 7 y 8. P₃₀ = 7 + 0.3(1) = 7.3.

### Cuartiles

| Cuartil | Percentil | Significado |
|---------|-----------|-------------|
| Q₁ | P₂₅ | 25% de los datos están debajo |
| Q₂ | P₅₀ | Mediana |
| Q₃ | P₇₅ | 75% de los datos están debajo |

### Ejemplo

Datos: 3, 5, 7, 8, 10, 12, 15, 18, 20.

Q₁: posición = 25(10)/100 = 2.5 → (5+7)/2 = 6.

Q₂: posición = 50(10)/100 = 5 → 10.

Q₃: posición = 75(10)/100 = 7.5 → (15+18)/2 = 16.5.

### Rango Intercuartílico (RIQ)

### RIQ = Q₃ − Q₁

Mide la dispersión del 50% central. Es más robusto que la desviación estándar.

### Diagrama de Caja

- Línea inferior: mínimo
- Borde inferior de caja: Q₁
- Línea dentro de caja: mediana
- Borde superior de caja: Q₃
- Línea superior: máximo
- **Valores atípicos:** fuera de Q₁−1.5·RIQ o Q₃+1.5·RIQ.`,
  "razonamiento-verbal-avanzado": `## Razonamiento Verbal Avanzado

### Tipos de Preguntas

#### Afirmaciones y Conclusiones

Se presenta un texto y se pide determinar qué conclusión(s) se pueden inferir válidamente.

**Regla:** Solo se puede concluir lo que se deduce **necesariamente** del texto.

### Ejemplo Resuelto

"Dogs are animals. Some animals are brown."

- Conclusión I: "Some dogs are brown." → **No se puede deducir** (no dice que algunos animales marrones sean perros).
- Conclusión II: "All dogs are animals." → **Sí se deduce** (es lo primero que dice).
- Conclusión III: "Some animals are dogs." → **Sí se deduce** (si hay perros y los perros son animales, hay animales que son perros).

### Inferencias Lógicas

- **Válida:** La conclusión sigue necesariamente de las premisas.
- **Inválida:** La conclusión no se sigue.
- **Fuerte/Debil:** Grado de probabilidad de la inferencia.

### Categorías de Aristóteles

- Todo A es B (A→B)
- Ningún A es B (A→¬B)
- Algún A es B (∃x: A(x)∧B(x))
- Algún A no es B (∃x: A(x)∧¬B(x))

### Ejercicio Avanzado

Premisa 1: Todos los médicos estudian mucho.
Premisa 2: Algunos que estudian mucho son becados.

¿Se puede concluir que "Algunos médicos son becados"?

**No.** La Premisa 2 dice que algunos que estudian mucho son becados, pero no especifica que sean médicos.`,
  "razonamiento-abstracto": `## Razonamiento Abstracto

### Tipos de Secuencias

#### Secuencias Numéricas

Encontrar el patrón y predecir el siguiente término.

### Ejemplo

2, 6, 12, 20, 30 → diferencias: 4, 6, 8, 10 → siguiente: 30+12 = **42**.

Patrón: n(n+1).

#### Secuencias de Símbolos

Identificar transformaciones: rotación, reflexión, translación, cambio de color.

### Estrategias

1. Buscar cambios en posición (rotación, traslación).
2. Buscar cambios de color/forma.
3. Buscar patrones cíclicos.
4. Contar elementos.
5. Analizar relaciones entre elementos.

### Ejemplo Resuelto

Figuras: triángulo, cuadrado, pentágono, hexágono → siguiente: **heptágono** (7 lados).

### Ejemplo: Círculos

Círculos: blanco, negro, blanco, negro → patrón alterno. Siguiente: **blanco**.

### Ejemplo: Cuadrícula

En una cuadrícula 3×3, cada fila y columna tiene símbolos distintos. Se busca el faltante.

**Técnica:** Asegurar que cada símbolo aparezca exactamente una vez en cada fila y columna.

### Claves para el Examen

- Si hay muchas figuras iguales excepto una: buscar la que rompe el patrón.
- Si hay rotaciones: verificar el ángulo (45°, 90°, 180°).
- Si hay conteo: los números suelen ser sucesivos.`,
  "razonamiento-espacial": `## Razonamiento Espacial

### Plegado de Papel

Se muestra un papel con perforaciones y se pregunta cómo queda al plegar.

### Estrategia

1. Seguir cada pliegue paso a paso.
2. Marcar la posición de las perforaciones.
3. Verificar superposiciones.

### Ejemplo

Papel cuadrado, plegar por la mitad (de izq a der), luego por la mitad (de arriba a abajo). Perforar esquina superior derecha.

Al desplegar: 4 perforaciones en las esquinas de la mitad derecha.

### Rotación de Figuras

Identificar si una figura es equivalente a otra tras rotación.

**Clave:** No confundir rotación con reflejo.

### Ejemplo

Una flecha apuntando arriba, rotada 90° → apunta a la derecha.

### Simetría

- **Eje de simetría:** Línea que divide la figura en dos mitades iguales.
- **Simetría rotational:** La figura se ve igual tras rotar cierto ángulo.

### Ejemplo

Cuadrado: 4 ejes de simetría, simetría rotational de 90°.

Rombo: 2 ejes de simetría.

### Construcción de Objetos 3D

Dada una vista plana, imaginar el objeto tridimensional.

**Ejemplo:** Dado un cubo desplegado, identificar cuáles caras son opuestas.

**Regla:** En un cubo desplegado en cruz, las caras opuestas están separadas por una cara intermedia.`,
  "problemas-compuestos-rm": `## Problemas Compuestos de Razonamiento Matemático

### Estrategia General

1. **Identificar** los conceptos involucrados (al menos 2 áreas).
2. **Descomponer** el problema en partes manejables.
3. **Resolver** cada parte y **combinar** resultados.

### Ejemplo 1: Algebra + Geometría

"Un rectángulo tiene largo x y ancho x−3. Su área es 70 cm². Calcular el perímetro."

x(x−3) = 70 → x²−3x−70 = 0 → (x−10)(x+7) = 0 → x = 10.

Largo = 10, ancho = 7. Perímetro = 2(10+7) = 34 cm.

### Ejemplo 2: Porcentajes + Mezclas

"Mezclar café de $20/kg con café de $35/kg para obtener 25 kg a $28/kg. ¿Cuántos kg de cada uno?"

20x + 35(25−x) = 28(25). 20x + 875 − 35x = 700. −15x = −175. x = 11.67 kg a $20.

### Ejemplo 3: Sucesiones + Álgebra

"En una PA, el tercer término es 14 y el séptimo es 30. ¿Cuánto es el vigésimo?"

a₁+2d = 14, a₁+6d = 30. Restando: 4d = 16 → d = 4. a₁ = 6.

a₂₀ = 6+19(4) = 82.

### Ejemplo 4: Probabilidad + Combinatoria

"De 10 personas (6H, 4M), formar un comité de 3 que tenga al menos 1 mujer. ¿Cuántos comités?"

Total: C(10,3) = 120. Solo hombres: C(6,3) = 20.

Con al menos 1 mujer: 120−20 = 100.

### Ejemplo 5: Finanzas + Porcentajes

"Un producto cuesta $500. Si hay 20% de descuento y luego 16% de IVA, ¿cuánto paga el cliente?"

Con descuento: 500(0.80) = $400. Con IVA: 400(1.16) = $464.

Descuento total efectivo: 100−464/500 = 7.2%.

### Ejemplo 6: Lógica + Conjuntos

"De 200 personas: 120 gustan de fútbol, 80 de baloncesto, 60 de tenis. 40 F∩B, 30 F∩T, 20 B∩T, 10 los tres. ¿Cuántos no gustan de ninguno?"

|F∪B∪T| = 120+80+60−40−30−20+10 = 180. Ninguno: 200−180 = 20.

### Claves para Problemas Compuestos

- **Lee todo el problema** antes de empezar.
- **Identifica** todas las áreas de matemáticas involucradas.
- **Descompón** en subproblemas.
 **Verifica** cada paso y el resultado final.`,
};
