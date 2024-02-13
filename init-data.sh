#!/bin/bash
set -e;

# Make sure this script doesn't encounter any errors while building the docker container for the first time
# Carriage returns might be a problem (the first line #!/bin/bash will create an error)
# On Windows Docker Desktop i had to use the following command (in linux env):
# $ sed -i -e 's/\r$//' init-data.sh


if [ -n "${DATABASE_USERNAME:-}" ] && [ -n "${DATABASE_PASSWORD:-}" ]; then
	psql -v ON_ERROR_STOP=1 postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/$POSTGRES_DB <<-EOSQL
		CREATE DATABASE ${DATABASE_NAME};
		CREATE USER ${DATABASE_USERNAME} WITH PASSWORD '${DATABASE_PASSWORD}';
		GRANT ALL PRIVILEGES ON DATABASE ${DATABASE_NAME} TO ${DATABASE_USERNAME};
	EOSQL
else
	echo "SETUP INFO: No Environment variables given!"
fi