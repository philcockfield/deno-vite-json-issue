# Issue Reproduction

A sample Deno + Vite repo that demonstrates importing from a [JSR hosted module](https://jsr.io/@sys/std/0.0.132/deno.json) that contains a
`with { type: 'json' }` import:

```ts
import { default as deno } from '../deno.json' with { type: 'json' };
```

## Reproduction

Install and attempt to run a build:

```
deno install
deno task build
```

This will produce the following error output:

```
✓ 20 modules transformed.
✗ Build failed in 760ms
error during build:
[commonjs--resolver] Unsupported: {
  "kind": "asserted",
  "specifier": "https://jsr.io/@sys/std/0.0.132/deno.json",
  "local": "/<path-to-user>/Library/Caches/deno/remote/https/jsr.io/5778d1392f68fdb2097931e6e165ac8682520a3199499c0edbaa30c653497e3f",
  "size": 1012,
  "mediaType": "Json"
}
    at resolveDeno (file:///<path-to-repo>/node_modules/.deno/@deno+vite-plugin@1.0.0/node_modules/@deno/vite-plugin/dist/resolver.js:63:11)
    at Object.runMicrotasks (ext:core/01_core.js:686:26)
```

## References

- Typescript file: https://jsr.io/@sys/std/0.0.132/src/pkg.ts

- ↑ referenced JSON file: https://jsr.io/@sys/std/0.0.132/deno.json

- Issue: https://github.com/denoland/deno-vite-plugin/issues/52
