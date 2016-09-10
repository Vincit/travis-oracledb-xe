[![Build Status](https://travis-ci.org/Vincit/travis-oracledb-xe.svg?branch=master)](https://travis-ci.org/Vincit/travis-oracledb-xe)

# Install and Setup Oracle Database Express Edition to your Travis CI

To use this installer you must accept 
[OTN License Agreement for Oracle Database Express Edition 11g Release 2](http://www.oracle.com/technetwork/licenses/database-11g-express-license-459621.html)

Installer setup automatically Oracle Database Express Edition to your Travis CI environment.

## Usage 

Just add the installer script to `.travis.yml`:

```yaml
sudo: required

env:
  - ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe ORACLE_SID=XE

before_install:
  - wget https://raw.githubusercontent.com/Vincit/travis-oracledb-xe/master/accept_the_license_agreement_for_oracledb_xe_11g_and_install.sh 
  - bash ./accept_the_license_agreement_for_oracledb_xe_11g_and_install.sh 
```

And you will be able to connect the database in `localhost:1521` with user/pass: `travis/travis` and with `SYSDBA` role user/pass: `sys/travis`.
