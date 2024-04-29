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
- commentAxios: boolean, default true
  - if you want to comment this.$axios syntax and want to replace manually
- commentOtherCode - boolean, default true
  - be default code which cannot cannot be converted will be commented with prefix TODO
- replaceThisExpression: Array[object]
  - if you want to replace ```this.$axios.gett()``` syntax to ```$axios.get()``` assumming  axios in plugin you can add object like 
    ```json
    "$axios": {
        "replaceWith": "$axios",
        "isPlugin": true
    }
    ```

    New syntax that will be added
    ```js
    const { $axios } = useNuxtApp()
    $axios.get(...)
    ```
  - if you want to replace ```this.$nextTick``` syntax to ```nextTick``` you can add object like 
    ```json
    "$nextTick": {
        "replaceWith": "nextTick",
        "isPlugin": false
    }
    ```
    
    New syntax that will be added
    ```js
    nextTick(() => {...})
    ```
  - if you want to add new import of your function you can add object like 
    ```json
    "addValues": {
        "replaceWith": "addValues",
        "isPlugin": false,
        "isImport": true,
        "importSyntax": "import addValues from '~/utils/addValues'"
    }
    ```

    New syntax that will be added
    ```js
    import addValues from '~/utils/addValues'

    ...

    addValues(10,20)
    ``` 


### Example of config.json

```json
{
    "isDev": true,
    "projectLocation": "",
    "transformedFolderLocation": null,
    "dryRun": false,
    "emptyTransformFolder": false,
    "saveErrorLogs": true,
    "saveErrorLogsFilePath": "",
    "commentAxios": false,
    "commentOtherCode": true,
    "replaceThisExpression": {
        "$axios": {
          "replaceWith": "$axios",
          "isPlugin": true
        },
        "$moment": {
            "replaceWith": "$moment",
            "isPlugin": true
        },
        "$dayjs": {
            "replaceWith": "$dayjs",
            "isPlugin": true
        },
        "$nextTick": {
            "replaceWith": "nextTick",
            "isPlugin": false
        },
        "addValues": {
            "replaceWith": "addValues",
            "isPlugin": false,
            "isImport": true,
            "importSyntax": "import addValues from '~/utils/addValues'"
        }
    }
}
```