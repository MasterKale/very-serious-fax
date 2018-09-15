# very-serious-fax

An A-Frame-powered transmission medium of the future

## Requirements

- Node (v8.12.0)
- Yarn (latest)

Install dependencies with the following command before proceeding:

```sh
$> yarn install
```

## Development

A development liveserver can be launched with a typical `start` command:

```sh
$> yarn start
```

The liveserver will be available at http://localhost:8080/. It will automatically reload whenever it detects changes to the source files.

## Production

A production build of the site can be generated via `build`:

```sh
$> yarn run build
```

The built site files will be contained within the **dist/** folder.
