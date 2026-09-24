$outFile = "C:\Users\USUARIO\OneDrive\Documents\Default Project\src\data\geo-extra-batch-b.ts"

$lines = @()
$lines += 'import type { CourseExercise } from "../../lib/course-content";'
$lines += ''
$lines += 'export const geoExtraBatchB: Record<string, CourseExercise[]> = {'

function Write-Slug($slug, $exercises) {
    $script:lines += "  `"$slug`": ["
    for ($i = 0; $i -lt $exercises.Count; $i++) {
        $e = $exercises[$i]
        $comma = if ($i -lt $exercises.Count - 1) { "," } else { "" }
        $script:lines += "    { id: $($e.id), question: `"$($e.question)`", options: [$($e.options)], correctIndex: $($e.correctIndex), explanation: `"$($e.explanation)`", difficulty: `"$($e.difficulty)`" }$comma"
    }
    $script:lines += "  ],"
}

# rectas-y-planos
$slug1 = @(
    @{ id=10101; question="¿Cuántas formas puede haber de la intersección entre una recta y un plano en el espacio?"; options=@('"3: coincide, corta o es paralela"','"2: paralela o se cortan"','"1: siempre se cortan"','"4: todas las anteriores"'); correctIndex=0; explanation="Una recta y un plano pueden: ser paralelos, cortarse en un punto, o la recta estar contenida en el plano."; difficulty="basic" },
    @{ id=10102; question="Si dos planos se cortan, ¿cuál es la figura formada por su intersección?"; options=@('"Una recta"','"Un punto"','"Un plano"','"Un segmento"'); correctIndex=0; explanation="La intersección de dos planos distintos no paralelos es siempre una recta."; difficulty="basic" },
    @{ id=10103; question="¿Cuántas rectas distintas pueden pasar por un punto y ser paralelas a un plano dado?"; options=@('"Infinitas"','"Una sola"','"Ninguna"','"Dos"'); correctIndex=0; explanation="Por un punto exterior a un plano pasan infinitas rectas paralelas a ese plano."; difficulty="basic" },
    @{ id=10104; question="¿Qué condición deben cumplir dos rectas paralelas para que ambas sean paralelas a un plano?"; options=@('"Al menos una debe ser paralela al plano y no estar contenida en él"','"Ambas deben estar en el plano"','"No existe condición"','"Deben ser perpendiculares al plano"'); correctIndex=0; explanation="Si dos rectas son paralelas y una es paralela a un plano, la otra también lo es."; difficulty="intermediate" },
    @{ id=10105; question="Una recta es perpendicular a dos rectas concurrentes en un plano. ¿Qué se puede concluir?"; options=@('"La recta es perpendicular al plano"','"La recta es paralela al plano"','"La recta está contenida en el plano"','"No se puede determinar"'); correctIndex=0; explanation="Si una recta es perpendicular a dos rectas concurrentes de un plano, es perpendicular al plano completo."; difficulty="intermediate" },
    @{ id=10106; question="Dos planos paralelos son cortados por un tercer plano. ¿Qué relación tienen las rectas de intersección?"; options=@('"Son paralelas entre sí"','"Se cortan en un punto"','"Son perpendiculares"','"Coinciden"'); correctIndex=0; explanation="Si dos planos paralelos son cortados por un tercer plano, las rectas de intersección son paralelas."; difficulty="intermediate" },
    @{ id=10107; question="¿Cuántos planos distintos pasan por tres puntos no colineales?"; options=@('"Uno y solo uno"','"Infinitos"','"Dos"','"Ninguno"'); correctIndex=0; explanation="Tres puntos no colineales determinan un único plano, postulado fundamental de la geometría del espacio."; difficulty="intermediate" },
    @{ id=10108; question="¿Cuántos planos determinan cuatro puntos en el espacio, tres colineales y el cuarto fuera de esa recta?"; options=@('"Uno"','"Cuatro"','"Dos"','"Infinitos"'); correctIndex=0; explanation="Los tres puntos colineales definen una recta; esa recta y el cuarto punto determinan un único plano."; difficulty="advanced" },
    @{ id=10109; question="Si α ∥ β y γ los corta en las rectas r y s, ¿qué relación hay entre r y s?"; options=@('"r ∥ s"','"r y s se cortan"','"r y s coinciden"','"r ⊥ s"'); correctIndex=0; explanation="Cuando dos planos paralelos son cortados por un tercer plano, las rectas de intersección resultantes son paralelas."; difficulty="advanced" },
    @{ id=10110; question="¿Cuántas rectas paralelas a una dada pasan por un punto exterior a ella en el espacio?"; options=@('"Una sola"','"Infinitas"','"Ninguna"','"Dos"'); correctIndex=0; explanation="Por un punto exterior a una recta pasa exactamente una recta paralela a la dada."; difficulty="advanced" }
)
Write-Slug "rectas-y-planos" $slug1

$lines += '};'
$lines -join "`r`n" | Set-Content -Path $outFile -Encoding UTF8
