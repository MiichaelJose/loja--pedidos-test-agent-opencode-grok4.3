#!/bin/bash
set -e

echo "Waiting for MongoDB to be ready..."
until docker exec mongodb-loja mongosh --quiet --eval "db.runCommand({ ping: 1 })" > /dev/null 2>&1; do
  sleep 2
done

echo "Checking if replica set is already initialized..."
if docker exec mongodb-loja mongosh --quiet -u admin -p admin --authenticationDatabase admin --eval "rs.status()" > /dev/null 2>&1; then
  echo "Replica set rs0 is already initialized."
else
  echo "Initializing replica set rs0..."
  docker exec mongodb-loja mongosh --quiet -u admin -p admin --authenticationDatabase admin --eval '
    rs.initiate({
      _id: "rs0",
      members: [{ _id: 0, host: "localhost:27017" }]
    })
  '
  echo "Replica set initialized successfully!"
fi
