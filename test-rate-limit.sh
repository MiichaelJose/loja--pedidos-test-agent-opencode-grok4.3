#!/bin/bash

# =============================================================================
# Script de Teste de Rate Limiting
# =============================================================================
# Uso: ./test-rate-limit.sh [endpoint] [total_requests] [delay_seconds]
#
# Exemplos:
#   ./test-rate-limit.sh /produtos
#   ./test-rate-limit.sh /categorias 150 0.05
#   ./test-rate-limit.sh /usuarios 200 0.02
# =============================================================================

ENDPOINT=${1:-"/produtos"}
TOTAL_REQUESTS=${2:-120}
DELAY=${3:-0.1}
BASE_URL="http://localhost:3000"

echo "========================================"
echo "Teste de Rate Limiting"
echo "========================================"
echo "Endpoint:     $BASE_URL$ENDPOINT"
echo "Total reqs:   $TOTAL_REQUESTS"
echo "Delay:        ${DELAY}s entre requisições"
echo "========================================"
echo ""

SUCCESS=0
TOO_MANY=0
OTHER=0

for i in $(seq 1 $TOTAL_REQUESTS); do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$ENDPOINT")
    
    if [ "$STATUS" -eq 200 ] || [ "$STATUS" -eq 201 ]; then
        echo "[$i] $STATUS ✓"
        ((SUCCESS++))
    elif [ "$STATUS" -eq 429 ]; then
        echo "[$i] $STATUS ⛔ Too Many Requests"
        ((TOO_MANY++))
    else
        echo "[$i] $STATUS ⚠️"
        ((OTHER++))
    fi

    sleep "$DELAY"
done

echo ""
echo "========================================"
echo "Resultado Final"
echo "========================================"
echo "Sucesso (200/201): $SUCCESS"
echo "Bloqueado (429):   $TOO_MANY"
echo "Outros status:     $OTHER"
echo "Total:             $TOTAL_REQUESTS"
echo "========================================"
