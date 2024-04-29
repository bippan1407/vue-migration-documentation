# Command Line Interface (CLI)

## Options
--projectLocation - takes location of your project or location of vue file it needs to convert.

--transformFolder - takes location of folder where you want to keep your new transformed vue files. This will not change the orignal vue files.

Adding folder as project location to convert
```bash
vue-migration --projectLocation="/projectLocation" --transformFolder="/transformFolder"
```

Adding file as project location to convert a single file
```bash
vue-migration --projectLocation="/projectLocation/test.vue" --transformFolder="/transformFolder"
```

If you want to change orignal files you can add --dryRun=false.
```bash
vue-migration --projectLocation="" --dryRun=false
```

> [!NOTE]
> If a have lot of options to be passed through cli it is advised to use json file as configuration. Check how json configuration [json configration](/docs/using-vue-migration/json-configuration.md) works.

