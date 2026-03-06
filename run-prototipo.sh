#!/bin/bash
echo "🚀 Iniciando servidor para o Protótipo CIP..."
cd src/main/resources/static
# Mata processos rodando na porta 8080 caso existam
kill $(lsof -t -i :8080) 2>/dev/null || true
echo "Acesse a aba Ports do Codespaces e abra o link da porta 8080."
python3 -m http.server 8080
