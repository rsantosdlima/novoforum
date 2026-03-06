#!/bin/bash
echo "🚀 Instalando dependências e iniciando servidor Node.js..."
npm install
# Mata qualquer servidor anterior na 8080
kill $(lsof -t -i :8080) 2>/dev/null || true
echo "Acesse a aba Ports do Codespaces e abra o link da porta 8080."
npm start
