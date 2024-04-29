# Options



- isDev: boolean, default false 
  - when you want to add see the errors on the console.
- projectLocation: Array[string] | string
  - can be location to file or folder
- transformedFolderLocation: string
  - when you want to save the changes to different folder.
- dryRun: boolean, default true
  - when you dont want to modify the current files
- emptyTransformFolder: boolean, default false
  - set to true if you want to delete the transformedFolderLocation files before adding new files to it.
- saveErrorLogs: boolean, default false
- saveErrorLogsFilePath: string
  - if saveErrorLogs is set to true add folder location to save the file.
- saveVuexPropertiesFileLocation: string
  - location to save configuration file generated during transformation. 
  > [!NOTE]
  > File generated will be used by vue-migration to update the names of state, mutation, action, and getters in .vue files.


### Example of config.json

```json
{
  "isDev": true,
  "projectLocation": "/projectLocation/store",
  "dryRun": false,
  "emptyTransformFolder": true,
  "saveErrorLogs": true,
  "saveErrorLogsFilePath": "/projectLocation/",
  "saveVuexPropertiesFileLocation": "/projectLocation/"
}
```