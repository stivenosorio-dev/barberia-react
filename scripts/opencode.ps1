# Abre OpenCode desde la raíz del proyecto cargando SOLO CONTEXT7_API_KEY desde .env.
# OpenCode lee {env:...} del entorno del proceso, no de archivos .env; por eso este script.
# No carga APPS_SCRIPT_* ni IP_HASH_SALT para no exponerlos a los comandos de los agentes.
$root = Join-Path $PSScriptRoot ".."
Set-Location $root
$envFile = Join-Path $root ".env"
if (Test-Path $envFile) {
  foreach ($line in Get-Content $envFile) {
    if ($line -match '^\s*CONTEXT7_API_KEY\s*=\s*(.*?)\s*$') {
      $value = $Matches[1].Trim('"').Trim("'")
      if ($value) { $env:CONTEXT7_API_KEY = $value }
    }
  }
} else {
  Write-Warning ".env no encontrado; Context7 funcionara sin clave (limites mas bajos)."
}
opencode @args
