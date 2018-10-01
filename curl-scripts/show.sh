# sh curl-scripts/show.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${GAME.ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
