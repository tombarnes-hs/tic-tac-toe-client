# sh curl-scripts/update.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${GAME.ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'${INDEX}'",
        "value": "'${CURRENLETER}'",
      },
      "over": "'${GAMEOVER}'"
      }
    }
  }'

echo
