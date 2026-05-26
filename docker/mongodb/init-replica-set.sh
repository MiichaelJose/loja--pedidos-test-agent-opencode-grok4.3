#!/bin/bash
set -e

# Start MongoDB in background
mongod --replSet rs0 --keyFile /etc/mongo-keyfile --bind_ip_all --fork --logpath /var/log/mongodb/mongod.log

echo "Waiting for MongoDB to be ready..."
until mongosh --quiet --eval "db.runCommand({ ping: 1 })" > /dev/null 2>&1; do
  sleep 2
done

echo "Checking replica set status..."
if mongosh --quiet --eval "rs.status()" > /dev/null 2>&1; then
  echo "Replica set already initialized."
else
  echo "Initializing replica set rs0..."
  mongosh --eval '
    rs.initiate({
      _id: "rs0",
      members: [{ _id: 0, host: "localhost:27017" }]
    })
  '
  echo "Replica set initialized successfully."
fi

# Bring MongoDB to foreground
exec tail -f /var/log/mongodb/mongod.log
