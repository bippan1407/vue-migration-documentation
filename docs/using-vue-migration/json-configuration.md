# JSON Configuration

create json file with name as migration.config.json.

```json
{
  "projectLocation": "/projectLocation",
  "dryRun": true,
  "transformedFolderLocation": "/projectLocation/transformedFiles",
  "emptyTransformFolder": true,
  "saveErrorLogs": true,
  "saveErrorLogsFilePath": "/users/projectLocation",
}
```

Run vue-migration using json configuration.

```bash
vue-migration --configLocation="/migration.config.json"
```
