# JSON Configuration

create json file with name as migration.config.json.

```json
{
  "isDev": false,
  "projectLocation": "/projectLocation/store",
  "dryRun": false,
  "emptyTransformFolder": true,
  "saveErrorLogs": true,
  "saveErrorLogsFilePath": "/projectLocation/",
  "saveVuexPropertiesFileLocation": "/projectLocation/"
}
```

if no file name is specified in saveVuexPropertiesFileLocation .json file is created with `vuex-properties.json` as default file name.

Run vuex-to-pinia-transform using json configuration.

```bash
vuex-to-pinia-transform --configLocation="/migration.config.json"
```