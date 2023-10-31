docker build --no-cache -f SQL\Dockerfile.PostgreSql -t mukha4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t mukha4/app ../..
