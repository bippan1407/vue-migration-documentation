# JSON Configuration

create json file with name as migration.config.json.

```json
{
  "projectLocation": "/projectLocation/",
  "vuexMigrationJson": "/projectLocation/vuex-properties.json",
  "dryRun": false,
  "emptyTransformFolder": true,
  "saveErrorLogs": true,
  "commentAxios": false,
  "commentOtherCode": true,
  "replaceThisExpression": {
    "$axios": {
      "replaceWith": "$axios",
      "isPlugin": true
    }
  }
}
```

>[!Note]
> value to vuexMigrationJson property can only be provided after running [vuex-to-pinia-transform](https://www.npmjs.com/package/vuex-to-pinia-transform), this field can be removed from configuration when transformation is not run.

Run vue-migration using json configuration.

```bash
vue-migration --configLocation="/migration.config.json"
```
