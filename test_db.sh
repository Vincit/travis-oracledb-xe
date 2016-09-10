export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe; 
export ORACLE_SID=XE; 
$ORACLE_HOME/bin/sqlplus -S travis/travis <<SQL
whenever sqlerror exit 2;
create table "test" ("id" integer not null primary key, "name" varchar2(255), "created_at" timestamp with time zone, "updated_at" timestamp with time zone);
drop table "test";
SQL