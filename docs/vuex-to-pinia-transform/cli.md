# Command Line Interface (CLI)

## Options
--projectLocation - takes location of folder where vuex files are present.

--transformFolder - takes location of folder where you want to keep your new transformed vuex to pinia files. This will not change the orignal .js vuex files.

Adding folder as project location to convert
```bash
vuex-to-pinia-transform --projectLocation="/projectLocation/store" --transformFolder="/transformFolder"
```

Adding file as project location to convert a single file
```bash
vuex-to-pinia-transform --projectLocation="/projectLocation/store/test.js" --transformFolder="/transformFolder"
```

If you want to change orignal files you can add --dryRun=false.
```bash
vuex-to-pinia-transform --projectLocation="" --dryRun=false
```

> [!NOTE]
> If a have lot of options to be passed through cli it is advised to use json file as configuration. Check how json configuration [json configration](/docs/vuex-to-pinia-transform/json-configuration.md) works.

