<?php
/**
 * Database Configuration
 *
 * All of your system's database connection settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/DbConfig.php.
 *
 * @see craft\config\DbConfig
 */

use craft\helpers\App;

preg_match('|mysql://([a-z0-9]*):([a-z0-9]*)@([^:]*):([0-9]*)/(.*)|i', getenv('DATABASE_URL'), $matches);

$user = $matches[1];
$password = $matches[2];
$server = $matches[3];
$port = $matches[4];
$database = $matches[5];

return [
  'driver' => "mysql",
  'server' => $server,
  'user' => $user,
  'password' => $password,
  'database' => $database,
  'schema' => getenv('DB_SCHEMA'),
  'tablePrefix' => getenv('DB_TABLE_PREFIX'),
  'port' => $port
];
