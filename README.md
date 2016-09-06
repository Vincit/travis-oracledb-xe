# Install and Setup Oracle Database Express Edition to your Travis CI

To use this installer you must accept 
[OTN License Agreement for Oracle Database Express Edition 11g Release 2](http://www.oracle.com/technetwork/licenses/database-11g-express-license-459621.html)

Installer setup automatically Oracle Database Express Edition to your Travis CI environment.

## Usage 

Just add the installer script to `.travis.yml`:

```
sudo: required

matrix:
  include:
    - env: APT_ADDON=0 DIST=precise
      dist: precise
      addons:s
        apt: false
    - env: APT_ADDON=0 DIST=trusty
      dist: trusty
      addons:
        apt: false

before_install:
  - wget https://raw.githubusercontent.com/Vincit/travis-oracledb-xe/master/accept_the_license_agreement_for_oracledb_xe_11g_and_install.sh 
  - bash ./accept_the_license_agreement_for_oracledb_xe_11g_and_install.sh 
```

